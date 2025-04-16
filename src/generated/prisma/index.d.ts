
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
 * Model Bimbingan
 * 
 */
export type Bimbingan = $Result.DefaultSelection<Prisma.$BimbinganPayload>
/**
 * Model DailyReport
 * 
 */
export type DailyReport = $Result.DefaultSelection<Prisma.$DailyReportPayload>
/**
 * Model DetailDailyReport
 * 
 */
export type DetailDailyReport = $Result.DefaultSelection<Prisma.$DetailDailyReportPayload>
/**
 * Model Dokumen
 * 
 */
export type Dokumen = $Result.DefaultSelection<Prisma.$DokumenPayload>
/**
 * Model Dosen
 * 
 */
export type Dosen = $Result.DefaultSelection<Prisma.$DosenPayload>
/**
 * Model Instansi
 * 
 */
export type Instansi = $Result.DefaultSelection<Prisma.$InstansiPayload>
/**
 * Model Jadwal
 * 
 */
export type Jadwal = $Result.DefaultSelection<Prisma.$JadwalPayload>
/**
 * Model LogJadwal
 * 
 */
export type LogJadwal = $Result.DefaultSelection<Prisma.$LogJadwalPayload>
/**
 * Model Mahasiswa
 * 
 */
export type Mahasiswa = $Result.DefaultSelection<Prisma.$MahasiswaPayload>
/**
 * Model Nilai
 * 
 */
export type Nilai = $Result.DefaultSelection<Prisma.$NilaiPayload>
/**
 * Model NilaiInstansi
 * 
 */
export type NilaiInstansi = $Result.DefaultSelection<Prisma.$NilaiInstansiPayload>
/**
 * Model PembimbingInstansi
 * 
 */
export type PembimbingInstansi = $Result.DefaultSelection<Prisma.$PembimbingInstansiPayload>
/**
 * Model PendaftaranKP
 * 
 */
export type PendaftaranKP = $Result.DefaultSelection<Prisma.$PendaftaranKPPayload>
/**
 * Model Ruangan
 * 
 */
export type Ruangan = $Result.DefaultSelection<Prisma.$RuanganPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DokumenStatus: {
  submitted: 'submitted',
  verified: 'verified',
  rejected: 'rejected'
};

export type DokumenStatus = (typeof DokumenStatus)[keyof typeof DokumenStatus]


export const JenisDokumen: {
  SURAT_KETERANGAN_SELESAI_KP: 'SURAT_KETERANGAN_SELESAI_KP',
  LAPORAN_TAMBAHAN_KP: 'LAPORAN_TAMBAHAN_KP',
  ID_SURAT_UNDANGAN: 'ID_SURAT_UNDANGAN',
  FORM_KEHADIRAN_SEMINAR: 'FORM_KEHADIRAN_SEMINAR',
  SURAT_UNDANGAN_SEMINAR_HASIL: 'SURAT_UNDANGAN_SEMINAR_HASIL',
  BERITA_ACARA_SEMINAR: 'BERITA_ACARA_SEMINAR',
  DAFTAR_HADIR_SEMINAR: 'DAFTAR_HADIR_SEMINAR',
  LEMBAR_PENGESAHAN_KP: 'LEMBAR_PENGESAHAN_KP',
  REVISI_DAILY_REPORT: 'REVISI_DAILY_REPORT',
  REVISI_LAPORAN_TAMBAHAN: 'REVISI_LAPORAN_TAMBAHAN',
  SISTEM_KP_FINAL: 'SISTEM_KP_FINAL'
};

export type JenisDokumen = (typeof JenisDokumen)[keyof typeof JenisDokumen]


export const JenisInstansi: {
  SWASTA: 'SWASTA',
  PEMERINTAHAN: 'PEMERINTAHAN',
  PENDIDIKAN: 'PENDIDIKAN',
  UMKM: 'UMKM'
};

export type JenisInstansi = (typeof JenisInstansi)[keyof typeof JenisInstansi]


export const LogType: {
  created: 'created',
  updated: 'updated',
  cancelled: 'cancelled',
  rescheduled: 'rescheduled'
};

export type LogType = (typeof LogType)[keyof typeof LogType]


export const StatusInstansi: {
  PENDING: 'PENDING',
  AKTIF: 'AKTIF',
  TIDAK_AKTIF: 'TIDAK_AKTIF'
};

export type StatusInstansi = (typeof StatusInstansi)[keyof typeof StatusInstansi]


export const StatusSeminar: {
  pending: 'pending',
  scheduled: 'scheduled',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type StatusSeminar = (typeof StatusSeminar)[keyof typeof StatusSeminar]


export const StatusValidasi: {
  MENUNGGU: 'MENUNGGU',
  VALID: 'VALID',
  REVISI: 'REVISI'
};

export type StatusValidasi = (typeof StatusValidasi)[keyof typeof StatusValidasi]

}

export type DokumenStatus = $Enums.DokumenStatus

export const DokumenStatus: typeof $Enums.DokumenStatus

export type JenisDokumen = $Enums.JenisDokumen

export const JenisDokumen: typeof $Enums.JenisDokumen

export type JenisInstansi = $Enums.JenisInstansi

export const JenisInstansi: typeof $Enums.JenisInstansi

export type LogType = $Enums.LogType

export const LogType: typeof $Enums.LogType

export type StatusInstansi = $Enums.StatusInstansi

export const StatusInstansi: typeof $Enums.StatusInstansi

export type StatusSeminar = $Enums.StatusSeminar

export const StatusSeminar: typeof $Enums.StatusSeminar

export type StatusValidasi = $Enums.StatusValidasi

export const StatusValidasi: typeof $Enums.StatusValidasi

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bimbingans
 * const bimbingans = await prisma.bimbingan.findMany()
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
   * // Fetch zero or more Bimbingans
   * const bimbingans = await prisma.bimbingan.findMany()
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
   * `prisma.bimbingan`: Exposes CRUD operations for the **Bimbingan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bimbingans
    * const bimbingans = await prisma.bimbingan.findMany()
    * ```
    */
  get bimbingan(): Prisma.BimbinganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyReport`: Exposes CRUD operations for the **DailyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReports
    * const dailyReports = await prisma.dailyReport.findMany()
    * ```
    */
  get dailyReport(): Prisma.DailyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailDailyReport`: Exposes CRUD operations for the **DetailDailyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailDailyReports
    * const detailDailyReports = await prisma.detailDailyReport.findMany()
    * ```
    */
  get detailDailyReport(): Prisma.DetailDailyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dokumen`: Exposes CRUD operations for the **Dokumen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dokumen
    * const dokumen = await prisma.dokumen.findMany()
    * ```
    */
  get dokumen(): Prisma.DokumenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dosen`: Exposes CRUD operations for the **Dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.DosenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instansi`: Exposes CRUD operations for the **Instansi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instansis
    * const instansis = await prisma.instansi.findMany()
    * ```
    */
  get instansi(): Prisma.InstansiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal`: Exposes CRUD operations for the **Jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.JadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logJadwal`: Exposes CRUD operations for the **LogJadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogJadwals
    * const logJadwals = await prisma.logJadwal.findMany()
    * ```
    */
  get logJadwal(): Prisma.LogJadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **Mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.MahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nilai`: Exposes CRUD operations for the **Nilai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nilais
    * const nilais = await prisma.nilai.findMany()
    * ```
    */
  get nilai(): Prisma.NilaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nilaiInstansi`: Exposes CRUD operations for the **NilaiInstansi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NilaiInstansis
    * const nilaiInstansis = await prisma.nilaiInstansi.findMany()
    * ```
    */
  get nilaiInstansi(): Prisma.NilaiInstansiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembimbingInstansi`: Exposes CRUD operations for the **PembimbingInstansi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PembimbingInstansis
    * const pembimbingInstansis = await prisma.pembimbingInstansi.findMany()
    * ```
    */
  get pembimbingInstansi(): Prisma.PembimbingInstansiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendaftaranKP`: Exposes CRUD operations for the **PendaftaranKP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendaftaranKPS
    * const pendaftaranKPS = await prisma.pendaftaranKP.findMany()
    * ```
    */
  get pendaftaranKP(): Prisma.PendaftaranKPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruangan`: Exposes CRUD operations for the **Ruangan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ruangans
    * const ruangans = await prisma.ruangan.findMany()
    * ```
    */
  get ruangan(): Prisma.RuanganDelegate<ExtArgs, ClientOptions>;
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
    Bimbingan: 'Bimbingan',
    DailyReport: 'DailyReport',
    DetailDailyReport: 'DetailDailyReport',
    Dokumen: 'Dokumen',
    Dosen: 'Dosen',
    Instansi: 'Instansi',
    Jadwal: 'Jadwal',
    LogJadwal: 'LogJadwal',
    Mahasiswa: 'Mahasiswa',
    Nilai: 'Nilai',
    NilaiInstansi: 'NilaiInstansi',
    PembimbingInstansi: 'PembimbingInstansi',
    PendaftaranKP: 'PendaftaranKP',
    Ruangan: 'Ruangan'
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
      modelProps: "bimbingan" | "dailyReport" | "detailDailyReport" | "dokumen" | "dosen" | "instansi" | "jadwal" | "logJadwal" | "mahasiswa" | "nilai" | "nilaiInstansi" | "pembimbingInstansi" | "pendaftaranKP" | "ruangan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bimbingan: {
        payload: Prisma.$BimbinganPayload<ExtArgs>
        fields: Prisma.BimbinganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BimbinganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BimbinganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>
          }
          findFirst: {
            args: Prisma.BimbinganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BimbinganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>
          }
          findMany: {
            args: Prisma.BimbinganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>[]
          }
          create: {
            args: Prisma.BimbinganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>
          }
          createMany: {
            args: Prisma.BimbinganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BimbinganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>[]
          }
          delete: {
            args: Prisma.BimbinganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>
          }
          update: {
            args: Prisma.BimbinganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>
          }
          deleteMany: {
            args: Prisma.BimbinganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BimbinganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BimbinganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>[]
          }
          upsert: {
            args: Prisma.BimbinganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BimbinganPayload>
          }
          aggregate: {
            args: Prisma.BimbinganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBimbingan>
          }
          groupBy: {
            args: Prisma.BimbinganGroupByArgs<ExtArgs>
            result: $Utils.Optional<BimbinganGroupByOutputType>[]
          }
          count: {
            args: Prisma.BimbinganCountArgs<ExtArgs>
            result: $Utils.Optional<BimbinganCountAggregateOutputType> | number
          }
        }
      }
      DailyReport: {
        payload: Prisma.$DailyReportPayload<ExtArgs>
        fields: Prisma.DailyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findFirst: {
            args: Prisma.DailyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findMany: {
            args: Prisma.DailyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          create: {
            args: Prisma.DailyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          createMany: {
            args: Prisma.DailyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          delete: {
            args: Prisma.DailyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          update: {
            args: Prisma.DailyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          deleteMany: {
            args: Prisma.DailyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          upsert: {
            args: Prisma.DailyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          aggregate: {
            args: Prisma.DailyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReport>
          }
          groupBy: {
            args: Prisma.DailyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReportCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReportCountAggregateOutputType> | number
          }
        }
      }
      DetailDailyReport: {
        payload: Prisma.$DetailDailyReportPayload<ExtArgs>
        fields: Prisma.DetailDailyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailDailyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailDailyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>
          }
          findFirst: {
            args: Prisma.DetailDailyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailDailyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>
          }
          findMany: {
            args: Prisma.DetailDailyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>[]
          }
          create: {
            args: Prisma.DetailDailyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>
          }
          createMany: {
            args: Prisma.DetailDailyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailDailyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>[]
          }
          delete: {
            args: Prisma.DetailDailyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>
          }
          update: {
            args: Prisma.DetailDailyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>
          }
          deleteMany: {
            args: Prisma.DetailDailyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailDailyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailDailyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>[]
          }
          upsert: {
            args: Prisma.DetailDailyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailDailyReportPayload>
          }
          aggregate: {
            args: Prisma.DetailDailyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailDailyReport>
          }
          groupBy: {
            args: Prisma.DetailDailyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailDailyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailDailyReportCountArgs<ExtArgs>
            result: $Utils.Optional<DetailDailyReportCountAggregateOutputType> | number
          }
        }
      }
      Dokumen: {
        payload: Prisma.$DokumenPayload<ExtArgs>
        fields: Prisma.DokumenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DokumenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DokumenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          findFirst: {
            args: Prisma.DokumenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DokumenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          findMany: {
            args: Prisma.DokumenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>[]
          }
          create: {
            args: Prisma.DokumenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          createMany: {
            args: Prisma.DokumenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DokumenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>[]
          }
          delete: {
            args: Prisma.DokumenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          update: {
            args: Prisma.DokumenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          deleteMany: {
            args: Prisma.DokumenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DokumenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DokumenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>[]
          }
          upsert: {
            args: Prisma.DokumenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumenPayload>
          }
          aggregate: {
            args: Prisma.DokumenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDokumen>
          }
          groupBy: {
            args: Prisma.DokumenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DokumenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DokumenCountArgs<ExtArgs>
            result: $Utils.Optional<DokumenCountAggregateOutputType> | number
          }
        }
      }
      Dosen: {
        payload: Prisma.$DosenPayload<ExtArgs>
        fields: Prisma.DosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findFirst: {
            args: Prisma.DosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findMany: {
            args: Prisma.DosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          create: {
            args: Prisma.DosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          createMany: {
            args: Prisma.DosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DosenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          delete: {
            args: Prisma.DosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          update: {
            args: Prisma.DosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          deleteMany: {
            args: Prisma.DosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DosenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          upsert: {
            args: Prisma.DosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.DosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      Instansi: {
        payload: Prisma.$InstansiPayload<ExtArgs>
        fields: Prisma.InstansiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstansiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstansiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          findFirst: {
            args: Prisma.InstansiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstansiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          findMany: {
            args: Prisma.InstansiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>[]
          }
          create: {
            args: Prisma.InstansiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          createMany: {
            args: Prisma.InstansiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstansiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>[]
          }
          delete: {
            args: Prisma.InstansiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          update: {
            args: Prisma.InstansiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          deleteMany: {
            args: Prisma.InstansiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstansiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstansiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>[]
          }
          upsert: {
            args: Prisma.InstansiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstansiPayload>
          }
          aggregate: {
            args: Prisma.InstansiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstansi>
          }
          groupBy: {
            args: Prisma.InstansiGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstansiGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstansiCountArgs<ExtArgs>
            result: $Utils.Optional<InstansiCountAggregateOutputType> | number
          }
        }
      }
      Jadwal: {
        payload: Prisma.$JadwalPayload<ExtArgs>
        fields: Prisma.JadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findFirst: {
            args: Prisma.JadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findMany: {
            args: Prisma.JadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          create: {
            args: Prisma.JadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          createMany: {
            args: Prisma.JadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          delete: {
            args: Prisma.JadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          update: {
            args: Prisma.JadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          deleteMany: {
            args: Prisma.JadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          upsert: {
            args: Prisma.JadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.JadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
          }
        }
      }
      LogJadwal: {
        payload: Prisma.$LogJadwalPayload<ExtArgs>
        fields: Prisma.LogJadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogJadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogJadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>
          }
          findFirst: {
            args: Prisma.LogJadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogJadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>
          }
          findMany: {
            args: Prisma.LogJadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>[]
          }
          create: {
            args: Prisma.LogJadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>
          }
          createMany: {
            args: Prisma.LogJadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogJadwalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>[]
          }
          delete: {
            args: Prisma.LogJadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>
          }
          update: {
            args: Prisma.LogJadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>
          }
          deleteMany: {
            args: Prisma.LogJadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogJadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogJadwalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>[]
          }
          upsert: {
            args: Prisma.LogJadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogJadwalPayload>
          }
          aggregate: {
            args: Prisma.LogJadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogJadwal>
          }
          groupBy: {
            args: Prisma.LogJadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogJadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogJadwalCountArgs<ExtArgs>
            result: $Utils.Optional<LogJadwalCountAggregateOutputType> | number
          }
        }
      }
      Mahasiswa: {
        payload: Prisma.$MahasiswaPayload<ExtArgs>
        fields: Prisma.MahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findFirst: {
            args: Prisma.MahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findMany: {
            args: Prisma.MahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          create: {
            args: Prisma.MahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          createMany: {
            args: Prisma.MahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MahasiswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          delete: {
            args: Prisma.MahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          update: {
            args: Prisma.MahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.MahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MahasiswaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          upsert: {
            args: Prisma.MahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.MahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      Nilai: {
        payload: Prisma.$NilaiPayload<ExtArgs>
        fields: Prisma.NilaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NilaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NilaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          findFirst: {
            args: Prisma.NilaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NilaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          findMany: {
            args: Prisma.NilaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          create: {
            args: Prisma.NilaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          createMany: {
            args: Prisma.NilaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NilaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          delete: {
            args: Prisma.NilaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          update: {
            args: Prisma.NilaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          deleteMany: {
            args: Prisma.NilaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NilaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NilaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          upsert: {
            args: Prisma.NilaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          aggregate: {
            args: Prisma.NilaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNilai>
          }
          groupBy: {
            args: Prisma.NilaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NilaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.NilaiCountArgs<ExtArgs>
            result: $Utils.Optional<NilaiCountAggregateOutputType> | number
          }
        }
      }
      NilaiInstansi: {
        payload: Prisma.$NilaiInstansiPayload<ExtArgs>
        fields: Prisma.NilaiInstansiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NilaiInstansiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NilaiInstansiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>
          }
          findFirst: {
            args: Prisma.NilaiInstansiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NilaiInstansiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>
          }
          findMany: {
            args: Prisma.NilaiInstansiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>[]
          }
          create: {
            args: Prisma.NilaiInstansiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>
          }
          createMany: {
            args: Prisma.NilaiInstansiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NilaiInstansiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>[]
          }
          delete: {
            args: Prisma.NilaiInstansiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>
          }
          update: {
            args: Prisma.NilaiInstansiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>
          }
          deleteMany: {
            args: Prisma.NilaiInstansiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NilaiInstansiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NilaiInstansiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>[]
          }
          upsert: {
            args: Prisma.NilaiInstansiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiInstansiPayload>
          }
          aggregate: {
            args: Prisma.NilaiInstansiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNilaiInstansi>
          }
          groupBy: {
            args: Prisma.NilaiInstansiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NilaiInstansiGroupByOutputType>[]
          }
          count: {
            args: Prisma.NilaiInstansiCountArgs<ExtArgs>
            result: $Utils.Optional<NilaiInstansiCountAggregateOutputType> | number
          }
        }
      }
      PembimbingInstansi: {
        payload: Prisma.$PembimbingInstansiPayload<ExtArgs>
        fields: Prisma.PembimbingInstansiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembimbingInstansiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembimbingInstansiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>
          }
          findFirst: {
            args: Prisma.PembimbingInstansiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembimbingInstansiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>
          }
          findMany: {
            args: Prisma.PembimbingInstansiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>[]
          }
          create: {
            args: Prisma.PembimbingInstansiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>
          }
          createMany: {
            args: Prisma.PembimbingInstansiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembimbingInstansiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>[]
          }
          delete: {
            args: Prisma.PembimbingInstansiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>
          }
          update: {
            args: Prisma.PembimbingInstansiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>
          }
          deleteMany: {
            args: Prisma.PembimbingInstansiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembimbingInstansiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembimbingInstansiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>[]
          }
          upsert: {
            args: Prisma.PembimbingInstansiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembimbingInstansiPayload>
          }
          aggregate: {
            args: Prisma.PembimbingInstansiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembimbingInstansi>
          }
          groupBy: {
            args: Prisma.PembimbingInstansiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembimbingInstansiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembimbingInstansiCountArgs<ExtArgs>
            result: $Utils.Optional<PembimbingInstansiCountAggregateOutputType> | number
          }
        }
      }
      PendaftaranKP: {
        payload: Prisma.$PendaftaranKPPayload<ExtArgs>
        fields: Prisma.PendaftaranKPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendaftaranKPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendaftaranKPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>
          }
          findFirst: {
            args: Prisma.PendaftaranKPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendaftaranKPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>
          }
          findMany: {
            args: Prisma.PendaftaranKPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>[]
          }
          create: {
            args: Prisma.PendaftaranKPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>
          }
          createMany: {
            args: Prisma.PendaftaranKPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendaftaranKPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>[]
          }
          delete: {
            args: Prisma.PendaftaranKPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>
          }
          update: {
            args: Prisma.PendaftaranKPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>
          }
          deleteMany: {
            args: Prisma.PendaftaranKPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendaftaranKPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendaftaranKPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>[]
          }
          upsert: {
            args: Prisma.PendaftaranKPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranKPPayload>
          }
          aggregate: {
            args: Prisma.PendaftaranKPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendaftaranKP>
          }
          groupBy: {
            args: Prisma.PendaftaranKPGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendaftaranKPGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendaftaranKPCountArgs<ExtArgs>
            result: $Utils.Optional<PendaftaranKPCountAggregateOutputType> | number
          }
        }
      }
      Ruangan: {
        payload: Prisma.$RuanganPayload<ExtArgs>
        fields: Prisma.RuanganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuanganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuanganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          findFirst: {
            args: Prisma.RuanganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuanganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          findMany: {
            args: Prisma.RuanganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          create: {
            args: Prisma.RuanganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          createMany: {
            args: Prisma.RuanganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuanganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          delete: {
            args: Prisma.RuanganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          update: {
            args: Prisma.RuanganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          deleteMany: {
            args: Prisma.RuanganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuanganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuanganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          upsert: {
            args: Prisma.RuanganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          aggregate: {
            args: Prisma.RuanganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuangan>
          }
          groupBy: {
            args: Prisma.RuanganGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuanganGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuanganCountArgs<ExtArgs>
            result: $Utils.Optional<RuanganCountAggregateOutputType> | number
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
    bimbingan?: BimbinganOmit
    dailyReport?: DailyReportOmit
    detailDailyReport?: DetailDailyReportOmit
    dokumen?: DokumenOmit
    dosen?: DosenOmit
    instansi?: InstansiOmit
    jadwal?: JadwalOmit
    logJadwal?: LogJadwalOmit
    mahasiswa?: MahasiswaOmit
    nilai?: NilaiOmit
    nilaiInstansi?: NilaiInstansiOmit
    pembimbingInstansi?: PembimbingInstansiOmit
    pendaftaranKP?: PendaftaranKPOmit
    ruangan?: RuanganOmit
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
   * Count Type DailyReportCountOutputType
   */

  export type DailyReportCountOutputType = {
    DetailDailyReport: number
  }

  export type DailyReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailDailyReport?: boolean | DailyReportCountOutputTypeCountDetailDailyReportArgs
  }

  // Custom InputTypes
  /**
   * DailyReportCountOutputType without action
   */
  export type DailyReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReportCountOutputType
     */
    select?: DailyReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyReportCountOutputType without action
   */
  export type DailyReportCountOutputTypeCountDetailDailyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailDailyReportWhereInput
  }


  /**
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    Bimbingan: number
    Jadwal: number
    NilaiPenguji: number
    NilaiPembimbing: number
    PendaftaranKP: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bimbingan?: boolean | DosenCountOutputTypeCountBimbinganArgs
    Jadwal?: boolean | DosenCountOutputTypeCountJadwalArgs
    NilaiPenguji?: boolean | DosenCountOutputTypeCountNilaiPengujiArgs
    NilaiPembimbing?: boolean | DosenCountOutputTypeCountNilaiPembimbingArgs
    PendaftaranKP?: boolean | DosenCountOutputTypeCountPendaftaranKPArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BimbinganWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountNilaiPengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountNilaiPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountPendaftaranKPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftaranKPWhereInput
  }


  /**
   * Count Type InstansiCountOutputType
   */

  export type InstansiCountOutputType = {
    PembimbingInstansi: number
  }

  export type InstansiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembimbingInstansi?: boolean | InstansiCountOutputTypeCountPembimbingInstansiArgs
  }

  // Custom InputTypes
  /**
   * InstansiCountOutputType without action
   */
  export type InstansiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstansiCountOutputType
     */
    select?: InstansiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstansiCountOutputType without action
   */
  export type InstansiCountOutputTypeCountPembimbingInstansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembimbingInstansiWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    Bimbingan: number
    DailyReport: number
    Dokumen: number
    Jadwal: number
    PendaftaranKP: number
    Nilai: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bimbingan?: boolean | MahasiswaCountOutputTypeCountBimbinganArgs
    DailyReport?: boolean | MahasiswaCountOutputTypeCountDailyReportArgs
    Dokumen?: boolean | MahasiswaCountOutputTypeCountDokumenArgs
    Jadwal?: boolean | MahasiswaCountOutputTypeCountJadwalArgs
    PendaftaranKP?: boolean | MahasiswaCountOutputTypeCountPendaftaranKPArgs
    Nilai?: boolean | MahasiswaCountOutputTypeCountNilaiArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountBimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BimbinganWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountDailyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountDokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumenWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountPendaftaranKPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftaranKPWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountNilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiWhereInput
  }


  /**
   * Count Type NilaiCountOutputType
   */

  export type NilaiCountOutputType = {
    Mahasiswa: number
  }

  export type NilaiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | NilaiCountOutputTypeCountMahasiswaArgs
  }

  // Custom InputTypes
  /**
   * NilaiCountOutputType without action
   */
  export type NilaiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiCountOutputType
     */
    select?: NilaiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NilaiCountOutputType without action
   */
  export type NilaiCountOutputTypeCountMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
  }


  /**
   * Count Type PembimbingInstansiCountOutputType
   */

  export type PembimbingInstansiCountOutputType = {
    NilaiInstansi: number
    PendaftaranKP: number
  }

  export type PembimbingInstansiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NilaiInstansi?: boolean | PembimbingInstansiCountOutputTypeCountNilaiInstansiArgs
    PendaftaranKP?: boolean | PembimbingInstansiCountOutputTypeCountPendaftaranKPArgs
  }

  // Custom InputTypes
  /**
   * PembimbingInstansiCountOutputType without action
   */
  export type PembimbingInstansiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansiCountOutputType
     */
    select?: PembimbingInstansiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PembimbingInstansiCountOutputType without action
   */
  export type PembimbingInstansiCountOutputTypeCountNilaiInstansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiInstansiWhereInput
  }

  /**
   * PembimbingInstansiCountOutputType without action
   */
  export type PembimbingInstansiCountOutputTypeCountPendaftaranKPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftaranKPWhereInput
  }


  /**
   * Count Type RuanganCountOutputType
   */

  export type RuanganCountOutputType = {
    Jadwal: number
  }

  export type RuanganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jadwal?: boolean | RuanganCountOutputTypeCountJadwalArgs
  }

  // Custom InputTypes
  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuanganCountOutputType
     */
    select?: RuanganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bimbingan
   */

  export type AggregateBimbingan = {
    _count: BimbinganCountAggregateOutputType | null
    _min: BimbinganMinAggregateOutputType | null
    _max: BimbinganMaxAggregateOutputType | null
  }

  export type BimbinganMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    catatan: string | null
    status: $Enums.StatusValidasi | null
    nim: string | null
    nip: string | null
  }

  export type BimbinganMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    catatan: string | null
    status: $Enums.StatusValidasi | null
    nim: string | null
    nip: string | null
  }

  export type BimbinganCountAggregateOutputType = {
    id: number
    tanggal: number
    catatan: number
    status: number
    nim: number
    nip: number
    _all: number
  }


  export type BimbinganMinAggregateInputType = {
    id?: true
    tanggal?: true
    catatan?: true
    status?: true
    nim?: true
    nip?: true
  }

  export type BimbinganMaxAggregateInputType = {
    id?: true
    tanggal?: true
    catatan?: true
    status?: true
    nim?: true
    nip?: true
  }

  export type BimbinganCountAggregateInputType = {
    id?: true
    tanggal?: true
    catatan?: true
    status?: true
    nim?: true
    nip?: true
    _all?: true
  }

  export type BimbinganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bimbingan to aggregate.
     */
    where?: BimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bimbingans to fetch.
     */
    orderBy?: BimbinganOrderByWithRelationInput | BimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bimbingans
    **/
    _count?: true | BimbinganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BimbinganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BimbinganMaxAggregateInputType
  }

  export type GetBimbinganAggregateType<T extends BimbinganAggregateArgs> = {
        [P in keyof T & keyof AggregateBimbingan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBimbingan[P]>
      : GetScalarType<T[P], AggregateBimbingan[P]>
  }




  export type BimbinganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BimbinganWhereInput
    orderBy?: BimbinganOrderByWithAggregationInput | BimbinganOrderByWithAggregationInput[]
    by: BimbinganScalarFieldEnum[] | BimbinganScalarFieldEnum
    having?: BimbinganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BimbinganCountAggregateInputType | true
    _min?: BimbinganMinAggregateInputType
    _max?: BimbinganMaxAggregateInputType
  }

  export type BimbinganGroupByOutputType = {
    id: string
    tanggal: Date
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
    nip: string
    _count: BimbinganCountAggregateOutputType | null
    _min: BimbinganMinAggregateOutputType | null
    _max: BimbinganMaxAggregateOutputType | null
  }

  type GetBimbinganGroupByPayload<T extends BimbinganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BimbinganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BimbinganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BimbinganGroupByOutputType[P]>
            : GetScalarType<T[P], BimbinganGroupByOutputType[P]>
        }
      >
    >


  export type BimbinganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    catatan?: boolean
    status?: boolean
    nim?: boolean
    nip?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bimbingan"]>

  export type BimbinganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    catatan?: boolean
    status?: boolean
    nim?: boolean
    nip?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bimbingan"]>

  export type BimbinganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    catatan?: boolean
    status?: boolean
    nim?: boolean
    nip?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bimbingan"]>

  export type BimbinganSelectScalar = {
    id?: boolean
    tanggal?: boolean
    catatan?: boolean
    status?: boolean
    nim?: boolean
    nip?: boolean
  }

  export type BimbinganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "catatan" | "status" | "nim" | "nip", ExtArgs["result"]["bimbingan"]>
  export type BimbinganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }
  export type BimbinganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }
  export type BimbinganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
  }

  export type $BimbinganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bimbingan"
    objects: {
      Mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      Dosen: Prisma.$DosenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      catatan: string
      status: $Enums.StatusValidasi
      nim: string
      nip: string
    }, ExtArgs["result"]["bimbingan"]>
    composites: {}
  }

  type BimbinganGetPayload<S extends boolean | null | undefined | BimbinganDefaultArgs> = $Result.GetResult<Prisma.$BimbinganPayload, S>

  type BimbinganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BimbinganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BimbinganCountAggregateInputType | true
    }

  export interface BimbinganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bimbingan'], meta: { name: 'Bimbingan' } }
    /**
     * Find zero or one Bimbingan that matches the filter.
     * @param {BimbinganFindUniqueArgs} args - Arguments to find a Bimbingan
     * @example
     * // Get one Bimbingan
     * const bimbingan = await prisma.bimbingan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BimbinganFindUniqueArgs>(args: SelectSubset<T, BimbinganFindUniqueArgs<ExtArgs>>): Prisma__BimbinganClient<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bimbingan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BimbinganFindUniqueOrThrowArgs} args - Arguments to find a Bimbingan
     * @example
     * // Get one Bimbingan
     * const bimbingan = await prisma.bimbingan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BimbinganFindUniqueOrThrowArgs>(args: SelectSubset<T, BimbinganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BimbinganClient<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bimbingan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BimbinganFindFirstArgs} args - Arguments to find a Bimbingan
     * @example
     * // Get one Bimbingan
     * const bimbingan = await prisma.bimbingan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BimbinganFindFirstArgs>(args?: SelectSubset<T, BimbinganFindFirstArgs<ExtArgs>>): Prisma__BimbinganClient<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bimbingan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BimbinganFindFirstOrThrowArgs} args - Arguments to find a Bimbingan
     * @example
     * // Get one Bimbingan
     * const bimbingan = await prisma.bimbingan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BimbinganFindFirstOrThrowArgs>(args?: SelectSubset<T, BimbinganFindFirstOrThrowArgs<ExtArgs>>): Prisma__BimbinganClient<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bimbingans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BimbinganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bimbingans
     * const bimbingans = await prisma.bimbingan.findMany()
     * 
     * // Get first 10 Bimbingans
     * const bimbingans = await prisma.bimbingan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bimbinganWithIdOnly = await prisma.bimbingan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BimbinganFindManyArgs>(args?: SelectSubset<T, BimbinganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bimbingan.
     * @param {BimbinganCreateArgs} args - Arguments to create a Bimbingan.
     * @example
     * // Create one Bimbingan
     * const Bimbingan = await prisma.bimbingan.create({
     *   data: {
     *     // ... data to create a Bimbingan
     *   }
     * })
     * 
     */
    create<T extends BimbinganCreateArgs>(args: SelectSubset<T, BimbinganCreateArgs<ExtArgs>>): Prisma__BimbinganClient<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bimbingans.
     * @param {BimbinganCreateManyArgs} args - Arguments to create many Bimbingans.
     * @example
     * // Create many Bimbingans
     * const bimbingan = await prisma.bimbingan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BimbinganCreateManyArgs>(args?: SelectSubset<T, BimbinganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bimbingans and returns the data saved in the database.
     * @param {BimbinganCreateManyAndReturnArgs} args - Arguments to create many Bimbingans.
     * @example
     * // Create many Bimbingans
     * const bimbingan = await prisma.bimbingan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bimbingans and only return the `id`
     * const bimbinganWithIdOnly = await prisma.bimbingan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BimbinganCreateManyAndReturnArgs>(args?: SelectSubset<T, BimbinganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bimbingan.
     * @param {BimbinganDeleteArgs} args - Arguments to delete one Bimbingan.
     * @example
     * // Delete one Bimbingan
     * const Bimbingan = await prisma.bimbingan.delete({
     *   where: {
     *     // ... filter to delete one Bimbingan
     *   }
     * })
     * 
     */
    delete<T extends BimbinganDeleteArgs>(args: SelectSubset<T, BimbinganDeleteArgs<ExtArgs>>): Prisma__BimbinganClient<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bimbingan.
     * @param {BimbinganUpdateArgs} args - Arguments to update one Bimbingan.
     * @example
     * // Update one Bimbingan
     * const bimbingan = await prisma.bimbingan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BimbinganUpdateArgs>(args: SelectSubset<T, BimbinganUpdateArgs<ExtArgs>>): Prisma__BimbinganClient<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bimbingans.
     * @param {BimbinganDeleteManyArgs} args - Arguments to filter Bimbingans to delete.
     * @example
     * // Delete a few Bimbingans
     * const { count } = await prisma.bimbingan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BimbinganDeleteManyArgs>(args?: SelectSubset<T, BimbinganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bimbingans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BimbinganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bimbingans
     * const bimbingan = await prisma.bimbingan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BimbinganUpdateManyArgs>(args: SelectSubset<T, BimbinganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bimbingans and returns the data updated in the database.
     * @param {BimbinganUpdateManyAndReturnArgs} args - Arguments to update many Bimbingans.
     * @example
     * // Update many Bimbingans
     * const bimbingan = await prisma.bimbingan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bimbingans and only return the `id`
     * const bimbinganWithIdOnly = await prisma.bimbingan.updateManyAndReturn({
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
    updateManyAndReturn<T extends BimbinganUpdateManyAndReturnArgs>(args: SelectSubset<T, BimbinganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bimbingan.
     * @param {BimbinganUpsertArgs} args - Arguments to update or create a Bimbingan.
     * @example
     * // Update or create a Bimbingan
     * const bimbingan = await prisma.bimbingan.upsert({
     *   create: {
     *     // ... data to create a Bimbingan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bimbingan we want to update
     *   }
     * })
     */
    upsert<T extends BimbinganUpsertArgs>(args: SelectSubset<T, BimbinganUpsertArgs<ExtArgs>>): Prisma__BimbinganClient<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bimbingans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BimbinganCountArgs} args - Arguments to filter Bimbingans to count.
     * @example
     * // Count the number of Bimbingans
     * const count = await prisma.bimbingan.count({
     *   where: {
     *     // ... the filter for the Bimbingans we want to count
     *   }
     * })
    **/
    count<T extends BimbinganCountArgs>(
      args?: Subset<T, BimbinganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BimbinganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bimbingan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BimbinganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BimbinganAggregateArgs>(args: Subset<T, BimbinganAggregateArgs>): Prisma.PrismaPromise<GetBimbinganAggregateType<T>>

    /**
     * Group by Bimbingan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BimbinganGroupByArgs} args - Group by arguments.
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
      T extends BimbinganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BimbinganGroupByArgs['orderBy'] }
        : { orderBy?: BimbinganGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BimbinganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBimbinganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bimbingan model
   */
  readonly fields: BimbinganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bimbingan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BimbinganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Dosen<T extends DosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DosenDefaultArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bimbingan model
   */
  interface BimbinganFieldRefs {
    readonly id: FieldRef<"Bimbingan", 'String'>
    readonly tanggal: FieldRef<"Bimbingan", 'DateTime'>
    readonly catatan: FieldRef<"Bimbingan", 'String'>
    readonly status: FieldRef<"Bimbingan", 'StatusValidasi'>
    readonly nim: FieldRef<"Bimbingan", 'String'>
    readonly nip: FieldRef<"Bimbingan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bimbingan findUnique
   */
  export type BimbinganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * Filter, which Bimbingan to fetch.
     */
    where: BimbinganWhereUniqueInput
  }

  /**
   * Bimbingan findUniqueOrThrow
   */
  export type BimbinganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * Filter, which Bimbingan to fetch.
     */
    where: BimbinganWhereUniqueInput
  }

  /**
   * Bimbingan findFirst
   */
  export type BimbinganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * Filter, which Bimbingan to fetch.
     */
    where?: BimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bimbingans to fetch.
     */
    orderBy?: BimbinganOrderByWithRelationInput | BimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bimbingans.
     */
    cursor?: BimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bimbingans.
     */
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * Bimbingan findFirstOrThrow
   */
  export type BimbinganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * Filter, which Bimbingan to fetch.
     */
    where?: BimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bimbingans to fetch.
     */
    orderBy?: BimbinganOrderByWithRelationInput | BimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bimbingans.
     */
    cursor?: BimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bimbingans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bimbingans.
     */
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * Bimbingan findMany
   */
  export type BimbinganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * Filter, which Bimbingans to fetch.
     */
    where?: BimbinganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bimbingans to fetch.
     */
    orderBy?: BimbinganOrderByWithRelationInput | BimbinganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bimbingans.
     */
    cursor?: BimbinganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bimbingans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bimbingans.
     */
    skip?: number
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * Bimbingan create
   */
  export type BimbinganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * The data needed to create a Bimbingan.
     */
    data: XOR<BimbinganCreateInput, BimbinganUncheckedCreateInput>
  }

  /**
   * Bimbingan createMany
   */
  export type BimbinganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bimbingans.
     */
    data: BimbinganCreateManyInput | BimbinganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bimbingan createManyAndReturn
   */
  export type BimbinganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * The data used to create many Bimbingans.
     */
    data: BimbinganCreateManyInput | BimbinganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bimbingan update
   */
  export type BimbinganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * The data needed to update a Bimbingan.
     */
    data: XOR<BimbinganUpdateInput, BimbinganUncheckedUpdateInput>
    /**
     * Choose, which Bimbingan to update.
     */
    where: BimbinganWhereUniqueInput
  }

  /**
   * Bimbingan updateMany
   */
  export type BimbinganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bimbingans.
     */
    data: XOR<BimbinganUpdateManyMutationInput, BimbinganUncheckedUpdateManyInput>
    /**
     * Filter which Bimbingans to update
     */
    where?: BimbinganWhereInput
    /**
     * Limit how many Bimbingans to update.
     */
    limit?: number
  }

  /**
   * Bimbingan updateManyAndReturn
   */
  export type BimbinganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * The data used to update Bimbingans.
     */
    data: XOR<BimbinganUpdateManyMutationInput, BimbinganUncheckedUpdateManyInput>
    /**
     * Filter which Bimbingans to update
     */
    where?: BimbinganWhereInput
    /**
     * Limit how many Bimbingans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bimbingan upsert
   */
  export type BimbinganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * The filter to search for the Bimbingan to update in case it exists.
     */
    where: BimbinganWhereUniqueInput
    /**
     * In case the Bimbingan found by the `where` argument doesn't exist, create a new Bimbingan with this data.
     */
    create: XOR<BimbinganCreateInput, BimbinganUncheckedCreateInput>
    /**
     * In case the Bimbingan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BimbinganUpdateInput, BimbinganUncheckedUpdateInput>
  }

  /**
   * Bimbingan delete
   */
  export type BimbinganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    /**
     * Filter which Bimbingan to delete.
     */
    where: BimbinganWhereUniqueInput
  }

  /**
   * Bimbingan deleteMany
   */
  export type BimbinganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bimbingans to delete
     */
    where?: BimbinganWhereInput
    /**
     * Limit how many Bimbingans to delete.
     */
    limit?: number
  }

  /**
   * Bimbingan without action
   */
  export type BimbinganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
  }


  /**
   * Model DailyReport
   */

  export type AggregateDailyReport = {
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  export type DailyReportAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DailyReportSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DailyReportMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    status: $Enums.StatusValidasi | null
    catatan: string | null
    latitude: number | null
    longitude: number | null
    nim: string | null
  }

  export type DailyReportMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    status: $Enums.StatusValidasi | null
    catatan: string | null
    latitude: number | null
    longitude: number | null
    nim: string | null
  }

  export type DailyReportCountAggregateOutputType = {
    id: number
    tanggal: number
    status: number
    catatan: number
    latitude: number
    longitude: number
    nim: number
    _all: number
  }


  export type DailyReportAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DailyReportSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DailyReportMinAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    catatan?: true
    latitude?: true
    longitude?: true
    nim?: true
  }

  export type DailyReportMaxAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    catatan?: true
    latitude?: true
    longitude?: true
    nim?: true
  }

  export type DailyReportCountAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    catatan?: true
    latitude?: true
    longitude?: true
    nim?: true
    _all?: true
  }

  export type DailyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReport to aggregate.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReports
    **/
    _count?: true | DailyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReportMaxAggregateInputType
  }

  export type GetDailyReportAggregateType<T extends DailyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReport[P]>
      : GetScalarType<T[P], AggregateDailyReport[P]>
  }




  export type DailyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithAggregationInput | DailyReportOrderByWithAggregationInput[]
    by: DailyReportScalarFieldEnum[] | DailyReportScalarFieldEnum
    having?: DailyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReportCountAggregateInputType | true
    _avg?: DailyReportAvgAggregateInputType
    _sum?: DailyReportSumAggregateInputType
    _min?: DailyReportMinAggregateInputType
    _max?: DailyReportMaxAggregateInputType
  }

  export type DailyReportGroupByOutputType = {
    id: string
    tanggal: Date
    status: $Enums.StatusValidasi
    catatan: string | null
    latitude: number
    longitude: number
    nim: string
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  type GetDailyReportGroupByPayload<T extends DailyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
        }
      >
    >


  export type DailyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    nim?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    DetailDailyReport?: boolean | DailyReport$DetailDailyReportArgs<ExtArgs>
    _count?: boolean | DailyReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    nim?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    nim?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectScalar = {
    id?: boolean
    tanggal?: boolean
    status?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    nim?: boolean
  }

  export type DailyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "status" | "catatan" | "latitude" | "longitude" | "nim", ExtArgs["result"]["dailyReport"]>
  export type DailyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    DetailDailyReport?: boolean | DailyReport$DetailDailyReportArgs<ExtArgs>
    _count?: boolean | DailyReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }
  export type DailyReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }

  export type $DailyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReport"
    objects: {
      Mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      DetailDailyReport: Prisma.$DetailDailyReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      status: $Enums.StatusValidasi
      catatan: string | null
      latitude: number
      longitude: number
      nim: string
    }, ExtArgs["result"]["dailyReport"]>
    composites: {}
  }

  type DailyReportGetPayload<S extends boolean | null | undefined | DailyReportDefaultArgs> = $Result.GetResult<Prisma.$DailyReportPayload, S>

  type DailyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyReportCountAggregateInputType | true
    }

  export interface DailyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReport'], meta: { name: 'DailyReport' } }
    /**
     * Find zero or one DailyReport that matches the filter.
     * @param {DailyReportFindUniqueArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReportFindUniqueArgs>(args: SelectSubset<T, DailyReportFindUniqueArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyReportFindUniqueOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReportFindFirstArgs>(args?: SelectSubset<T, DailyReportFindFirstArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReports
     * const dailyReports = await prisma.dailyReport.findMany()
     * 
     * // Get first 10 DailyReports
     * const dailyReports = await prisma.dailyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyReportFindManyArgs>(args?: SelectSubset<T, DailyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyReport.
     * @param {DailyReportCreateArgs} args - Arguments to create a DailyReport.
     * @example
     * // Create one DailyReport
     * const DailyReport = await prisma.dailyReport.create({
     *   data: {
     *     // ... data to create a DailyReport
     *   }
     * })
     * 
     */
    create<T extends DailyReportCreateArgs>(args: SelectSubset<T, DailyReportCreateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyReports.
     * @param {DailyReportCreateManyArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReportCreateManyArgs>(args?: SelectSubset<T, DailyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyReports and returns the data saved in the database.
     * @param {DailyReportCreateManyAndReturnArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyReports and only return the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyReport.
     * @param {DailyReportDeleteArgs} args - Arguments to delete one DailyReport.
     * @example
     * // Delete one DailyReport
     * const DailyReport = await prisma.dailyReport.delete({
     *   where: {
     *     // ... filter to delete one DailyReport
     *   }
     * })
     * 
     */
    delete<T extends DailyReportDeleteArgs>(args: SelectSubset<T, DailyReportDeleteArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyReport.
     * @param {DailyReportUpdateArgs} args - Arguments to update one DailyReport.
     * @example
     * // Update one DailyReport
     * const dailyReport = await prisma.dailyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReportUpdateArgs>(args: SelectSubset<T, DailyReportUpdateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyReports.
     * @param {DailyReportDeleteManyArgs} args - Arguments to filter DailyReports to delete.
     * @example
     * // Delete a few DailyReports
     * const { count } = await prisma.dailyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReportDeleteManyArgs>(args?: SelectSubset<T, DailyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReportUpdateManyArgs>(args: SelectSubset<T, DailyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports and returns the data updated in the database.
     * @param {DailyReportUpdateManyAndReturnArgs} args - Arguments to update many DailyReports.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyReports and only return the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyReport.
     * @param {DailyReportUpsertArgs} args - Arguments to update or create a DailyReport.
     * @example
     * // Update or create a DailyReport
     * const dailyReport = await prisma.dailyReport.upsert({
     *   create: {
     *     // ... data to create a DailyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReport we want to update
     *   }
     * })
     */
    upsert<T extends DailyReportUpsertArgs>(args: SelectSubset<T, DailyReportUpsertArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportCountArgs} args - Arguments to filter DailyReports to count.
     * @example
     * // Count the number of DailyReports
     * const count = await prisma.dailyReport.count({
     *   where: {
     *     // ... the filter for the DailyReports we want to count
     *   }
     * })
    **/
    count<T extends DailyReportCountArgs>(
      args?: Subset<T, DailyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyReportAggregateArgs>(args: Subset<T, DailyReportAggregateArgs>): Prisma.PrismaPromise<GetDailyReportAggregateType<T>>

    /**
     * Group by DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportGroupByArgs} args - Group by arguments.
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
      T extends DailyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReportGroupByArgs['orderBy'] }
        : { orderBy?: DailyReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReport model
   */
  readonly fields: DailyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DetailDailyReport<T extends DailyReport$DetailDailyReportArgs<ExtArgs> = {}>(args?: Subset<T, DailyReport$DetailDailyReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DailyReport model
   */
  interface DailyReportFieldRefs {
    readonly id: FieldRef<"DailyReport", 'String'>
    readonly tanggal: FieldRef<"DailyReport", 'DateTime'>
    readonly status: FieldRef<"DailyReport", 'StatusValidasi'>
    readonly catatan: FieldRef<"DailyReport", 'String'>
    readonly latitude: FieldRef<"DailyReport", 'Float'>
    readonly longitude: FieldRef<"DailyReport", 'Float'>
    readonly nim: FieldRef<"DailyReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyReport findUnique
   */
  export type DailyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findUniqueOrThrow
   */
  export type DailyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findFirst
   */
  export type DailyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findFirstOrThrow
   */
  export type DailyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findMany
   */
  export type DailyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReports to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport create
   */
  export type DailyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyReport.
     */
    data: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
  }

  /**
   * DailyReport createMany
   */
  export type DailyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyReport createManyAndReturn
   */
  export type DailyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyReport update
   */
  export type DailyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyReport.
     */
    data: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
    /**
     * Choose, which DailyReport to update.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport updateMany
   */
  export type DailyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to update.
     */
    limit?: number
  }

  /**
   * DailyReport updateManyAndReturn
   */
  export type DailyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyReport upsert
   */
  export type DailyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyReport to update in case it exists.
     */
    where: DailyReportWhereUniqueInput
    /**
     * In case the DailyReport found by the `where` argument doesn't exist, create a new DailyReport with this data.
     */
    create: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
    /**
     * In case the DailyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
  }

  /**
   * DailyReport delete
   */
  export type DailyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter which DailyReport to delete.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport deleteMany
   */
  export type DailyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReports to delete
     */
    where?: DailyReportWhereInput
    /**
     * Limit how many DailyReports to delete.
     */
    limit?: number
  }

  /**
   * DailyReport.DetailDailyReport
   */
  export type DailyReport$DetailDailyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    where?: DetailDailyReportWhereInput
    orderBy?: DetailDailyReportOrderByWithRelationInput | DetailDailyReportOrderByWithRelationInput[]
    cursor?: DetailDailyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailDailyReportScalarFieldEnum | DetailDailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport without action
   */
  export type DailyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
  }


  /**
   * Model DetailDailyReport
   */

  export type AggregateDetailDailyReport = {
    _count: DetailDailyReportCountAggregateOutputType | null
    _avg: DetailDailyReportAvgAggregateOutputType | null
    _sum: DetailDailyReportSumAggregateOutputType | null
    _min: DetailDailyReportMinAggregateOutputType | null
    _max: DetailDailyReportMaxAggregateOutputType | null
  }

  export type DetailDailyReportAvgAggregateOutputType = {
    id: number | null
  }

  export type DetailDailyReportSumAggregateOutputType = {
    id: number | null
  }

  export type DetailDailyReportMinAggregateOutputType = {
    id: number | null
    judul_kegiatan: string | null
    deskripsi_kegiatan: string | null
    waktu: Date | null
    id_daily_report: string | null
  }

  export type DetailDailyReportMaxAggregateOutputType = {
    id: number | null
    judul_kegiatan: string | null
    deskripsi_kegiatan: string | null
    waktu: Date | null
    id_daily_report: string | null
  }

  export type DetailDailyReportCountAggregateOutputType = {
    id: number
    judul_kegiatan: number
    deskripsi_kegiatan: number
    waktu: number
    id_daily_report: number
    _all: number
  }


  export type DetailDailyReportAvgAggregateInputType = {
    id?: true
  }

  export type DetailDailyReportSumAggregateInputType = {
    id?: true
  }

  export type DetailDailyReportMinAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    deskripsi_kegiatan?: true
    waktu?: true
    id_daily_report?: true
  }

  export type DetailDailyReportMaxAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    deskripsi_kegiatan?: true
    waktu?: true
    id_daily_report?: true
  }

  export type DetailDailyReportCountAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    deskripsi_kegiatan?: true
    waktu?: true
    id_daily_report?: true
    _all?: true
  }

  export type DetailDailyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailDailyReport to aggregate.
     */
    where?: DetailDailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailDailyReports to fetch.
     */
    orderBy?: DetailDailyReportOrderByWithRelationInput | DetailDailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailDailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailDailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailDailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailDailyReports
    **/
    _count?: true | DetailDailyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailDailyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailDailyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailDailyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailDailyReportMaxAggregateInputType
  }

  export type GetDetailDailyReportAggregateType<T extends DetailDailyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailDailyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailDailyReport[P]>
      : GetScalarType<T[P], AggregateDetailDailyReport[P]>
  }




  export type DetailDailyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailDailyReportWhereInput
    orderBy?: DetailDailyReportOrderByWithAggregationInput | DetailDailyReportOrderByWithAggregationInput[]
    by: DetailDailyReportScalarFieldEnum[] | DetailDailyReportScalarFieldEnum
    having?: DetailDailyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailDailyReportCountAggregateInputType | true
    _avg?: DetailDailyReportAvgAggregateInputType
    _sum?: DetailDailyReportSumAggregateInputType
    _min?: DetailDailyReportMinAggregateInputType
    _max?: DetailDailyReportMaxAggregateInputType
  }

  export type DetailDailyReportGroupByOutputType = {
    id: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date
    id_daily_report: string
    _count: DetailDailyReportCountAggregateOutputType | null
    _avg: DetailDailyReportAvgAggregateOutputType | null
    _sum: DetailDailyReportSumAggregateOutputType | null
    _min: DetailDailyReportMinAggregateOutputType | null
    _max: DetailDailyReportMaxAggregateOutputType | null
  }

  type GetDetailDailyReportGroupByPayload<T extends DetailDailyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailDailyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailDailyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailDailyReportGroupByOutputType[P]>
            : GetScalarType<T[P], DetailDailyReportGroupByOutputType[P]>
        }
      >
    >


  export type DetailDailyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    deskripsi_kegiatan?: boolean
    waktu?: boolean
    id_daily_report?: boolean
    DailyReport?: boolean | DailyReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailDailyReport"]>

  export type DetailDailyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    deskripsi_kegiatan?: boolean
    waktu?: boolean
    id_daily_report?: boolean
    DailyReport?: boolean | DailyReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailDailyReport"]>

  export type DetailDailyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    deskripsi_kegiatan?: boolean
    waktu?: boolean
    id_daily_report?: boolean
    DailyReport?: boolean | DailyReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailDailyReport"]>

  export type DetailDailyReportSelectScalar = {
    id?: boolean
    judul_kegiatan?: boolean
    deskripsi_kegiatan?: boolean
    waktu?: boolean
    id_daily_report?: boolean
  }

  export type DetailDailyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul_kegiatan" | "deskripsi_kegiatan" | "waktu" | "id_daily_report", ExtArgs["result"]["detailDailyReport"]>
  export type DetailDailyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DailyReport?: boolean | DailyReportDefaultArgs<ExtArgs>
  }
  export type DetailDailyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DailyReport?: boolean | DailyReportDefaultArgs<ExtArgs>
  }
  export type DetailDailyReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DailyReport?: boolean | DailyReportDefaultArgs<ExtArgs>
  }

  export type $DetailDailyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailDailyReport"
    objects: {
      DailyReport: Prisma.$DailyReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul_kegiatan: string
      deskripsi_kegiatan: string
      waktu: Date
      id_daily_report: string
    }, ExtArgs["result"]["detailDailyReport"]>
    composites: {}
  }

  type DetailDailyReportGetPayload<S extends boolean | null | undefined | DetailDailyReportDefaultArgs> = $Result.GetResult<Prisma.$DetailDailyReportPayload, S>

  type DetailDailyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailDailyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailDailyReportCountAggregateInputType | true
    }

  export interface DetailDailyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailDailyReport'], meta: { name: 'DetailDailyReport' } }
    /**
     * Find zero or one DetailDailyReport that matches the filter.
     * @param {DetailDailyReportFindUniqueArgs} args - Arguments to find a DetailDailyReport
     * @example
     * // Get one DetailDailyReport
     * const detailDailyReport = await prisma.detailDailyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailDailyReportFindUniqueArgs>(args: SelectSubset<T, DetailDailyReportFindUniqueArgs<ExtArgs>>): Prisma__DetailDailyReportClient<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailDailyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailDailyReportFindUniqueOrThrowArgs} args - Arguments to find a DetailDailyReport
     * @example
     * // Get one DetailDailyReport
     * const detailDailyReport = await prisma.detailDailyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailDailyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailDailyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailDailyReportClient<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailDailyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailDailyReportFindFirstArgs} args - Arguments to find a DetailDailyReport
     * @example
     * // Get one DetailDailyReport
     * const detailDailyReport = await prisma.detailDailyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailDailyReportFindFirstArgs>(args?: SelectSubset<T, DetailDailyReportFindFirstArgs<ExtArgs>>): Prisma__DetailDailyReportClient<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailDailyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailDailyReportFindFirstOrThrowArgs} args - Arguments to find a DetailDailyReport
     * @example
     * // Get one DetailDailyReport
     * const detailDailyReport = await prisma.detailDailyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailDailyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailDailyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailDailyReportClient<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailDailyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailDailyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailDailyReports
     * const detailDailyReports = await prisma.detailDailyReport.findMany()
     * 
     * // Get first 10 DetailDailyReports
     * const detailDailyReports = await prisma.detailDailyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailDailyReportWithIdOnly = await prisma.detailDailyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailDailyReportFindManyArgs>(args?: SelectSubset<T, DetailDailyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailDailyReport.
     * @param {DetailDailyReportCreateArgs} args - Arguments to create a DetailDailyReport.
     * @example
     * // Create one DetailDailyReport
     * const DetailDailyReport = await prisma.detailDailyReport.create({
     *   data: {
     *     // ... data to create a DetailDailyReport
     *   }
     * })
     * 
     */
    create<T extends DetailDailyReportCreateArgs>(args: SelectSubset<T, DetailDailyReportCreateArgs<ExtArgs>>): Prisma__DetailDailyReportClient<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailDailyReports.
     * @param {DetailDailyReportCreateManyArgs} args - Arguments to create many DetailDailyReports.
     * @example
     * // Create many DetailDailyReports
     * const detailDailyReport = await prisma.detailDailyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailDailyReportCreateManyArgs>(args?: SelectSubset<T, DetailDailyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailDailyReports and returns the data saved in the database.
     * @param {DetailDailyReportCreateManyAndReturnArgs} args - Arguments to create many DetailDailyReports.
     * @example
     * // Create many DetailDailyReports
     * const detailDailyReport = await prisma.detailDailyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailDailyReports and only return the `id`
     * const detailDailyReportWithIdOnly = await prisma.detailDailyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailDailyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailDailyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailDailyReport.
     * @param {DetailDailyReportDeleteArgs} args - Arguments to delete one DetailDailyReport.
     * @example
     * // Delete one DetailDailyReport
     * const DetailDailyReport = await prisma.detailDailyReport.delete({
     *   where: {
     *     // ... filter to delete one DetailDailyReport
     *   }
     * })
     * 
     */
    delete<T extends DetailDailyReportDeleteArgs>(args: SelectSubset<T, DetailDailyReportDeleteArgs<ExtArgs>>): Prisma__DetailDailyReportClient<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailDailyReport.
     * @param {DetailDailyReportUpdateArgs} args - Arguments to update one DetailDailyReport.
     * @example
     * // Update one DetailDailyReport
     * const detailDailyReport = await prisma.detailDailyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailDailyReportUpdateArgs>(args: SelectSubset<T, DetailDailyReportUpdateArgs<ExtArgs>>): Prisma__DetailDailyReportClient<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailDailyReports.
     * @param {DetailDailyReportDeleteManyArgs} args - Arguments to filter DetailDailyReports to delete.
     * @example
     * // Delete a few DetailDailyReports
     * const { count } = await prisma.detailDailyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailDailyReportDeleteManyArgs>(args?: SelectSubset<T, DetailDailyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailDailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailDailyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailDailyReports
     * const detailDailyReport = await prisma.detailDailyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailDailyReportUpdateManyArgs>(args: SelectSubset<T, DetailDailyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailDailyReports and returns the data updated in the database.
     * @param {DetailDailyReportUpdateManyAndReturnArgs} args - Arguments to update many DetailDailyReports.
     * @example
     * // Update many DetailDailyReports
     * const detailDailyReport = await prisma.detailDailyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailDailyReports and only return the `id`
     * const detailDailyReportWithIdOnly = await prisma.detailDailyReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends DetailDailyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailDailyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailDailyReport.
     * @param {DetailDailyReportUpsertArgs} args - Arguments to update or create a DetailDailyReport.
     * @example
     * // Update or create a DetailDailyReport
     * const detailDailyReport = await prisma.detailDailyReport.upsert({
     *   create: {
     *     // ... data to create a DetailDailyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailDailyReport we want to update
     *   }
     * })
     */
    upsert<T extends DetailDailyReportUpsertArgs>(args: SelectSubset<T, DetailDailyReportUpsertArgs<ExtArgs>>): Prisma__DetailDailyReportClient<$Result.GetResult<Prisma.$DetailDailyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailDailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailDailyReportCountArgs} args - Arguments to filter DetailDailyReports to count.
     * @example
     * // Count the number of DetailDailyReports
     * const count = await prisma.detailDailyReport.count({
     *   where: {
     *     // ... the filter for the DetailDailyReports we want to count
     *   }
     * })
    **/
    count<T extends DetailDailyReportCountArgs>(
      args?: Subset<T, DetailDailyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailDailyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailDailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailDailyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailDailyReportAggregateArgs>(args: Subset<T, DetailDailyReportAggregateArgs>): Prisma.PrismaPromise<GetDetailDailyReportAggregateType<T>>

    /**
     * Group by DetailDailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailDailyReportGroupByArgs} args - Group by arguments.
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
      T extends DetailDailyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailDailyReportGroupByArgs['orderBy'] }
        : { orderBy?: DetailDailyReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailDailyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailDailyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailDailyReport model
   */
  readonly fields: DetailDailyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailDailyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailDailyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DailyReport<T extends DailyReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyReportDefaultArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetailDailyReport model
   */
  interface DetailDailyReportFieldRefs {
    readonly id: FieldRef<"DetailDailyReport", 'Int'>
    readonly judul_kegiatan: FieldRef<"DetailDailyReport", 'String'>
    readonly deskripsi_kegiatan: FieldRef<"DetailDailyReport", 'String'>
    readonly waktu: FieldRef<"DetailDailyReport", 'DateTime'>
    readonly id_daily_report: FieldRef<"DetailDailyReport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetailDailyReport findUnique
   */
  export type DetailDailyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DetailDailyReport to fetch.
     */
    where: DetailDailyReportWhereUniqueInput
  }

  /**
   * DetailDailyReport findUniqueOrThrow
   */
  export type DetailDailyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DetailDailyReport to fetch.
     */
    where: DetailDailyReportWhereUniqueInput
  }

  /**
   * DetailDailyReport findFirst
   */
  export type DetailDailyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DetailDailyReport to fetch.
     */
    where?: DetailDailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailDailyReports to fetch.
     */
    orderBy?: DetailDailyReportOrderByWithRelationInput | DetailDailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailDailyReports.
     */
    cursor?: DetailDailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailDailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailDailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailDailyReports.
     */
    distinct?: DetailDailyReportScalarFieldEnum | DetailDailyReportScalarFieldEnum[]
  }

  /**
   * DetailDailyReport findFirstOrThrow
   */
  export type DetailDailyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DetailDailyReport to fetch.
     */
    where?: DetailDailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailDailyReports to fetch.
     */
    orderBy?: DetailDailyReportOrderByWithRelationInput | DetailDailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailDailyReports.
     */
    cursor?: DetailDailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailDailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailDailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailDailyReports.
     */
    distinct?: DetailDailyReportScalarFieldEnum | DetailDailyReportScalarFieldEnum[]
  }

  /**
   * DetailDailyReport findMany
   */
  export type DetailDailyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DetailDailyReports to fetch.
     */
    where?: DetailDailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailDailyReports to fetch.
     */
    orderBy?: DetailDailyReportOrderByWithRelationInput | DetailDailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailDailyReports.
     */
    cursor?: DetailDailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailDailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailDailyReports.
     */
    skip?: number
    distinct?: DetailDailyReportScalarFieldEnum | DetailDailyReportScalarFieldEnum[]
  }

  /**
   * DetailDailyReport create
   */
  export type DetailDailyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailDailyReport.
     */
    data: XOR<DetailDailyReportCreateInput, DetailDailyReportUncheckedCreateInput>
  }

  /**
   * DetailDailyReport createMany
   */
  export type DetailDailyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailDailyReports.
     */
    data: DetailDailyReportCreateManyInput | DetailDailyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailDailyReport createManyAndReturn
   */
  export type DetailDailyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * The data used to create many DetailDailyReports.
     */
    data: DetailDailyReportCreateManyInput | DetailDailyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailDailyReport update
   */
  export type DetailDailyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailDailyReport.
     */
    data: XOR<DetailDailyReportUpdateInput, DetailDailyReportUncheckedUpdateInput>
    /**
     * Choose, which DetailDailyReport to update.
     */
    where: DetailDailyReportWhereUniqueInput
  }

  /**
   * DetailDailyReport updateMany
   */
  export type DetailDailyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailDailyReports.
     */
    data: XOR<DetailDailyReportUpdateManyMutationInput, DetailDailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DetailDailyReports to update
     */
    where?: DetailDailyReportWhereInput
    /**
     * Limit how many DetailDailyReports to update.
     */
    limit?: number
  }

  /**
   * DetailDailyReport updateManyAndReturn
   */
  export type DetailDailyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * The data used to update DetailDailyReports.
     */
    data: XOR<DetailDailyReportUpdateManyMutationInput, DetailDailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DetailDailyReports to update
     */
    where?: DetailDailyReportWhereInput
    /**
     * Limit how many DetailDailyReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailDailyReport upsert
   */
  export type DetailDailyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailDailyReport to update in case it exists.
     */
    where: DetailDailyReportWhereUniqueInput
    /**
     * In case the DetailDailyReport found by the `where` argument doesn't exist, create a new DetailDailyReport with this data.
     */
    create: XOR<DetailDailyReportCreateInput, DetailDailyReportUncheckedCreateInput>
    /**
     * In case the DetailDailyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailDailyReportUpdateInput, DetailDailyReportUncheckedUpdateInput>
  }

  /**
   * DetailDailyReport delete
   */
  export type DetailDailyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
    /**
     * Filter which DetailDailyReport to delete.
     */
    where: DetailDailyReportWhereUniqueInput
  }

  /**
   * DetailDailyReport deleteMany
   */
  export type DetailDailyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailDailyReports to delete
     */
    where?: DetailDailyReportWhereInput
    /**
     * Limit how many DetailDailyReports to delete.
     */
    limit?: number
  }

  /**
   * DetailDailyReport without action
   */
  export type DetailDailyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailDailyReport
     */
    select?: DetailDailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailDailyReport
     */
    omit?: DetailDailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailDailyReportInclude<ExtArgs> | null
  }


  /**
   * Model Dokumen
   */

  export type AggregateDokumen = {
    _count: DokumenCountAggregateOutputType | null
    _min: DokumenMinAggregateOutputType | null
    _max: DokumenMaxAggregateOutputType | null
  }

  export type DokumenMinAggregateOutputType = {
    id: string | null
    nim: string | null
    jenis_dokumen: $Enums.JenisDokumen | null
    file_path: string | null
    tanggal_upload: Date | null
    status: $Enums.DokumenStatus | null
    komentar: string | null
  }

  export type DokumenMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    jenis_dokumen: $Enums.JenisDokumen | null
    file_path: string | null
    tanggal_upload: Date | null
    status: $Enums.DokumenStatus | null
    komentar: string | null
  }

  export type DokumenCountAggregateOutputType = {
    id: number
    nim: number
    jenis_dokumen: number
    file_path: number
    tanggal_upload: number
    status: number
    komentar: number
    _all: number
  }


  export type DokumenMinAggregateInputType = {
    id?: true
    nim?: true
    jenis_dokumen?: true
    file_path?: true
    tanggal_upload?: true
    status?: true
    komentar?: true
  }

  export type DokumenMaxAggregateInputType = {
    id?: true
    nim?: true
    jenis_dokumen?: true
    file_path?: true
    tanggal_upload?: true
    status?: true
    komentar?: true
  }

  export type DokumenCountAggregateInputType = {
    id?: true
    nim?: true
    jenis_dokumen?: true
    file_path?: true
    tanggal_upload?: true
    status?: true
    komentar?: true
    _all?: true
  }

  export type DokumenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dokumen to aggregate.
     */
    where?: DokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dokumen
    **/
    _count?: true | DokumenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DokumenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DokumenMaxAggregateInputType
  }

  export type GetDokumenAggregateType<T extends DokumenAggregateArgs> = {
        [P in keyof T & keyof AggregateDokumen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDokumen[P]>
      : GetScalarType<T[P], AggregateDokumen[P]>
  }




  export type DokumenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumenWhereInput
    orderBy?: DokumenOrderByWithAggregationInput | DokumenOrderByWithAggregationInput[]
    by: DokumenScalarFieldEnum[] | DokumenScalarFieldEnum
    having?: DokumenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DokumenCountAggregateInputType | true
    _min?: DokumenMinAggregateInputType
    _max?: DokumenMaxAggregateInputType
  }

  export type DokumenGroupByOutputType = {
    id: string
    nim: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload: Date
    status: $Enums.DokumenStatus
    komentar: string | null
    _count: DokumenCountAggregateOutputType | null
    _min: DokumenMinAggregateOutputType | null
    _max: DokumenMaxAggregateOutputType | null
  }

  type GetDokumenGroupByPayload<T extends DokumenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DokumenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DokumenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DokumenGroupByOutputType[P]>
            : GetScalarType<T[P], DokumenGroupByOutputType[P]>
        }
      >
    >


  export type DokumenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jenis_dokumen?: boolean
    file_path?: boolean
    tanggal_upload?: boolean
    status?: boolean
    komentar?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumen"]>

  export type DokumenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jenis_dokumen?: boolean
    file_path?: boolean
    tanggal_upload?: boolean
    status?: boolean
    komentar?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumen"]>

  export type DokumenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jenis_dokumen?: boolean
    file_path?: boolean
    tanggal_upload?: boolean
    status?: boolean
    komentar?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokumen"]>

  export type DokumenSelectScalar = {
    id?: boolean
    nim?: boolean
    jenis_dokumen?: boolean
    file_path?: boolean
    tanggal_upload?: boolean
    status?: boolean
    komentar?: boolean
  }

  export type DokumenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "jenis_dokumen" | "file_path" | "tanggal_upload" | "status" | "komentar", ExtArgs["result"]["dokumen"]>
  export type DokumenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }
  export type DokumenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }
  export type DokumenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }

  export type $DokumenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dokumen"
    objects: {
      Mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      jenis_dokumen: $Enums.JenisDokumen
      file_path: string
      tanggal_upload: Date
      status: $Enums.DokumenStatus
      komentar: string | null
    }, ExtArgs["result"]["dokumen"]>
    composites: {}
  }

  type DokumenGetPayload<S extends boolean | null | undefined | DokumenDefaultArgs> = $Result.GetResult<Prisma.$DokumenPayload, S>

  type DokumenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DokumenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DokumenCountAggregateInputType | true
    }

  export interface DokumenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dokumen'], meta: { name: 'Dokumen' } }
    /**
     * Find zero or one Dokumen that matches the filter.
     * @param {DokumenFindUniqueArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DokumenFindUniqueArgs>(args: SelectSubset<T, DokumenFindUniqueArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dokumen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DokumenFindUniqueOrThrowArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DokumenFindUniqueOrThrowArgs>(args: SelectSubset<T, DokumenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenFindFirstArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DokumenFindFirstArgs>(args?: SelectSubset<T, DokumenFindFirstArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokumen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenFindFirstOrThrowArgs} args - Arguments to find a Dokumen
     * @example
     * // Get one Dokumen
     * const dokumen = await prisma.dokumen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DokumenFindFirstOrThrowArgs>(args?: SelectSubset<T, DokumenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dokumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dokumen
     * const dokumen = await prisma.dokumen.findMany()
     * 
     * // Get first 10 Dokumen
     * const dokumen = await prisma.dokumen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dokumenWithIdOnly = await prisma.dokumen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DokumenFindManyArgs>(args?: SelectSubset<T, DokumenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dokumen.
     * @param {DokumenCreateArgs} args - Arguments to create a Dokumen.
     * @example
     * // Create one Dokumen
     * const Dokumen = await prisma.dokumen.create({
     *   data: {
     *     // ... data to create a Dokumen
     *   }
     * })
     * 
     */
    create<T extends DokumenCreateArgs>(args: SelectSubset<T, DokumenCreateArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dokumen.
     * @param {DokumenCreateManyArgs} args - Arguments to create many Dokumen.
     * @example
     * // Create many Dokumen
     * const dokumen = await prisma.dokumen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DokumenCreateManyArgs>(args?: SelectSubset<T, DokumenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dokumen and returns the data saved in the database.
     * @param {DokumenCreateManyAndReturnArgs} args - Arguments to create many Dokumen.
     * @example
     * // Create many Dokumen
     * const dokumen = await prisma.dokumen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dokumen and only return the `id`
     * const dokumenWithIdOnly = await prisma.dokumen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DokumenCreateManyAndReturnArgs>(args?: SelectSubset<T, DokumenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dokumen.
     * @param {DokumenDeleteArgs} args - Arguments to delete one Dokumen.
     * @example
     * // Delete one Dokumen
     * const Dokumen = await prisma.dokumen.delete({
     *   where: {
     *     // ... filter to delete one Dokumen
     *   }
     * })
     * 
     */
    delete<T extends DokumenDeleteArgs>(args: SelectSubset<T, DokumenDeleteArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dokumen.
     * @param {DokumenUpdateArgs} args - Arguments to update one Dokumen.
     * @example
     * // Update one Dokumen
     * const dokumen = await prisma.dokumen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DokumenUpdateArgs>(args: SelectSubset<T, DokumenUpdateArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dokumen.
     * @param {DokumenDeleteManyArgs} args - Arguments to filter Dokumen to delete.
     * @example
     * // Delete a few Dokumen
     * const { count } = await prisma.dokumen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DokumenDeleteManyArgs>(args?: SelectSubset<T, DokumenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dokumen
     * const dokumen = await prisma.dokumen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DokumenUpdateManyArgs>(args: SelectSubset<T, DokumenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokumen and returns the data updated in the database.
     * @param {DokumenUpdateManyAndReturnArgs} args - Arguments to update many Dokumen.
     * @example
     * // Update many Dokumen
     * const dokumen = await prisma.dokumen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dokumen and only return the `id`
     * const dokumenWithIdOnly = await prisma.dokumen.updateManyAndReturn({
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
    updateManyAndReturn<T extends DokumenUpdateManyAndReturnArgs>(args: SelectSubset<T, DokumenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dokumen.
     * @param {DokumenUpsertArgs} args - Arguments to update or create a Dokumen.
     * @example
     * // Update or create a Dokumen
     * const dokumen = await prisma.dokumen.upsert({
     *   create: {
     *     // ... data to create a Dokumen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dokumen we want to update
     *   }
     * })
     */
    upsert<T extends DokumenUpsertArgs>(args: SelectSubset<T, DokumenUpsertArgs<ExtArgs>>): Prisma__DokumenClient<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenCountArgs} args - Arguments to filter Dokumen to count.
     * @example
     * // Count the number of Dokumen
     * const count = await prisma.dokumen.count({
     *   where: {
     *     // ... the filter for the Dokumen we want to count
     *   }
     * })
    **/
    count<T extends DokumenCountArgs>(
      args?: Subset<T, DokumenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DokumenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DokumenAggregateArgs>(args: Subset<T, DokumenAggregateArgs>): Prisma.PrismaPromise<GetDokumenAggregateType<T>>

    /**
     * Group by Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumenGroupByArgs} args - Group by arguments.
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
      T extends DokumenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DokumenGroupByArgs['orderBy'] }
        : { orderBy?: DokumenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DokumenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDokumenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dokumen model
   */
  readonly fields: DokumenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dokumen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DokumenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dokumen model
   */
  interface DokumenFieldRefs {
    readonly id: FieldRef<"Dokumen", 'String'>
    readonly nim: FieldRef<"Dokumen", 'String'>
    readonly jenis_dokumen: FieldRef<"Dokumen", 'JenisDokumen'>
    readonly file_path: FieldRef<"Dokumen", 'String'>
    readonly tanggal_upload: FieldRef<"Dokumen", 'DateTime'>
    readonly status: FieldRef<"Dokumen", 'DokumenStatus'>
    readonly komentar: FieldRef<"Dokumen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dokumen findUnique
   */
  export type DokumenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where: DokumenWhereUniqueInput
  }

  /**
   * Dokumen findUniqueOrThrow
   */
  export type DokumenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where: DokumenWhereUniqueInput
  }

  /**
   * Dokumen findFirst
   */
  export type DokumenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where?: DokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dokumen.
     */
    cursor?: DokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokumen.
     */
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * Dokumen findFirstOrThrow
   */
  export type DokumenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where?: DokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dokumen.
     */
    cursor?: DokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokumen.
     */
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * Dokumen findMany
   */
  export type DokumenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where?: DokumenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dokumen.
     */
    cursor?: DokumenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * Dokumen create
   */
  export type DokumenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * The data needed to create a Dokumen.
     */
    data: XOR<DokumenCreateInput, DokumenUncheckedCreateInput>
  }

  /**
   * Dokumen createMany
   */
  export type DokumenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dokumen.
     */
    data: DokumenCreateManyInput | DokumenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dokumen createManyAndReturn
   */
  export type DokumenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * The data used to create many Dokumen.
     */
    data: DokumenCreateManyInput | DokumenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dokumen update
   */
  export type DokumenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * The data needed to update a Dokumen.
     */
    data: XOR<DokumenUpdateInput, DokumenUncheckedUpdateInput>
    /**
     * Choose, which Dokumen to update.
     */
    where: DokumenWhereUniqueInput
  }

  /**
   * Dokumen updateMany
   */
  export type DokumenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dokumen.
     */
    data: XOR<DokumenUpdateManyMutationInput, DokumenUncheckedUpdateManyInput>
    /**
     * Filter which Dokumen to update
     */
    where?: DokumenWhereInput
    /**
     * Limit how many Dokumen to update.
     */
    limit?: number
  }

  /**
   * Dokumen updateManyAndReturn
   */
  export type DokumenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * The data used to update Dokumen.
     */
    data: XOR<DokumenUpdateManyMutationInput, DokumenUncheckedUpdateManyInput>
    /**
     * Filter which Dokumen to update
     */
    where?: DokumenWhereInput
    /**
     * Limit how many Dokumen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dokumen upsert
   */
  export type DokumenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * The filter to search for the Dokumen to update in case it exists.
     */
    where: DokumenWhereUniqueInput
    /**
     * In case the Dokumen found by the `where` argument doesn't exist, create a new Dokumen with this data.
     */
    create: XOR<DokumenCreateInput, DokumenUncheckedCreateInput>
    /**
     * In case the Dokumen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DokumenUpdateInput, DokumenUncheckedUpdateInput>
  }

  /**
   * Dokumen delete
   */
  export type DokumenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    /**
     * Filter which Dokumen to delete.
     */
    where: DokumenWhereUniqueInput
  }

  /**
   * Dokumen deleteMany
   */
  export type DokumenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dokumen to delete
     */
    where?: DokumenWhereInput
    /**
     * Limit how many Dokumen to delete.
     */
    limit?: number
  }

  /**
   * Dokumen without action
   */
  export type DokumenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
  }


  /**
   * Model Dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenMinAggregateOutputType = {
    nip: string | null
    nama: string | null
    email: string | null
    no_hp: string | null
    chat_id: string | null
  }

  export type DosenMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
    email: string | null
    no_hp: string | null
    chat_id: string | null
  }

  export type DosenCountAggregateOutputType = {
    nip: number
    nama: number
    email: number
    no_hp: number
    chat_id: number
    _all: number
  }


  export type DosenMinAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
    no_hp?: true
    chat_id?: true
  }

  export type DosenMaxAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
    no_hp?: true
    chat_id?: true
  }

  export type DosenCountAggregateInputType = {
    nip?: true
    nama?: true
    email?: true
    no_hp?: true
    chat_id?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosen to aggregate.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type DosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DosenWhereInput
    orderBy?: DosenOrderByWithAggregationInput | DosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: DosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends DosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type DosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_hp?: boolean
    chat_id?: boolean
    Bimbingan?: boolean | Dosen$BimbinganArgs<ExtArgs>
    Jadwal?: boolean | Dosen$JadwalArgs<ExtArgs>
    NilaiPenguji?: boolean | Dosen$NilaiPengujiArgs<ExtArgs>
    NilaiPembimbing?: boolean | Dosen$NilaiPembimbingArgs<ExtArgs>
    PendaftaranKP?: boolean | Dosen$PendaftaranKPArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>

  export type DosenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_hp?: boolean
    chat_id?: boolean
  }, ExtArgs["result"]["dosen"]>

  export type DosenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_hp?: boolean
    chat_id?: boolean
  }, ExtArgs["result"]["dosen"]>

  export type DosenSelectScalar = {
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_hp?: boolean
    chat_id?: boolean
  }

  export type DosenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "nama" | "email" | "no_hp" | "chat_id", ExtArgs["result"]["dosen"]>
  export type DosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bimbingan?: boolean | Dosen$BimbinganArgs<ExtArgs>
    Jadwal?: boolean | Dosen$JadwalArgs<ExtArgs>
    NilaiPenguji?: boolean | Dosen$NilaiPengujiArgs<ExtArgs>
    NilaiPembimbing?: boolean | Dosen$NilaiPembimbingArgs<ExtArgs>
    PendaftaranKP?: boolean | Dosen$PendaftaranKPArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DosenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DosenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dosen"
    objects: {
      Bimbingan: Prisma.$BimbinganPayload<ExtArgs>[]
      Jadwal: Prisma.$JadwalPayload<ExtArgs>[]
      NilaiPenguji: Prisma.$NilaiPayload<ExtArgs>[]
      NilaiPembimbing: Prisma.$NilaiPayload<ExtArgs>[]
      PendaftaranKP: Prisma.$PendaftaranKPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
      email: string
      no_hp: string
      chat_id: string
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type DosenGetPayload<S extends boolean | null | undefined | DosenDefaultArgs> = $Result.GetResult<Prisma.$DosenPayload, S>

  type DosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DosenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface DosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dosen'], meta: { name: 'Dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {DosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DosenFindUniqueArgs>(args: SelectSubset<T, DosenFindUniqueArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DosenFindUniqueOrThrowArgs>(args: SelectSubset<T, DosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DosenFindFirstArgs>(args?: SelectSubset<T, DosenFindFirstArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DosenFindFirstOrThrowArgs>(args?: SelectSubset<T, DosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const dosenWithNipOnly = await prisma.dosen.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends DosenFindManyArgs>(args?: SelectSubset<T, DosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dosen.
     * @param {DosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends DosenCreateArgs>(args: SelectSubset<T, DosenCreateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dosens.
     * @param {DosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DosenCreateManyArgs>(args?: SelectSubset<T, DosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dosens and returns the data saved in the database.
     * @param {DosenCreateManyAndReturnArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dosens and only return the `nip`
     * const dosenWithNipOnly = await prisma.dosen.createManyAndReturn({
     *   select: { nip: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DosenCreateManyAndReturnArgs>(args?: SelectSubset<T, DosenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dosen.
     * @param {DosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends DosenDeleteArgs>(args: SelectSubset<T, DosenDeleteArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dosen.
     * @param {DosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DosenUpdateArgs>(args: SelectSubset<T, DosenUpdateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dosens.
     * @param {DosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DosenDeleteManyArgs>(args?: SelectSubset<T, DosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DosenUpdateManyArgs>(args: SelectSubset<T, DosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens and returns the data updated in the database.
     * @param {DosenUpdateManyAndReturnArgs} args - Arguments to update many Dosens.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dosens and only return the `nip`
     * const dosenWithNipOnly = await prisma.dosen.updateManyAndReturn({
     *   select: { nip: true },
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
    updateManyAndReturn<T extends DosenUpdateManyAndReturnArgs>(args: SelectSubset<T, DosenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dosen.
     * @param {DosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends DosenUpsertArgs>(args: SelectSubset<T, DosenUpsertArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends DosenCountArgs>(
      args?: Subset<T, DosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenGroupByArgs} args - Group by arguments.
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
      T extends DosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DosenGroupByArgs['orderBy'] }
        : { orderBy?: DosenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dosen model
   */
  readonly fields: DosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bimbingan<T extends Dosen$BimbinganArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$BimbinganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Jadwal<T extends Dosen$JadwalArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$JadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    NilaiPenguji<T extends Dosen$NilaiPengujiArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$NilaiPengujiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    NilaiPembimbing<T extends Dosen$NilaiPembimbingArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$NilaiPembimbingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PendaftaranKP<T extends Dosen$PendaftaranKPArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$PendaftaranKPArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dosen model
   */
  interface DosenFieldRefs {
    readonly nip: FieldRef<"Dosen", 'String'>
    readonly nama: FieldRef<"Dosen", 'String'>
    readonly email: FieldRef<"Dosen", 'String'>
    readonly no_hp: FieldRef<"Dosen", 'String'>
    readonly chat_id: FieldRef<"Dosen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dosen findUnique
   */
  export type DosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findUniqueOrThrow
   */
  export type DosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findFirst
   */
  export type DosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findFirstOrThrow
   */
  export type DosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findMany
   */
  export type DosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosens to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen create
   */
  export type DosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to create a Dosen.
     */
    data: XOR<DosenCreateInput, DosenUncheckedCreateInput>
  }

  /**
   * Dosen createMany
   */
  export type DosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dosens.
     */
    data: DosenCreateManyInput | DosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dosen createManyAndReturn
   */
  export type DosenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * The data used to create many Dosens.
     */
    data: DosenCreateManyInput | DosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dosen update
   */
  export type DosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to update a Dosen.
     */
    data: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
    /**
     * Choose, which Dosen to update.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen updateMany
   */
  export type DosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dosens.
     */
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyInput>
    /**
     * Filter which Dosens to update
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to update.
     */
    limit?: number
  }

  /**
   * Dosen updateManyAndReturn
   */
  export type DosenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * The data used to update Dosens.
     */
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyInput>
    /**
     * Filter which Dosens to update
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to update.
     */
    limit?: number
  }

  /**
   * Dosen upsert
   */
  export type DosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The filter to search for the Dosen to update in case it exists.
     */
    where: DosenWhereUniqueInput
    /**
     * In case the Dosen found by the `where` argument doesn't exist, create a new Dosen with this data.
     */
    create: XOR<DosenCreateInput, DosenUncheckedCreateInput>
    /**
     * In case the Dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
  }

  /**
   * Dosen delete
   */
  export type DosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter which Dosen to delete.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen deleteMany
   */
  export type DosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosens to delete
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to delete.
     */
    limit?: number
  }

  /**
   * Dosen.Bimbingan
   */
  export type Dosen$BimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    where?: BimbinganWhereInput
    orderBy?: BimbinganOrderByWithRelationInput | BimbinganOrderByWithRelationInput[]
    cursor?: BimbinganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * Dosen.Jadwal
   */
  export type Dosen$JadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    cursor?: JadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Dosen.NilaiPenguji
   */
  export type Dosen$NilaiPengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    where?: NilaiWhereInput
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    cursor?: NilaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Dosen.NilaiPembimbing
   */
  export type Dosen$NilaiPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    where?: NilaiWhereInput
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    cursor?: NilaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Dosen.PendaftaranKP
   */
  export type Dosen$PendaftaranKPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    where?: PendaftaranKPWhereInput
    orderBy?: PendaftaranKPOrderByWithRelationInput | PendaftaranKPOrderByWithRelationInput[]
    cursor?: PendaftaranKPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendaftaranKPScalarFieldEnum | PendaftaranKPScalarFieldEnum[]
  }

  /**
   * Dosen without action
   */
  export type DosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
  }


  /**
   * Model Instansi
   */

  export type AggregateInstansi = {
    _count: InstansiCountAggregateOutputType | null
    _avg: InstansiAvgAggregateOutputType | null
    _sum: InstansiSumAggregateOutputType | null
    _min: InstansiMinAggregateOutputType | null
    _max: InstansiMaxAggregateOutputType | null
  }

  export type InstansiAvgAggregateOutputType = {
    id: number | null
  }

  export type InstansiSumAggregateOutputType = {
    id: number | null
  }

  export type InstansiMinAggregateOutputType = {
    id: number | null
    nama: string | null
    alamat: string | null
    jenis: $Enums.JenisInstansi | null
    profil_singkat: string | null
    status: $Enums.StatusInstansi | null
  }

  export type InstansiMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    alamat: string | null
    jenis: $Enums.JenisInstansi | null
    profil_singkat: string | null
    status: $Enums.StatusInstansi | null
  }

  export type InstansiCountAggregateOutputType = {
    id: number
    nama: number
    alamat: number
    jenis: number
    profil_singkat: number
    status: number
    _all: number
  }


  export type InstansiAvgAggregateInputType = {
    id?: true
  }

  export type InstansiSumAggregateInputType = {
    id?: true
  }

  export type InstansiMinAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    profil_singkat?: true
    status?: true
  }

  export type InstansiMaxAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    profil_singkat?: true
    status?: true
  }

  export type InstansiCountAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    jenis?: true
    profil_singkat?: true
    status?: true
    _all?: true
  }

  export type InstansiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instansi to aggregate.
     */
    where?: InstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instansis to fetch.
     */
    orderBy?: InstansiOrderByWithRelationInput | InstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instansis
    **/
    _count?: true | InstansiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstansiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstansiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstansiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstansiMaxAggregateInputType
  }

  export type GetInstansiAggregateType<T extends InstansiAggregateArgs> = {
        [P in keyof T & keyof AggregateInstansi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstansi[P]>
      : GetScalarType<T[P], AggregateInstansi[P]>
  }




  export type InstansiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstansiWhereInput
    orderBy?: InstansiOrderByWithAggregationInput | InstansiOrderByWithAggregationInput[]
    by: InstansiScalarFieldEnum[] | InstansiScalarFieldEnum
    having?: InstansiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstansiCountAggregateInputType | true
    _avg?: InstansiAvgAggregateInputType
    _sum?: InstansiSumAggregateInputType
    _min?: InstansiMinAggregateInputType
    _max?: InstansiMaxAggregateInputType
  }

  export type InstansiGroupByOutputType = {
    id: number
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status: $Enums.StatusInstansi
    _count: InstansiCountAggregateOutputType | null
    _avg: InstansiAvgAggregateOutputType | null
    _sum: InstansiSumAggregateOutputType | null
    _min: InstansiMinAggregateOutputType | null
    _max: InstansiMaxAggregateOutputType | null
  }

  type GetInstansiGroupByPayload<T extends InstansiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstansiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstansiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstansiGroupByOutputType[P]>
            : GetScalarType<T[P], InstansiGroupByOutputType[P]>
        }
      >
    >


  export type InstansiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    profil_singkat?: boolean
    status?: boolean
    PembimbingInstansi?: boolean | Instansi$PembimbingInstansiArgs<ExtArgs>
    _count?: boolean | InstansiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instansi"]>

  export type InstansiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    profil_singkat?: boolean
    status?: boolean
  }, ExtArgs["result"]["instansi"]>

  export type InstansiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    profil_singkat?: boolean
    status?: boolean
  }, ExtArgs["result"]["instansi"]>

  export type InstansiSelectScalar = {
    id?: boolean
    nama?: boolean
    alamat?: boolean
    jenis?: boolean
    profil_singkat?: boolean
    status?: boolean
  }

  export type InstansiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "alamat" | "jenis" | "profil_singkat" | "status", ExtArgs["result"]["instansi"]>
  export type InstansiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembimbingInstansi?: boolean | Instansi$PembimbingInstansiArgs<ExtArgs>
    _count?: boolean | InstansiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstansiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstansiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstansiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instansi"
    objects: {
      PembimbingInstansi: Prisma.$PembimbingInstansiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      alamat: string
      jenis: $Enums.JenisInstansi
      profil_singkat: string
      status: $Enums.StatusInstansi
    }, ExtArgs["result"]["instansi"]>
    composites: {}
  }

  type InstansiGetPayload<S extends boolean | null | undefined | InstansiDefaultArgs> = $Result.GetResult<Prisma.$InstansiPayload, S>

  type InstansiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstansiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstansiCountAggregateInputType | true
    }

  export interface InstansiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instansi'], meta: { name: 'Instansi' } }
    /**
     * Find zero or one Instansi that matches the filter.
     * @param {InstansiFindUniqueArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstansiFindUniqueArgs>(args: SelectSubset<T, InstansiFindUniqueArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instansi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstansiFindUniqueOrThrowArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstansiFindUniqueOrThrowArgs>(args: SelectSubset<T, InstansiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instansi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiFindFirstArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstansiFindFirstArgs>(args?: SelectSubset<T, InstansiFindFirstArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instansi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiFindFirstOrThrowArgs} args - Arguments to find a Instansi
     * @example
     * // Get one Instansi
     * const instansi = await prisma.instansi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstansiFindFirstOrThrowArgs>(args?: SelectSubset<T, InstansiFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instansis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instansis
     * const instansis = await prisma.instansi.findMany()
     * 
     * // Get first 10 Instansis
     * const instansis = await prisma.instansi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instansiWithIdOnly = await prisma.instansi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstansiFindManyArgs>(args?: SelectSubset<T, InstansiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instansi.
     * @param {InstansiCreateArgs} args - Arguments to create a Instansi.
     * @example
     * // Create one Instansi
     * const Instansi = await prisma.instansi.create({
     *   data: {
     *     // ... data to create a Instansi
     *   }
     * })
     * 
     */
    create<T extends InstansiCreateArgs>(args: SelectSubset<T, InstansiCreateArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instansis.
     * @param {InstansiCreateManyArgs} args - Arguments to create many Instansis.
     * @example
     * // Create many Instansis
     * const instansi = await prisma.instansi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstansiCreateManyArgs>(args?: SelectSubset<T, InstansiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instansis and returns the data saved in the database.
     * @param {InstansiCreateManyAndReturnArgs} args - Arguments to create many Instansis.
     * @example
     * // Create many Instansis
     * const instansi = await prisma.instansi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instansis and only return the `id`
     * const instansiWithIdOnly = await prisma.instansi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstansiCreateManyAndReturnArgs>(args?: SelectSubset<T, InstansiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instansi.
     * @param {InstansiDeleteArgs} args - Arguments to delete one Instansi.
     * @example
     * // Delete one Instansi
     * const Instansi = await prisma.instansi.delete({
     *   where: {
     *     // ... filter to delete one Instansi
     *   }
     * })
     * 
     */
    delete<T extends InstansiDeleteArgs>(args: SelectSubset<T, InstansiDeleteArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instansi.
     * @param {InstansiUpdateArgs} args - Arguments to update one Instansi.
     * @example
     * // Update one Instansi
     * const instansi = await prisma.instansi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstansiUpdateArgs>(args: SelectSubset<T, InstansiUpdateArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instansis.
     * @param {InstansiDeleteManyArgs} args - Arguments to filter Instansis to delete.
     * @example
     * // Delete a few Instansis
     * const { count } = await prisma.instansi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstansiDeleteManyArgs>(args?: SelectSubset<T, InstansiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instansis
     * const instansi = await prisma.instansi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstansiUpdateManyArgs>(args: SelectSubset<T, InstansiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instansis and returns the data updated in the database.
     * @param {InstansiUpdateManyAndReturnArgs} args - Arguments to update many Instansis.
     * @example
     * // Update many Instansis
     * const instansi = await prisma.instansi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instansis and only return the `id`
     * const instansiWithIdOnly = await prisma.instansi.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstansiUpdateManyAndReturnArgs>(args: SelectSubset<T, InstansiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instansi.
     * @param {InstansiUpsertArgs} args - Arguments to update or create a Instansi.
     * @example
     * // Update or create a Instansi
     * const instansi = await prisma.instansi.upsert({
     *   create: {
     *     // ... data to create a Instansi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instansi we want to update
     *   }
     * })
     */
    upsert<T extends InstansiUpsertArgs>(args: SelectSubset<T, InstansiUpsertArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiCountArgs} args - Arguments to filter Instansis to count.
     * @example
     * // Count the number of Instansis
     * const count = await prisma.instansi.count({
     *   where: {
     *     // ... the filter for the Instansis we want to count
     *   }
     * })
    **/
    count<T extends InstansiCountArgs>(
      args?: Subset<T, InstansiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstansiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstansiAggregateArgs>(args: Subset<T, InstansiAggregateArgs>): Prisma.PrismaPromise<GetInstansiAggregateType<T>>

    /**
     * Group by Instansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstansiGroupByArgs} args - Group by arguments.
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
      T extends InstansiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstansiGroupByArgs['orderBy'] }
        : { orderBy?: InstansiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstansiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstansiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instansi model
   */
  readonly fields: InstansiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instansi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstansiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PembimbingInstansi<T extends Instansi$PembimbingInstansiArgs<ExtArgs> = {}>(args?: Subset<T, Instansi$PembimbingInstansiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instansi model
   */
  interface InstansiFieldRefs {
    readonly id: FieldRef<"Instansi", 'Int'>
    readonly nama: FieldRef<"Instansi", 'String'>
    readonly alamat: FieldRef<"Instansi", 'String'>
    readonly jenis: FieldRef<"Instansi", 'JenisInstansi'>
    readonly profil_singkat: FieldRef<"Instansi", 'String'>
    readonly status: FieldRef<"Instansi", 'StatusInstansi'>
  }
    

  // Custom InputTypes
  /**
   * Instansi findUnique
   */
  export type InstansiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansi to fetch.
     */
    where: InstansiWhereUniqueInput
  }

  /**
   * Instansi findUniqueOrThrow
   */
  export type InstansiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansi to fetch.
     */
    where: InstansiWhereUniqueInput
  }

  /**
   * Instansi findFirst
   */
  export type InstansiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansi to fetch.
     */
    where?: InstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instansis to fetch.
     */
    orderBy?: InstansiOrderByWithRelationInput | InstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instansis.
     */
    cursor?: InstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instansis.
     */
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * Instansi findFirstOrThrow
   */
  export type InstansiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansi to fetch.
     */
    where?: InstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instansis to fetch.
     */
    orderBy?: InstansiOrderByWithRelationInput | InstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instansis.
     */
    cursor?: InstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instansis.
     */
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * Instansi findMany
   */
  export type InstansiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter, which Instansis to fetch.
     */
    where?: InstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instansis to fetch.
     */
    orderBy?: InstansiOrderByWithRelationInput | InstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instansis.
     */
    cursor?: InstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instansis.
     */
    skip?: number
    distinct?: InstansiScalarFieldEnum | InstansiScalarFieldEnum[]
  }

  /**
   * Instansi create
   */
  export type InstansiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * The data needed to create a Instansi.
     */
    data: XOR<InstansiCreateInput, InstansiUncheckedCreateInput>
  }

  /**
   * Instansi createMany
   */
  export type InstansiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instansis.
     */
    data: InstansiCreateManyInput | InstansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instansi createManyAndReturn
   */
  export type InstansiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * The data used to create many Instansis.
     */
    data: InstansiCreateManyInput | InstansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instansi update
   */
  export type InstansiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * The data needed to update a Instansi.
     */
    data: XOR<InstansiUpdateInput, InstansiUncheckedUpdateInput>
    /**
     * Choose, which Instansi to update.
     */
    where: InstansiWhereUniqueInput
  }

  /**
   * Instansi updateMany
   */
  export type InstansiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instansis.
     */
    data: XOR<InstansiUpdateManyMutationInput, InstansiUncheckedUpdateManyInput>
    /**
     * Filter which Instansis to update
     */
    where?: InstansiWhereInput
    /**
     * Limit how many Instansis to update.
     */
    limit?: number
  }

  /**
   * Instansi updateManyAndReturn
   */
  export type InstansiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * The data used to update Instansis.
     */
    data: XOR<InstansiUpdateManyMutationInput, InstansiUncheckedUpdateManyInput>
    /**
     * Filter which Instansis to update
     */
    where?: InstansiWhereInput
    /**
     * Limit how many Instansis to update.
     */
    limit?: number
  }

  /**
   * Instansi upsert
   */
  export type InstansiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * The filter to search for the Instansi to update in case it exists.
     */
    where: InstansiWhereUniqueInput
    /**
     * In case the Instansi found by the `where` argument doesn't exist, create a new Instansi with this data.
     */
    create: XOR<InstansiCreateInput, InstansiUncheckedCreateInput>
    /**
     * In case the Instansi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstansiUpdateInput, InstansiUncheckedUpdateInput>
  }

  /**
   * Instansi delete
   */
  export type InstansiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
    /**
     * Filter which Instansi to delete.
     */
    where: InstansiWhereUniqueInput
  }

  /**
   * Instansi deleteMany
   */
  export type InstansiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instansis to delete
     */
    where?: InstansiWhereInput
    /**
     * Limit how many Instansis to delete.
     */
    limit?: number
  }

  /**
   * Instansi.PembimbingInstansi
   */
  export type Instansi$PembimbingInstansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    where?: PembimbingInstansiWhereInput
    orderBy?: PembimbingInstansiOrderByWithRelationInput | PembimbingInstansiOrderByWithRelationInput[]
    cursor?: PembimbingInstansiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembimbingInstansiScalarFieldEnum | PembimbingInstansiScalarFieldEnum[]
  }

  /**
   * Instansi without action
   */
  export type InstansiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instansi
     */
    select?: InstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instansi
     */
    omit?: InstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstansiInclude<ExtArgs> | null
  }


  /**
   * Model Jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalMinAggregateOutputType = {
    id: string | null
    nim: string | null
    nip: string | null
    tanggal: Date | null
    waktu_mulai: Date | null
    waktu_selesai: Date | null
    ruangan_nama: string | null
    status: $Enums.StatusSeminar | null
  }

  export type JadwalMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    nip: string | null
    tanggal: Date | null
    waktu_mulai: Date | null
    waktu_selesai: Date | null
    ruangan_nama: string | null
    status: $Enums.StatusSeminar | null
  }

  export type JadwalCountAggregateOutputType = {
    id: number
    nim: number
    nip: number
    tanggal: number
    waktu_mulai: number
    waktu_selesai: number
    ruangan_nama: number
    status: number
    _all: number
  }


  export type JadwalMinAggregateInputType = {
    id?: true
    nim?: true
    nip?: true
    tanggal?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruangan_nama?: true
    status?: true
  }

  export type JadwalMaxAggregateInputType = {
    id?: true
    nim?: true
    nip?: true
    tanggal?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruangan_nama?: true
    status?: true
  }

  export type JadwalCountAggregateInputType = {
    id?: true
    nim?: true
    nip?: true
    tanggal?: true
    waktu_mulai?: true
    waktu_selesai?: true
    ruangan_nama?: true
    status?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal to aggregate.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type JadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithAggregationInput | JadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: JadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    id: string
    nim: string
    nip: string
    tanggal: Date
    waktu_mulai: Date
    waktu_selesai: Date
    ruangan_nama: string
    status: $Enums.StatusSeminar
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends JadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type JadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nip?: boolean
    tanggal?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruangan_nama?: boolean
    status?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
    Ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
    Nilai?: boolean | Jadwal$NilaiArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nip?: boolean
    tanggal?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruangan_nama?: boolean
    status?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
    Ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nip?: boolean
    tanggal?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruangan_nama?: boolean
    status?: boolean
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
    Ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectScalar = {
    id?: boolean
    nim?: boolean
    nip?: boolean
    tanggal?: boolean
    waktu_mulai?: boolean
    waktu_selesai?: boolean
    ruangan_nama?: boolean
    status?: boolean
  }

  export type JadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "nip" | "tanggal" | "waktu_mulai" | "waktu_selesai" | "ruangan_nama" | "status", ExtArgs["result"]["jadwal"]>
  export type JadwalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
    Ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
    Nilai?: boolean | Jadwal$NilaiArgs<ExtArgs>
  }
  export type JadwalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
    Ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }
  export type JadwalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | DosenDefaultArgs<ExtArgs>
    Ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }

  export type $JadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jadwal"
    objects: {
      Mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      Dosen: Prisma.$DosenPayload<ExtArgs>
      Ruangan: Prisma.$RuanganPayload<ExtArgs>
      Nilai: Prisma.$NilaiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      nip: string
      tanggal: Date
      waktu_mulai: Date
      waktu_selesai: Date
      ruangan_nama: string
      status: $Enums.StatusSeminar
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type JadwalGetPayload<S extends boolean | null | undefined | JadwalDefaultArgs> = $Result.GetResult<Prisma.$JadwalPayload, S>

  type JadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface JadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jadwal'], meta: { name: 'Jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {JadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalFindUniqueArgs>(args: SelectSubset<T, JadwalFindUniqueArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalFindFirstArgs>(args?: SelectSubset<T, JadwalFindFirstArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalFindManyArgs>(args?: SelectSubset<T, JadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal.
     * @param {JadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends JadwalCreateArgs>(args: SelectSubset<T, JadwalCreateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwals.
     * @param {JadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalCreateManyArgs>(args?: SelectSubset<T, JadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jadwals and returns the data saved in the database.
     * @param {JadwalCreateManyAndReturnArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jadwal.
     * @param {JadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends JadwalDeleteArgs>(args: SelectSubset<T, JadwalDeleteArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal.
     * @param {JadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalUpdateArgs>(args: SelectSubset<T, JadwalUpdateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwals.
     * @param {JadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalDeleteManyArgs>(args?: SelectSubset<T, JadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalUpdateManyArgs>(args: SelectSubset<T, JadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals and returns the data updated in the database.
     * @param {JadwalUpdateManyAndReturnArgs} args - Arguments to update many Jadwals.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.updateManyAndReturn({
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
    updateManyAndReturn<T extends JadwalUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jadwal.
     * @param {JadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends JadwalUpsertArgs>(args: SelectSubset<T, JadwalUpsertArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends JadwalCountArgs>(
      args?: Subset<T, JadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalGroupByArgs} args - Group by arguments.
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
      T extends JadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalGroupByArgs['orderBy'] }
        : { orderBy?: JadwalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jadwal model
   */
  readonly fields: JadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Dosen<T extends DosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DosenDefaultArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Ruangan<T extends RuanganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RuanganDefaultArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Nilai<T extends Jadwal$NilaiArgs<ExtArgs> = {}>(args?: Subset<T, Jadwal$NilaiArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Jadwal model
   */
  interface JadwalFieldRefs {
    readonly id: FieldRef<"Jadwal", 'String'>
    readonly nim: FieldRef<"Jadwal", 'String'>
    readonly nip: FieldRef<"Jadwal", 'String'>
    readonly tanggal: FieldRef<"Jadwal", 'DateTime'>
    readonly waktu_mulai: FieldRef<"Jadwal", 'DateTime'>
    readonly waktu_selesai: FieldRef<"Jadwal", 'DateTime'>
    readonly ruangan_nama: FieldRef<"Jadwal", 'String'>
    readonly status: FieldRef<"Jadwal", 'StatusSeminar'>
  }
    

  // Custom InputTypes
  /**
   * Jadwal findUnique
   */
  export type JadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findUniqueOrThrow
   */
  export type JadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findFirst
   */
  export type JadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findFirstOrThrow
   */
  export type JadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findMany
   */
  export type JadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwals to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal create
   */
  export type JadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to create a Jadwal.
     */
    data: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
  }

  /**
   * Jadwal createMany
   */
  export type JadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal createManyAndReturn
   */
  export type JadwalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jadwal update
   */
  export type JadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to update a Jadwal.
     */
    data: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
    /**
     * Choose, which Jadwal to update.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal updateMany
   */
  export type JadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
  }

  /**
   * Jadwal updateManyAndReturn
   */
  export type JadwalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jadwal upsert
   */
  export type JadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The filter to search for the Jadwal to update in case it exists.
     */
    where: JadwalWhereUniqueInput
    /**
     * In case the Jadwal found by the `where` argument doesn't exist, create a new Jadwal with this data.
     */
    create: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
    /**
     * In case the Jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
  }

  /**
   * Jadwal delete
   */
  export type JadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter which Jadwal to delete.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal deleteMany
   */
  export type JadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwals to delete
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to delete.
     */
    limit?: number
  }

  /**
   * Jadwal.Nilai
   */
  export type Jadwal$NilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    where?: NilaiWhereInput
  }

  /**
   * Jadwal without action
   */
  export type JadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
  }


  /**
   * Model LogJadwal
   */

  export type AggregateLogJadwal = {
    _count: LogJadwalCountAggregateOutputType | null
    _min: LogJadwalMinAggregateOutputType | null
    _max: LogJadwalMaxAggregateOutputType | null
  }

  export type LogJadwalMinAggregateOutputType = {
    id: string | null
    jadwal_seminar_id: string | null
    log_type: $Enums.LogType | null
    nip: string | null
    tanggal_lama: Date | null
    tanggal_baru: Date | null
    ruangan_lama: string | null
    ruangan_baru: string | null
    keterangan: string | null
    created_at: Date | null
  }

  export type LogJadwalMaxAggregateOutputType = {
    id: string | null
    jadwal_seminar_id: string | null
    log_type: $Enums.LogType | null
    nip: string | null
    tanggal_lama: Date | null
    tanggal_baru: Date | null
    ruangan_lama: string | null
    ruangan_baru: string | null
    keterangan: string | null
    created_at: Date | null
  }

  export type LogJadwalCountAggregateOutputType = {
    id: number
    jadwal_seminar_id: number
    log_type: number
    nip: number
    tanggal_lama: number
    tanggal_baru: number
    ruangan_lama: number
    ruangan_baru: number
    keterangan: number
    created_at: number
    _all: number
  }


  export type LogJadwalMinAggregateInputType = {
    id?: true
    jadwal_seminar_id?: true
    log_type?: true
    nip?: true
    tanggal_lama?: true
    tanggal_baru?: true
    ruangan_lama?: true
    ruangan_baru?: true
    keterangan?: true
    created_at?: true
  }

  export type LogJadwalMaxAggregateInputType = {
    id?: true
    jadwal_seminar_id?: true
    log_type?: true
    nip?: true
    tanggal_lama?: true
    tanggal_baru?: true
    ruangan_lama?: true
    ruangan_baru?: true
    keterangan?: true
    created_at?: true
  }

  export type LogJadwalCountAggregateInputType = {
    id?: true
    jadwal_seminar_id?: true
    log_type?: true
    nip?: true
    tanggal_lama?: true
    tanggal_baru?: true
    ruangan_lama?: true
    ruangan_baru?: true
    keterangan?: true
    created_at?: true
    _all?: true
  }

  export type LogJadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogJadwal to aggregate.
     */
    where?: LogJadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogJadwals to fetch.
     */
    orderBy?: LogJadwalOrderByWithRelationInput | LogJadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogJadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogJadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogJadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogJadwals
    **/
    _count?: true | LogJadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogJadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogJadwalMaxAggregateInputType
  }

  export type GetLogJadwalAggregateType<T extends LogJadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateLogJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogJadwal[P]>
      : GetScalarType<T[P], AggregateLogJadwal[P]>
  }




  export type LogJadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogJadwalWhereInput
    orderBy?: LogJadwalOrderByWithAggregationInput | LogJadwalOrderByWithAggregationInput[]
    by: LogJadwalScalarFieldEnum[] | LogJadwalScalarFieldEnum
    having?: LogJadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogJadwalCountAggregateInputType | true
    _min?: LogJadwalMinAggregateInputType
    _max?: LogJadwalMaxAggregateInputType
  }

  export type LogJadwalGroupByOutputType = {
    id: string
    jadwal_seminar_id: string
    log_type: $Enums.LogType
    nip: string
    tanggal_lama: Date | null
    tanggal_baru: Date | null
    ruangan_lama: string | null
    ruangan_baru: string | null
    keterangan: string | null
    created_at: Date
    _count: LogJadwalCountAggregateOutputType | null
    _min: LogJadwalMinAggregateOutputType | null
    _max: LogJadwalMaxAggregateOutputType | null
  }

  type GetLogJadwalGroupByPayload<T extends LogJadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogJadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogJadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogJadwalGroupByOutputType[P]>
            : GetScalarType<T[P], LogJadwalGroupByOutputType[P]>
        }
      >
    >


  export type LogJadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jadwal_seminar_id?: boolean
    log_type?: boolean
    nip?: boolean
    tanggal_lama?: boolean
    tanggal_baru?: boolean
    ruangan_lama?: boolean
    ruangan_baru?: boolean
    keterangan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["logJadwal"]>

  export type LogJadwalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jadwal_seminar_id?: boolean
    log_type?: boolean
    nip?: boolean
    tanggal_lama?: boolean
    tanggal_baru?: boolean
    ruangan_lama?: boolean
    ruangan_baru?: boolean
    keterangan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["logJadwal"]>

  export type LogJadwalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jadwal_seminar_id?: boolean
    log_type?: boolean
    nip?: boolean
    tanggal_lama?: boolean
    tanggal_baru?: boolean
    ruangan_lama?: boolean
    ruangan_baru?: boolean
    keterangan?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["logJadwal"]>

  export type LogJadwalSelectScalar = {
    id?: boolean
    jadwal_seminar_id?: boolean
    log_type?: boolean
    nip?: boolean
    tanggal_lama?: boolean
    tanggal_baru?: boolean
    ruangan_lama?: boolean
    ruangan_baru?: boolean
    keterangan?: boolean
    created_at?: boolean
  }

  export type LogJadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jadwal_seminar_id" | "log_type" | "nip" | "tanggal_lama" | "tanggal_baru" | "ruangan_lama" | "ruangan_baru" | "keterangan" | "created_at", ExtArgs["result"]["logJadwal"]>

  export type $LogJadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogJadwal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jadwal_seminar_id: string
      log_type: $Enums.LogType
      nip: string
      tanggal_lama: Date | null
      tanggal_baru: Date | null
      ruangan_lama: string | null
      ruangan_baru: string | null
      keterangan: string | null
      created_at: Date
    }, ExtArgs["result"]["logJadwal"]>
    composites: {}
  }

  type LogJadwalGetPayload<S extends boolean | null | undefined | LogJadwalDefaultArgs> = $Result.GetResult<Prisma.$LogJadwalPayload, S>

  type LogJadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogJadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogJadwalCountAggregateInputType | true
    }

  export interface LogJadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogJadwal'], meta: { name: 'LogJadwal' } }
    /**
     * Find zero or one LogJadwal that matches the filter.
     * @param {LogJadwalFindUniqueArgs} args - Arguments to find a LogJadwal
     * @example
     * // Get one LogJadwal
     * const logJadwal = await prisma.logJadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogJadwalFindUniqueArgs>(args: SelectSubset<T, LogJadwalFindUniqueArgs<ExtArgs>>): Prisma__LogJadwalClient<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogJadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogJadwalFindUniqueOrThrowArgs} args - Arguments to find a LogJadwal
     * @example
     * // Get one LogJadwal
     * const logJadwal = await prisma.logJadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogJadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, LogJadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogJadwalClient<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogJadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogJadwalFindFirstArgs} args - Arguments to find a LogJadwal
     * @example
     * // Get one LogJadwal
     * const logJadwal = await prisma.logJadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogJadwalFindFirstArgs>(args?: SelectSubset<T, LogJadwalFindFirstArgs<ExtArgs>>): Prisma__LogJadwalClient<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogJadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogJadwalFindFirstOrThrowArgs} args - Arguments to find a LogJadwal
     * @example
     * // Get one LogJadwal
     * const logJadwal = await prisma.logJadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogJadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, LogJadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogJadwalClient<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogJadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogJadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogJadwals
     * const logJadwals = await prisma.logJadwal.findMany()
     * 
     * // Get first 10 LogJadwals
     * const logJadwals = await prisma.logJadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logJadwalWithIdOnly = await prisma.logJadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogJadwalFindManyArgs>(args?: SelectSubset<T, LogJadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogJadwal.
     * @param {LogJadwalCreateArgs} args - Arguments to create a LogJadwal.
     * @example
     * // Create one LogJadwal
     * const LogJadwal = await prisma.logJadwal.create({
     *   data: {
     *     // ... data to create a LogJadwal
     *   }
     * })
     * 
     */
    create<T extends LogJadwalCreateArgs>(args: SelectSubset<T, LogJadwalCreateArgs<ExtArgs>>): Prisma__LogJadwalClient<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogJadwals.
     * @param {LogJadwalCreateManyArgs} args - Arguments to create many LogJadwals.
     * @example
     * // Create many LogJadwals
     * const logJadwal = await prisma.logJadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogJadwalCreateManyArgs>(args?: SelectSubset<T, LogJadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogJadwals and returns the data saved in the database.
     * @param {LogJadwalCreateManyAndReturnArgs} args - Arguments to create many LogJadwals.
     * @example
     * // Create many LogJadwals
     * const logJadwal = await prisma.logJadwal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogJadwals and only return the `id`
     * const logJadwalWithIdOnly = await prisma.logJadwal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogJadwalCreateManyAndReturnArgs>(args?: SelectSubset<T, LogJadwalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogJadwal.
     * @param {LogJadwalDeleteArgs} args - Arguments to delete one LogJadwal.
     * @example
     * // Delete one LogJadwal
     * const LogJadwal = await prisma.logJadwal.delete({
     *   where: {
     *     // ... filter to delete one LogJadwal
     *   }
     * })
     * 
     */
    delete<T extends LogJadwalDeleteArgs>(args: SelectSubset<T, LogJadwalDeleteArgs<ExtArgs>>): Prisma__LogJadwalClient<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogJadwal.
     * @param {LogJadwalUpdateArgs} args - Arguments to update one LogJadwal.
     * @example
     * // Update one LogJadwal
     * const logJadwal = await prisma.logJadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogJadwalUpdateArgs>(args: SelectSubset<T, LogJadwalUpdateArgs<ExtArgs>>): Prisma__LogJadwalClient<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogJadwals.
     * @param {LogJadwalDeleteManyArgs} args - Arguments to filter LogJadwals to delete.
     * @example
     * // Delete a few LogJadwals
     * const { count } = await prisma.logJadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogJadwalDeleteManyArgs>(args?: SelectSubset<T, LogJadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogJadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogJadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogJadwals
     * const logJadwal = await prisma.logJadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogJadwalUpdateManyArgs>(args: SelectSubset<T, LogJadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogJadwals and returns the data updated in the database.
     * @param {LogJadwalUpdateManyAndReturnArgs} args - Arguments to update many LogJadwals.
     * @example
     * // Update many LogJadwals
     * const logJadwal = await prisma.logJadwal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogJadwals and only return the `id`
     * const logJadwalWithIdOnly = await prisma.logJadwal.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogJadwalUpdateManyAndReturnArgs>(args: SelectSubset<T, LogJadwalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogJadwal.
     * @param {LogJadwalUpsertArgs} args - Arguments to update or create a LogJadwal.
     * @example
     * // Update or create a LogJadwal
     * const logJadwal = await prisma.logJadwal.upsert({
     *   create: {
     *     // ... data to create a LogJadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogJadwal we want to update
     *   }
     * })
     */
    upsert<T extends LogJadwalUpsertArgs>(args: SelectSubset<T, LogJadwalUpsertArgs<ExtArgs>>): Prisma__LogJadwalClient<$Result.GetResult<Prisma.$LogJadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogJadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogJadwalCountArgs} args - Arguments to filter LogJadwals to count.
     * @example
     * // Count the number of LogJadwals
     * const count = await prisma.logJadwal.count({
     *   where: {
     *     // ... the filter for the LogJadwals we want to count
     *   }
     * })
    **/
    count<T extends LogJadwalCountArgs>(
      args?: Subset<T, LogJadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogJadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogJadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogJadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogJadwalAggregateArgs>(args: Subset<T, LogJadwalAggregateArgs>): Prisma.PrismaPromise<GetLogJadwalAggregateType<T>>

    /**
     * Group by LogJadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogJadwalGroupByArgs} args - Group by arguments.
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
      T extends LogJadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogJadwalGroupByArgs['orderBy'] }
        : { orderBy?: LogJadwalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogJadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogJadwal model
   */
  readonly fields: LogJadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogJadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogJadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LogJadwal model
   */
  interface LogJadwalFieldRefs {
    readonly id: FieldRef<"LogJadwal", 'String'>
    readonly jadwal_seminar_id: FieldRef<"LogJadwal", 'String'>
    readonly log_type: FieldRef<"LogJadwal", 'LogType'>
    readonly nip: FieldRef<"LogJadwal", 'String'>
    readonly tanggal_lama: FieldRef<"LogJadwal", 'DateTime'>
    readonly tanggal_baru: FieldRef<"LogJadwal", 'DateTime'>
    readonly ruangan_lama: FieldRef<"LogJadwal", 'String'>
    readonly ruangan_baru: FieldRef<"LogJadwal", 'String'>
    readonly keterangan: FieldRef<"LogJadwal", 'String'>
    readonly created_at: FieldRef<"LogJadwal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogJadwal findUnique
   */
  export type LogJadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * Filter, which LogJadwal to fetch.
     */
    where: LogJadwalWhereUniqueInput
  }

  /**
   * LogJadwal findUniqueOrThrow
   */
  export type LogJadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * Filter, which LogJadwal to fetch.
     */
    where: LogJadwalWhereUniqueInput
  }

  /**
   * LogJadwal findFirst
   */
  export type LogJadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * Filter, which LogJadwal to fetch.
     */
    where?: LogJadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogJadwals to fetch.
     */
    orderBy?: LogJadwalOrderByWithRelationInput | LogJadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogJadwals.
     */
    cursor?: LogJadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogJadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogJadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogJadwals.
     */
    distinct?: LogJadwalScalarFieldEnum | LogJadwalScalarFieldEnum[]
  }

  /**
   * LogJadwal findFirstOrThrow
   */
  export type LogJadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * Filter, which LogJadwal to fetch.
     */
    where?: LogJadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogJadwals to fetch.
     */
    orderBy?: LogJadwalOrderByWithRelationInput | LogJadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogJadwals.
     */
    cursor?: LogJadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogJadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogJadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogJadwals.
     */
    distinct?: LogJadwalScalarFieldEnum | LogJadwalScalarFieldEnum[]
  }

  /**
   * LogJadwal findMany
   */
  export type LogJadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * Filter, which LogJadwals to fetch.
     */
    where?: LogJadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogJadwals to fetch.
     */
    orderBy?: LogJadwalOrderByWithRelationInput | LogJadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogJadwals.
     */
    cursor?: LogJadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogJadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogJadwals.
     */
    skip?: number
    distinct?: LogJadwalScalarFieldEnum | LogJadwalScalarFieldEnum[]
  }

  /**
   * LogJadwal create
   */
  export type LogJadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * The data needed to create a LogJadwal.
     */
    data: XOR<LogJadwalCreateInput, LogJadwalUncheckedCreateInput>
  }

  /**
   * LogJadwal createMany
   */
  export type LogJadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogJadwals.
     */
    data: LogJadwalCreateManyInput | LogJadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogJadwal createManyAndReturn
   */
  export type LogJadwalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * The data used to create many LogJadwals.
     */
    data: LogJadwalCreateManyInput | LogJadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogJadwal update
   */
  export type LogJadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * The data needed to update a LogJadwal.
     */
    data: XOR<LogJadwalUpdateInput, LogJadwalUncheckedUpdateInput>
    /**
     * Choose, which LogJadwal to update.
     */
    where: LogJadwalWhereUniqueInput
  }

  /**
   * LogJadwal updateMany
   */
  export type LogJadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogJadwals.
     */
    data: XOR<LogJadwalUpdateManyMutationInput, LogJadwalUncheckedUpdateManyInput>
    /**
     * Filter which LogJadwals to update
     */
    where?: LogJadwalWhereInput
    /**
     * Limit how many LogJadwals to update.
     */
    limit?: number
  }

  /**
   * LogJadwal updateManyAndReturn
   */
  export type LogJadwalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * The data used to update LogJadwals.
     */
    data: XOR<LogJadwalUpdateManyMutationInput, LogJadwalUncheckedUpdateManyInput>
    /**
     * Filter which LogJadwals to update
     */
    where?: LogJadwalWhereInput
    /**
     * Limit how many LogJadwals to update.
     */
    limit?: number
  }

  /**
   * LogJadwal upsert
   */
  export type LogJadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * The filter to search for the LogJadwal to update in case it exists.
     */
    where: LogJadwalWhereUniqueInput
    /**
     * In case the LogJadwal found by the `where` argument doesn't exist, create a new LogJadwal with this data.
     */
    create: XOR<LogJadwalCreateInput, LogJadwalUncheckedCreateInput>
    /**
     * In case the LogJadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogJadwalUpdateInput, LogJadwalUncheckedUpdateInput>
  }

  /**
   * LogJadwal delete
   */
  export type LogJadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
    /**
     * Filter which LogJadwal to delete.
     */
    where: LogJadwalWhereUniqueInput
  }

  /**
   * LogJadwal deleteMany
   */
  export type LogJadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogJadwals to delete
     */
    where?: LogJadwalWhereInput
    /**
     * Limit how many LogJadwals to delete.
     */
    limit?: number
  }

  /**
   * LogJadwal without action
   */
  export type LogJadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogJadwal
     */
    select?: LogJadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogJadwal
     */
    omit?: LogJadwalOmit<ExtArgs> | null
  }


  /**
   * Model Mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaMinAggregateOutputType = {
    nim: string | null
    nama: string | null
    email: string | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    nim: string | null
    nama: string | null
    email: string | null
  }

  export type MahasiswaCountAggregateOutputType = {
    nim: number
    nama: number
    email: number
    _all: number
  }


  export type MahasiswaMinAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
  }

  export type MahasiswaCountAggregateInputType = {
    nim?: true
    nama?: true
    email?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswa to aggregate.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type MahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithAggregationInput | MahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: MahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    nim: string
    nama: string
    email: string
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends MahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
    Bimbingan?: boolean | Mahasiswa$BimbinganArgs<ExtArgs>
    DailyReport?: boolean | Mahasiswa$DailyReportArgs<ExtArgs>
    Dokumen?: boolean | Mahasiswa$DokumenArgs<ExtArgs>
    Jadwal?: boolean | Mahasiswa$JadwalArgs<ExtArgs>
    NilaiInstansi?: boolean | Mahasiswa$NilaiInstansiArgs<ExtArgs>
    PendaftaranKP?: boolean | Mahasiswa$PendaftaranKPArgs<ExtArgs>
    Nilai?: boolean | Mahasiswa$NilaiArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    nama?: boolean
    email?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectScalar = {
    nim?: boolean
    nama?: boolean
    email?: boolean
  }

  export type MahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nim" | "nama" | "email", ExtArgs["result"]["mahasiswa"]>
  export type MahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bimbingan?: boolean | Mahasiswa$BimbinganArgs<ExtArgs>
    DailyReport?: boolean | Mahasiswa$DailyReportArgs<ExtArgs>
    Dokumen?: boolean | Mahasiswa$DokumenArgs<ExtArgs>
    Jadwal?: boolean | Mahasiswa$JadwalArgs<ExtArgs>
    NilaiInstansi?: boolean | Mahasiswa$NilaiInstansiArgs<ExtArgs>
    PendaftaranKP?: boolean | Mahasiswa$PendaftaranKPArgs<ExtArgs>
    Nilai?: boolean | Mahasiswa$NilaiArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MahasiswaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MahasiswaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mahasiswa"
    objects: {
      Bimbingan: Prisma.$BimbinganPayload<ExtArgs>[]
      DailyReport: Prisma.$DailyReportPayload<ExtArgs>[]
      Dokumen: Prisma.$DokumenPayload<ExtArgs>[]
      Jadwal: Prisma.$JadwalPayload<ExtArgs>[]
      NilaiInstansi: Prisma.$NilaiInstansiPayload<ExtArgs> | null
      PendaftaranKP: Prisma.$PendaftaranKPPayload<ExtArgs>[]
      Nilai: Prisma.$NilaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nim: string
      nama: string
      email: string
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type MahasiswaGetPayload<S extends boolean | null | undefined | MahasiswaDefaultArgs> = $Result.GetResult<Prisma.$MahasiswaPayload, S>

  type MahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface MahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mahasiswa'], meta: { name: 'Mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {MahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MahasiswaFindUniqueArgs>(args: SelectSubset<T, MahasiswaFindUniqueArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, MahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MahasiswaFindFirstArgs>(args?: SelectSubset<T, MahasiswaFindFirstArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, MahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.findMany({ select: { nim: true } })
     * 
     */
    findMany<T extends MahasiswaFindManyArgs>(args?: SelectSubset<T, MahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {MahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends MahasiswaCreateArgs>(args: SelectSubset<T, MahasiswaCreateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {MahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MahasiswaCreateManyArgs>(args?: SelectSubset<T, MahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mahasiswas and returns the data saved in the database.
     * @param {MahasiswaCreateManyAndReturnArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mahasiswas and only return the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.createManyAndReturn({
     *   select: { nim: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MahasiswaCreateManyAndReturnArgs>(args?: SelectSubset<T, MahasiswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mahasiswa.
     * @param {MahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends MahasiswaDeleteArgs>(args: SelectSubset<T, MahasiswaDeleteArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {MahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MahasiswaUpdateArgs>(args: SelectSubset<T, MahasiswaUpdateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {MahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MahasiswaDeleteManyArgs>(args?: SelectSubset<T, MahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MahasiswaUpdateManyArgs>(args: SelectSubset<T, MahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas and returns the data updated in the database.
     * @param {MahasiswaUpdateManyAndReturnArgs} args - Arguments to update many Mahasiswas.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mahasiswas and only return the `nim`
     * const mahasiswaWithNimOnly = await prisma.mahasiswa.updateManyAndReturn({
     *   select: { nim: true },
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
    updateManyAndReturn<T extends MahasiswaUpdateManyAndReturnArgs>(args: SelectSubset<T, MahasiswaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mahasiswa.
     * @param {MahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends MahasiswaUpsertArgs>(args: SelectSubset<T, MahasiswaUpsertArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaCountArgs>(
      args?: Subset<T, MahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaGroupByArgs} args - Group by arguments.
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
      T extends MahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mahasiswa model
   */
  readonly fields: MahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bimbingan<T extends Mahasiswa$BimbinganArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$BimbinganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BimbinganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DailyReport<T extends Mahasiswa$DailyReportArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$DailyReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Dokumen<T extends Mahasiswa$DokumenArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$DokumenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Jadwal<T extends Mahasiswa$JadwalArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$JadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    NilaiInstansi<T extends Mahasiswa$NilaiInstansiArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$NilaiInstansiArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PendaftaranKP<T extends Mahasiswa$PendaftaranKPArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$PendaftaranKPArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Nilai<T extends Mahasiswa$NilaiArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$NilaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mahasiswa model
   */
  interface MahasiswaFieldRefs {
    readonly nim: FieldRef<"Mahasiswa", 'String'>
    readonly nama: FieldRef<"Mahasiswa", 'String'>
    readonly email: FieldRef<"Mahasiswa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mahasiswa findUnique
   */
  export type MahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findUniqueOrThrow
   */
  export type MahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findFirst
   */
  export type MahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findFirstOrThrow
   */
  export type MahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findMany
   */
  export type MahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswas to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa create
   */
  export type MahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mahasiswa.
     */
    data: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
  }

  /**
   * Mahasiswa createMany
   */
  export type MahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa createManyAndReturn
   */
  export type MahasiswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa update
   */
  export type MahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mahasiswa.
     */
    data: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Mahasiswa to update.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa updateMany
   */
  export type MahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa updateManyAndReturn
   */
  export type MahasiswaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa upsert
   */
  export type MahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mahasiswa to update in case it exists.
     */
    where: MahasiswaWhereUniqueInput
    /**
     * In case the Mahasiswa found by the `where` argument doesn't exist, create a new Mahasiswa with this data.
     */
    create: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
    /**
     * In case the Mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
  }

  /**
   * Mahasiswa delete
   */
  export type MahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter which Mahasiswa to delete.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa deleteMany
   */
  export type MahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswas to delete
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * Mahasiswa.Bimbingan
   */
  export type Mahasiswa$BimbinganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bimbingan
     */
    select?: BimbinganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bimbingan
     */
    omit?: BimbinganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BimbinganInclude<ExtArgs> | null
    where?: BimbinganWhereInput
    orderBy?: BimbinganOrderByWithRelationInput | BimbinganOrderByWithRelationInput[]
    cursor?: BimbinganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BimbinganScalarFieldEnum | BimbinganScalarFieldEnum[]
  }

  /**
   * Mahasiswa.DailyReport
   */
  export type Mahasiswa$DailyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyReport
     */
    omit?: DailyReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    cursor?: DailyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * Mahasiswa.Dokumen
   */
  export type Mahasiswa$DokumenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokumen
     */
    select?: DokumenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokumen
     */
    omit?: DokumenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumenInclude<ExtArgs> | null
    where?: DokumenWhereInput
    orderBy?: DokumenOrderByWithRelationInput | DokumenOrderByWithRelationInput[]
    cursor?: DokumenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DokumenScalarFieldEnum | DokumenScalarFieldEnum[]
  }

  /**
   * Mahasiswa.Jadwal
   */
  export type Mahasiswa$JadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    cursor?: JadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Mahasiswa.NilaiInstansi
   */
  export type Mahasiswa$NilaiInstansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    where?: NilaiInstansiWhereInput
  }

  /**
   * Mahasiswa.PendaftaranKP
   */
  export type Mahasiswa$PendaftaranKPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    where?: PendaftaranKPWhereInput
    orderBy?: PendaftaranKPOrderByWithRelationInput | PendaftaranKPOrderByWithRelationInput[]
    cursor?: PendaftaranKPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendaftaranKPScalarFieldEnum | PendaftaranKPScalarFieldEnum[]
  }

  /**
   * Mahasiswa.Nilai
   */
  export type Mahasiswa$NilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    where?: NilaiWhereInput
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    cursor?: NilaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Mahasiswa without action
   */
  export type MahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model Nilai
   */

  export type AggregateNilai = {
    _count: NilaiCountAggregateOutputType | null
    _avg: NilaiAvgAggregateOutputType | null
    _sum: NilaiSumAggregateOutputType | null
    _min: NilaiMinAggregateOutputType | null
    _max: NilaiMaxAggregateOutputType | null
  }

  export type NilaiAvgAggregateOutputType = {
    nilai_pembimbing: number | null
    nilai_penguji: number | null
  }

  export type NilaiSumAggregateOutputType = {
    nilai_pembimbing: number | null
    nilai_penguji: number | null
  }

  export type NilaiMinAggregateOutputType = {
    id: string | null
    nim: string | null
    jadwal_seminar_id: string | null
    nip_penguji: string | null
    nip_pembimbing: string | null
    nilai_pembimbing: number | null
    nilai_penguji: number | null
    note_pembimbing: string | null
    note_penguji: string | null
  }

  export type NilaiMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    jadwal_seminar_id: string | null
    nip_penguji: string | null
    nip_pembimbing: string | null
    nilai_pembimbing: number | null
    nilai_penguji: number | null
    note_pembimbing: string | null
    note_penguji: string | null
  }

  export type NilaiCountAggregateOutputType = {
    id: number
    nim: number
    jadwal_seminar_id: number
    nip_penguji: number
    nip_pembimbing: number
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing: number
    note_penguji: number
    _all: number
  }


  export type NilaiAvgAggregateInputType = {
    nilai_pembimbing?: true
    nilai_penguji?: true
  }

  export type NilaiSumAggregateInputType = {
    nilai_pembimbing?: true
    nilai_penguji?: true
  }

  export type NilaiMinAggregateInputType = {
    id?: true
    nim?: true
    jadwal_seminar_id?: true
    nip_penguji?: true
    nip_pembimbing?: true
    nilai_pembimbing?: true
    nilai_penguji?: true
    note_pembimbing?: true
    note_penguji?: true
  }

  export type NilaiMaxAggregateInputType = {
    id?: true
    nim?: true
    jadwal_seminar_id?: true
    nip_penguji?: true
    nip_pembimbing?: true
    nilai_pembimbing?: true
    nilai_penguji?: true
    note_pembimbing?: true
    note_penguji?: true
  }

  export type NilaiCountAggregateInputType = {
    id?: true
    nim?: true
    jadwal_seminar_id?: true
    nip_penguji?: true
    nip_pembimbing?: true
    nilai_pembimbing?: true
    nilai_penguji?: true
    note_pembimbing?: true
    note_penguji?: true
    _all?: true
  }

  export type NilaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nilai to aggregate.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nilais
    **/
    _count?: true | NilaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NilaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NilaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NilaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NilaiMaxAggregateInputType
  }

  export type GetNilaiAggregateType<T extends NilaiAggregateArgs> = {
        [P in keyof T & keyof AggregateNilai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNilai[P]>
      : GetScalarType<T[P], AggregateNilai[P]>
  }




  export type NilaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiWhereInput
    orderBy?: NilaiOrderByWithAggregationInput | NilaiOrderByWithAggregationInput[]
    by: NilaiScalarFieldEnum[] | NilaiScalarFieldEnum
    having?: NilaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NilaiCountAggregateInputType | true
    _avg?: NilaiAvgAggregateInputType
    _sum?: NilaiSumAggregateInputType
    _min?: NilaiMinAggregateInputType
    _max?: NilaiMaxAggregateInputType
  }

  export type NilaiGroupByOutputType = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing: string | null
    note_penguji: string | null
    _count: NilaiCountAggregateOutputType | null
    _avg: NilaiAvgAggregateOutputType | null
    _sum: NilaiSumAggregateOutputType | null
    _min: NilaiMinAggregateOutputType | null
    _max: NilaiMaxAggregateOutputType | null
  }

  type GetNilaiGroupByPayload<T extends NilaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NilaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NilaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NilaiGroupByOutputType[P]>
            : GetScalarType<T[P], NilaiGroupByOutputType[P]>
        }
      >
    >


  export type NilaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jadwal_seminar_id?: boolean
    nip_penguji?: boolean
    nip_pembimbing?: boolean
    nilai_pembimbing?: boolean
    nilai_penguji?: boolean
    note_pembimbing?: boolean
    note_penguji?: boolean
    Jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
    DosenPenguji?: boolean | Nilai$DosenPengujiArgs<ExtArgs>
    DosenPembimbing?: boolean | Nilai$DosenPembimbingArgs<ExtArgs>
    Mahasiswa?: boolean | Nilai$MahasiswaArgs<ExtArgs>
    _count?: boolean | NilaiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jadwal_seminar_id?: boolean
    nip_penguji?: boolean
    nip_pembimbing?: boolean
    nilai_pembimbing?: boolean
    nilai_penguji?: boolean
    note_pembimbing?: boolean
    note_penguji?: boolean
    Jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
    DosenPenguji?: boolean | Nilai$DosenPengujiArgs<ExtArgs>
    DosenPembimbing?: boolean | Nilai$DosenPembimbingArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    jadwal_seminar_id?: boolean
    nip_penguji?: boolean
    nip_pembimbing?: boolean
    nilai_pembimbing?: boolean
    nilai_penguji?: boolean
    note_pembimbing?: boolean
    note_penguji?: boolean
    Jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
    DosenPenguji?: boolean | Nilai$DosenPengujiArgs<ExtArgs>
    DosenPembimbing?: boolean | Nilai$DosenPembimbingArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectScalar = {
    id?: boolean
    nim?: boolean
    jadwal_seminar_id?: boolean
    nip_penguji?: boolean
    nip_pembimbing?: boolean
    nilai_pembimbing?: boolean
    nilai_penguji?: boolean
    note_pembimbing?: boolean
    note_penguji?: boolean
  }

  export type NilaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "jadwal_seminar_id" | "nip_penguji" | "nip_pembimbing" | "nilai_pembimbing" | "nilai_penguji" | "note_pembimbing" | "note_penguji", ExtArgs["result"]["nilai"]>
  export type NilaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
    DosenPenguji?: boolean | Nilai$DosenPengujiArgs<ExtArgs>
    DosenPembimbing?: boolean | Nilai$DosenPembimbingArgs<ExtArgs>
    Mahasiswa?: boolean | Nilai$MahasiswaArgs<ExtArgs>
    _count?: boolean | NilaiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NilaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
    DosenPenguji?: boolean | Nilai$DosenPengujiArgs<ExtArgs>
    DosenPembimbing?: boolean | Nilai$DosenPembimbingArgs<ExtArgs>
  }
  export type NilaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
    DosenPenguji?: boolean | Nilai$DosenPengujiArgs<ExtArgs>
    DosenPembimbing?: boolean | Nilai$DosenPembimbingArgs<ExtArgs>
  }

  export type $NilaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nilai"
    objects: {
      Jadwal: Prisma.$JadwalPayload<ExtArgs>
      DosenPenguji: Prisma.$DosenPayload<ExtArgs> | null
      DosenPembimbing: Prisma.$DosenPayload<ExtArgs> | null
      Mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      jadwal_seminar_id: string
      nip_penguji: string
      nip_pembimbing: string
      nilai_pembimbing: number
      nilai_penguji: number
      note_pembimbing: string | null
      note_penguji: string | null
    }, ExtArgs["result"]["nilai"]>
    composites: {}
  }

  type NilaiGetPayload<S extends boolean | null | undefined | NilaiDefaultArgs> = $Result.GetResult<Prisma.$NilaiPayload, S>

  type NilaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NilaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NilaiCountAggregateInputType | true
    }

  export interface NilaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nilai'], meta: { name: 'Nilai' } }
    /**
     * Find zero or one Nilai that matches the filter.
     * @param {NilaiFindUniqueArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NilaiFindUniqueArgs>(args: SelectSubset<T, NilaiFindUniqueArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nilai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NilaiFindUniqueOrThrowArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NilaiFindUniqueOrThrowArgs>(args: SelectSubset<T, NilaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindFirstArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NilaiFindFirstArgs>(args?: SelectSubset<T, NilaiFindFirstArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindFirstOrThrowArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NilaiFindFirstOrThrowArgs>(args?: SelectSubset<T, NilaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nilais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nilais
     * const nilais = await prisma.nilai.findMany()
     * 
     * // Get first 10 Nilais
     * const nilais = await prisma.nilai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nilaiWithIdOnly = await prisma.nilai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NilaiFindManyArgs>(args?: SelectSubset<T, NilaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nilai.
     * @param {NilaiCreateArgs} args - Arguments to create a Nilai.
     * @example
     * // Create one Nilai
     * const Nilai = await prisma.nilai.create({
     *   data: {
     *     // ... data to create a Nilai
     *   }
     * })
     * 
     */
    create<T extends NilaiCreateArgs>(args: SelectSubset<T, NilaiCreateArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nilais.
     * @param {NilaiCreateManyArgs} args - Arguments to create many Nilais.
     * @example
     * // Create many Nilais
     * const nilai = await prisma.nilai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NilaiCreateManyArgs>(args?: SelectSubset<T, NilaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nilais and returns the data saved in the database.
     * @param {NilaiCreateManyAndReturnArgs} args - Arguments to create many Nilais.
     * @example
     * // Create many Nilais
     * const nilai = await prisma.nilai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nilais and only return the `id`
     * const nilaiWithIdOnly = await prisma.nilai.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NilaiCreateManyAndReturnArgs>(args?: SelectSubset<T, NilaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nilai.
     * @param {NilaiDeleteArgs} args - Arguments to delete one Nilai.
     * @example
     * // Delete one Nilai
     * const Nilai = await prisma.nilai.delete({
     *   where: {
     *     // ... filter to delete one Nilai
     *   }
     * })
     * 
     */
    delete<T extends NilaiDeleteArgs>(args: SelectSubset<T, NilaiDeleteArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nilai.
     * @param {NilaiUpdateArgs} args - Arguments to update one Nilai.
     * @example
     * // Update one Nilai
     * const nilai = await prisma.nilai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NilaiUpdateArgs>(args: SelectSubset<T, NilaiUpdateArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nilais.
     * @param {NilaiDeleteManyArgs} args - Arguments to filter Nilais to delete.
     * @example
     * // Delete a few Nilais
     * const { count } = await prisma.nilai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NilaiDeleteManyArgs>(args?: SelectSubset<T, NilaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nilais
     * const nilai = await prisma.nilai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NilaiUpdateManyArgs>(args: SelectSubset<T, NilaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilais and returns the data updated in the database.
     * @param {NilaiUpdateManyAndReturnArgs} args - Arguments to update many Nilais.
     * @example
     * // Update many Nilais
     * const nilai = await prisma.nilai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nilais and only return the `id`
     * const nilaiWithIdOnly = await prisma.nilai.updateManyAndReturn({
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
    updateManyAndReturn<T extends NilaiUpdateManyAndReturnArgs>(args: SelectSubset<T, NilaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nilai.
     * @param {NilaiUpsertArgs} args - Arguments to update or create a Nilai.
     * @example
     * // Update or create a Nilai
     * const nilai = await prisma.nilai.upsert({
     *   create: {
     *     // ... data to create a Nilai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nilai we want to update
     *   }
     * })
     */
    upsert<T extends NilaiUpsertArgs>(args: SelectSubset<T, NilaiUpsertArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nilais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiCountArgs} args - Arguments to filter Nilais to count.
     * @example
     * // Count the number of Nilais
     * const count = await prisma.nilai.count({
     *   where: {
     *     // ... the filter for the Nilais we want to count
     *   }
     * })
    **/
    count<T extends NilaiCountArgs>(
      args?: Subset<T, NilaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NilaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nilai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NilaiAggregateArgs>(args: Subset<T, NilaiAggregateArgs>): Prisma.PrismaPromise<GetNilaiAggregateType<T>>

    /**
     * Group by Nilai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiGroupByArgs} args - Group by arguments.
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
      T extends NilaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NilaiGroupByArgs['orderBy'] }
        : { orderBy?: NilaiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NilaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNilaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nilai model
   */
  readonly fields: NilaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nilai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NilaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Jadwal<T extends JadwalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JadwalDefaultArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DosenPenguji<T extends Nilai$DosenPengujiArgs<ExtArgs> = {}>(args?: Subset<T, Nilai$DosenPengujiArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    DosenPembimbing<T extends Nilai$DosenPembimbingArgs<ExtArgs> = {}>(args?: Subset<T, Nilai$DosenPembimbingArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Mahasiswa<T extends Nilai$MahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, Nilai$MahasiswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Nilai model
   */
  interface NilaiFieldRefs {
    readonly id: FieldRef<"Nilai", 'String'>
    readonly nim: FieldRef<"Nilai", 'String'>
    readonly jadwal_seminar_id: FieldRef<"Nilai", 'String'>
    readonly nip_penguji: FieldRef<"Nilai", 'String'>
    readonly nip_pembimbing: FieldRef<"Nilai", 'String'>
    readonly nilai_pembimbing: FieldRef<"Nilai", 'Float'>
    readonly nilai_penguji: FieldRef<"Nilai", 'Float'>
    readonly note_pembimbing: FieldRef<"Nilai", 'String'>
    readonly note_penguji: FieldRef<"Nilai", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Nilai findUnique
   */
  export type NilaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai findUniqueOrThrow
   */
  export type NilaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai findFirst
   */
  export type NilaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nilais.
     */
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai findFirstOrThrow
   */
  export type NilaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nilais.
     */
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai findMany
   */
  export type NilaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilais to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai create
   */
  export type NilaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The data needed to create a Nilai.
     */
    data: XOR<NilaiCreateInput, NilaiUncheckedCreateInput>
  }

  /**
   * Nilai createMany
   */
  export type NilaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nilais.
     */
    data: NilaiCreateManyInput | NilaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nilai createManyAndReturn
   */
  export type NilaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * The data used to create many Nilais.
     */
    data: NilaiCreateManyInput | NilaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nilai update
   */
  export type NilaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The data needed to update a Nilai.
     */
    data: XOR<NilaiUpdateInput, NilaiUncheckedUpdateInput>
    /**
     * Choose, which Nilai to update.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai updateMany
   */
  export type NilaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nilais.
     */
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyInput>
    /**
     * Filter which Nilais to update
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to update.
     */
    limit?: number
  }

  /**
   * Nilai updateManyAndReturn
   */
  export type NilaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * The data used to update Nilais.
     */
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyInput>
    /**
     * Filter which Nilais to update
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nilai upsert
   */
  export type NilaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The filter to search for the Nilai to update in case it exists.
     */
    where: NilaiWhereUniqueInput
    /**
     * In case the Nilai found by the `where` argument doesn't exist, create a new Nilai with this data.
     */
    create: XOR<NilaiCreateInput, NilaiUncheckedCreateInput>
    /**
     * In case the Nilai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NilaiUpdateInput, NilaiUncheckedUpdateInput>
  }

  /**
   * Nilai delete
   */
  export type NilaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter which Nilai to delete.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai deleteMany
   */
  export type NilaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nilais to delete
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to delete.
     */
    limit?: number
  }

  /**
   * Nilai.DosenPenguji
   */
  export type Nilai$DosenPengujiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    where?: DosenWhereInput
  }

  /**
   * Nilai.DosenPembimbing
   */
  export type Nilai$DosenPembimbingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    where?: DosenWhereInput
  }

  /**
   * Nilai.Mahasiswa
   */
  export type Nilai$MahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    cursor?: MahasiswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Nilai without action
   */
  export type NilaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
  }


  /**
   * Model NilaiInstansi
   */

  export type AggregateNilaiInstansi = {
    _count: NilaiInstansiCountAggregateOutputType | null
    _avg: NilaiInstansiAvgAggregateOutputType | null
    _sum: NilaiInstansiSumAggregateOutputType | null
    _min: NilaiInstansiMinAggregateOutputType | null
    _max: NilaiInstansiMaxAggregateOutputType | null
  }

  export type NilaiInstansiAvgAggregateOutputType = {
    nilai_angka: number | null
  }

  export type NilaiInstansiSumAggregateOutputType = {
    nilai_angka: number | null
  }

  export type NilaiInstansiMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    nilai_angka: number | null
    nilai_huruf: string | null
    nim: string | null
    id_pembimbing_instansi: string | null
  }

  export type NilaiInstansiMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    nilai_angka: number | null
    nilai_huruf: string | null
    nim: string | null
    id_pembimbing_instansi: string | null
  }

  export type NilaiInstansiCountAggregateOutputType = {
    id: number
    tanggal: number
    nilai_angka: number
    nilai_huruf: number
    nim: number
    id_pembimbing_instansi: number
    _all: number
  }


  export type NilaiInstansiAvgAggregateInputType = {
    nilai_angka?: true
  }

  export type NilaiInstansiSumAggregateInputType = {
    nilai_angka?: true
  }

  export type NilaiInstansiMinAggregateInputType = {
    id?: true
    tanggal?: true
    nilai_angka?: true
    nilai_huruf?: true
    nim?: true
    id_pembimbing_instansi?: true
  }

  export type NilaiInstansiMaxAggregateInputType = {
    id?: true
    tanggal?: true
    nilai_angka?: true
    nilai_huruf?: true
    nim?: true
    id_pembimbing_instansi?: true
  }

  export type NilaiInstansiCountAggregateInputType = {
    id?: true
    tanggal?: true
    nilai_angka?: true
    nilai_huruf?: true
    nim?: true
    id_pembimbing_instansi?: true
    _all?: true
  }

  export type NilaiInstansiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NilaiInstansi to aggregate.
     */
    where?: NilaiInstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NilaiInstansis to fetch.
     */
    orderBy?: NilaiInstansiOrderByWithRelationInput | NilaiInstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NilaiInstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NilaiInstansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NilaiInstansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NilaiInstansis
    **/
    _count?: true | NilaiInstansiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NilaiInstansiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NilaiInstansiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NilaiInstansiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NilaiInstansiMaxAggregateInputType
  }

  export type GetNilaiInstansiAggregateType<T extends NilaiInstansiAggregateArgs> = {
        [P in keyof T & keyof AggregateNilaiInstansi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNilaiInstansi[P]>
      : GetScalarType<T[P], AggregateNilaiInstansi[P]>
  }




  export type NilaiInstansiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiInstansiWhereInput
    orderBy?: NilaiInstansiOrderByWithAggregationInput | NilaiInstansiOrderByWithAggregationInput[]
    by: NilaiInstansiScalarFieldEnum[] | NilaiInstansiScalarFieldEnum
    having?: NilaiInstansiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NilaiInstansiCountAggregateInputType | true
    _avg?: NilaiInstansiAvgAggregateInputType
    _sum?: NilaiInstansiSumAggregateInputType
    _min?: NilaiInstansiMinAggregateInputType
    _max?: NilaiInstansiMaxAggregateInputType
  }

  export type NilaiInstansiGroupByOutputType = {
    id: string
    tanggal: Date
    nilai_angka: number
    nilai_huruf: string
    nim: string
    id_pembimbing_instansi: string
    _count: NilaiInstansiCountAggregateOutputType | null
    _avg: NilaiInstansiAvgAggregateOutputType | null
    _sum: NilaiInstansiSumAggregateOutputType | null
    _min: NilaiInstansiMinAggregateOutputType | null
    _max: NilaiInstansiMaxAggregateOutputType | null
  }

  type GetNilaiInstansiGroupByPayload<T extends NilaiInstansiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NilaiInstansiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NilaiInstansiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NilaiInstansiGroupByOutputType[P]>
            : GetScalarType<T[P], NilaiInstansiGroupByOutputType[P]>
        }
      >
    >


  export type NilaiInstansiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    nilai_angka?: boolean
    nilai_huruf?: boolean
    nim?: boolean
    id_pembimbing_instansi?: boolean
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilaiInstansi"]>

  export type NilaiInstansiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    nilai_angka?: boolean
    nilai_huruf?: boolean
    nim?: boolean
    id_pembimbing_instansi?: boolean
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilaiInstansi"]>

  export type NilaiInstansiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    nilai_angka?: boolean
    nilai_huruf?: boolean
    nim?: boolean
    id_pembimbing_instansi?: boolean
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilaiInstansi"]>

  export type NilaiInstansiSelectScalar = {
    id?: boolean
    tanggal?: boolean
    nilai_angka?: boolean
    nilai_huruf?: boolean
    nim?: boolean
    id_pembimbing_instansi?: boolean
  }

  export type NilaiInstansiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "nilai_angka" | "nilai_huruf" | "nim" | "id_pembimbing_instansi", ExtArgs["result"]["nilaiInstansi"]>
  export type NilaiInstansiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }
  export type NilaiInstansiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }
  export type NilaiInstansiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }

  export type $NilaiInstansiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NilaiInstansi"
    objects: {
      PembimbingInstansi: Prisma.$PembimbingInstansiPayload<ExtArgs>
      Mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      nilai_angka: number
      nilai_huruf: string
      nim: string
      id_pembimbing_instansi: string
    }, ExtArgs["result"]["nilaiInstansi"]>
    composites: {}
  }

  type NilaiInstansiGetPayload<S extends boolean | null | undefined | NilaiInstansiDefaultArgs> = $Result.GetResult<Prisma.$NilaiInstansiPayload, S>

  type NilaiInstansiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NilaiInstansiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NilaiInstansiCountAggregateInputType | true
    }

  export interface NilaiInstansiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NilaiInstansi'], meta: { name: 'NilaiInstansi' } }
    /**
     * Find zero or one NilaiInstansi that matches the filter.
     * @param {NilaiInstansiFindUniqueArgs} args - Arguments to find a NilaiInstansi
     * @example
     * // Get one NilaiInstansi
     * const nilaiInstansi = await prisma.nilaiInstansi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NilaiInstansiFindUniqueArgs>(args: SelectSubset<T, NilaiInstansiFindUniqueArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NilaiInstansi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NilaiInstansiFindUniqueOrThrowArgs} args - Arguments to find a NilaiInstansi
     * @example
     * // Get one NilaiInstansi
     * const nilaiInstansi = await prisma.nilaiInstansi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NilaiInstansiFindUniqueOrThrowArgs>(args: SelectSubset<T, NilaiInstansiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NilaiInstansi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiInstansiFindFirstArgs} args - Arguments to find a NilaiInstansi
     * @example
     * // Get one NilaiInstansi
     * const nilaiInstansi = await prisma.nilaiInstansi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NilaiInstansiFindFirstArgs>(args?: SelectSubset<T, NilaiInstansiFindFirstArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NilaiInstansi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiInstansiFindFirstOrThrowArgs} args - Arguments to find a NilaiInstansi
     * @example
     * // Get one NilaiInstansi
     * const nilaiInstansi = await prisma.nilaiInstansi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NilaiInstansiFindFirstOrThrowArgs>(args?: SelectSubset<T, NilaiInstansiFindFirstOrThrowArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NilaiInstansis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiInstansiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NilaiInstansis
     * const nilaiInstansis = await prisma.nilaiInstansi.findMany()
     * 
     * // Get first 10 NilaiInstansis
     * const nilaiInstansis = await prisma.nilaiInstansi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nilaiInstansiWithIdOnly = await prisma.nilaiInstansi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NilaiInstansiFindManyArgs>(args?: SelectSubset<T, NilaiInstansiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NilaiInstansi.
     * @param {NilaiInstansiCreateArgs} args - Arguments to create a NilaiInstansi.
     * @example
     * // Create one NilaiInstansi
     * const NilaiInstansi = await prisma.nilaiInstansi.create({
     *   data: {
     *     // ... data to create a NilaiInstansi
     *   }
     * })
     * 
     */
    create<T extends NilaiInstansiCreateArgs>(args: SelectSubset<T, NilaiInstansiCreateArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NilaiInstansis.
     * @param {NilaiInstansiCreateManyArgs} args - Arguments to create many NilaiInstansis.
     * @example
     * // Create many NilaiInstansis
     * const nilaiInstansi = await prisma.nilaiInstansi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NilaiInstansiCreateManyArgs>(args?: SelectSubset<T, NilaiInstansiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NilaiInstansis and returns the data saved in the database.
     * @param {NilaiInstansiCreateManyAndReturnArgs} args - Arguments to create many NilaiInstansis.
     * @example
     * // Create many NilaiInstansis
     * const nilaiInstansi = await prisma.nilaiInstansi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NilaiInstansis and only return the `id`
     * const nilaiInstansiWithIdOnly = await prisma.nilaiInstansi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NilaiInstansiCreateManyAndReturnArgs>(args?: SelectSubset<T, NilaiInstansiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NilaiInstansi.
     * @param {NilaiInstansiDeleteArgs} args - Arguments to delete one NilaiInstansi.
     * @example
     * // Delete one NilaiInstansi
     * const NilaiInstansi = await prisma.nilaiInstansi.delete({
     *   where: {
     *     // ... filter to delete one NilaiInstansi
     *   }
     * })
     * 
     */
    delete<T extends NilaiInstansiDeleteArgs>(args: SelectSubset<T, NilaiInstansiDeleteArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NilaiInstansi.
     * @param {NilaiInstansiUpdateArgs} args - Arguments to update one NilaiInstansi.
     * @example
     * // Update one NilaiInstansi
     * const nilaiInstansi = await prisma.nilaiInstansi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NilaiInstansiUpdateArgs>(args: SelectSubset<T, NilaiInstansiUpdateArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NilaiInstansis.
     * @param {NilaiInstansiDeleteManyArgs} args - Arguments to filter NilaiInstansis to delete.
     * @example
     * // Delete a few NilaiInstansis
     * const { count } = await prisma.nilaiInstansi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NilaiInstansiDeleteManyArgs>(args?: SelectSubset<T, NilaiInstansiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NilaiInstansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiInstansiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NilaiInstansis
     * const nilaiInstansi = await prisma.nilaiInstansi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NilaiInstansiUpdateManyArgs>(args: SelectSubset<T, NilaiInstansiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NilaiInstansis and returns the data updated in the database.
     * @param {NilaiInstansiUpdateManyAndReturnArgs} args - Arguments to update many NilaiInstansis.
     * @example
     * // Update many NilaiInstansis
     * const nilaiInstansi = await prisma.nilaiInstansi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NilaiInstansis and only return the `id`
     * const nilaiInstansiWithIdOnly = await prisma.nilaiInstansi.updateManyAndReturn({
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
    updateManyAndReturn<T extends NilaiInstansiUpdateManyAndReturnArgs>(args: SelectSubset<T, NilaiInstansiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NilaiInstansi.
     * @param {NilaiInstansiUpsertArgs} args - Arguments to update or create a NilaiInstansi.
     * @example
     * // Update or create a NilaiInstansi
     * const nilaiInstansi = await prisma.nilaiInstansi.upsert({
     *   create: {
     *     // ... data to create a NilaiInstansi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NilaiInstansi we want to update
     *   }
     * })
     */
    upsert<T extends NilaiInstansiUpsertArgs>(args: SelectSubset<T, NilaiInstansiUpsertArgs<ExtArgs>>): Prisma__NilaiInstansiClient<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NilaiInstansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiInstansiCountArgs} args - Arguments to filter NilaiInstansis to count.
     * @example
     * // Count the number of NilaiInstansis
     * const count = await prisma.nilaiInstansi.count({
     *   where: {
     *     // ... the filter for the NilaiInstansis we want to count
     *   }
     * })
    **/
    count<T extends NilaiInstansiCountArgs>(
      args?: Subset<T, NilaiInstansiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NilaiInstansiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NilaiInstansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiInstansiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NilaiInstansiAggregateArgs>(args: Subset<T, NilaiInstansiAggregateArgs>): Prisma.PrismaPromise<GetNilaiInstansiAggregateType<T>>

    /**
     * Group by NilaiInstansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiInstansiGroupByArgs} args - Group by arguments.
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
      T extends NilaiInstansiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NilaiInstansiGroupByArgs['orderBy'] }
        : { orderBy?: NilaiInstansiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NilaiInstansiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNilaiInstansiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NilaiInstansi model
   */
  readonly fields: NilaiInstansiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NilaiInstansi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NilaiInstansiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PembimbingInstansi<T extends PembimbingInstansiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PembimbingInstansiDefaultArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NilaiInstansi model
   */
  interface NilaiInstansiFieldRefs {
    readonly id: FieldRef<"NilaiInstansi", 'String'>
    readonly tanggal: FieldRef<"NilaiInstansi", 'DateTime'>
    readonly nilai_angka: FieldRef<"NilaiInstansi", 'Float'>
    readonly nilai_huruf: FieldRef<"NilaiInstansi", 'String'>
    readonly nim: FieldRef<"NilaiInstansi", 'String'>
    readonly id_pembimbing_instansi: FieldRef<"NilaiInstansi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NilaiInstansi findUnique
   */
  export type NilaiInstansiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * Filter, which NilaiInstansi to fetch.
     */
    where: NilaiInstansiWhereUniqueInput
  }

  /**
   * NilaiInstansi findUniqueOrThrow
   */
  export type NilaiInstansiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * Filter, which NilaiInstansi to fetch.
     */
    where: NilaiInstansiWhereUniqueInput
  }

  /**
   * NilaiInstansi findFirst
   */
  export type NilaiInstansiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * Filter, which NilaiInstansi to fetch.
     */
    where?: NilaiInstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NilaiInstansis to fetch.
     */
    orderBy?: NilaiInstansiOrderByWithRelationInput | NilaiInstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NilaiInstansis.
     */
    cursor?: NilaiInstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NilaiInstansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NilaiInstansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NilaiInstansis.
     */
    distinct?: NilaiInstansiScalarFieldEnum | NilaiInstansiScalarFieldEnum[]
  }

  /**
   * NilaiInstansi findFirstOrThrow
   */
  export type NilaiInstansiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * Filter, which NilaiInstansi to fetch.
     */
    where?: NilaiInstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NilaiInstansis to fetch.
     */
    orderBy?: NilaiInstansiOrderByWithRelationInput | NilaiInstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NilaiInstansis.
     */
    cursor?: NilaiInstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NilaiInstansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NilaiInstansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NilaiInstansis.
     */
    distinct?: NilaiInstansiScalarFieldEnum | NilaiInstansiScalarFieldEnum[]
  }

  /**
   * NilaiInstansi findMany
   */
  export type NilaiInstansiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * Filter, which NilaiInstansis to fetch.
     */
    where?: NilaiInstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NilaiInstansis to fetch.
     */
    orderBy?: NilaiInstansiOrderByWithRelationInput | NilaiInstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NilaiInstansis.
     */
    cursor?: NilaiInstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NilaiInstansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NilaiInstansis.
     */
    skip?: number
    distinct?: NilaiInstansiScalarFieldEnum | NilaiInstansiScalarFieldEnum[]
  }

  /**
   * NilaiInstansi create
   */
  export type NilaiInstansiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * The data needed to create a NilaiInstansi.
     */
    data: XOR<NilaiInstansiCreateInput, NilaiInstansiUncheckedCreateInput>
  }

  /**
   * NilaiInstansi createMany
   */
  export type NilaiInstansiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NilaiInstansis.
     */
    data: NilaiInstansiCreateManyInput | NilaiInstansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NilaiInstansi createManyAndReturn
   */
  export type NilaiInstansiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * The data used to create many NilaiInstansis.
     */
    data: NilaiInstansiCreateManyInput | NilaiInstansiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NilaiInstansi update
   */
  export type NilaiInstansiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * The data needed to update a NilaiInstansi.
     */
    data: XOR<NilaiInstansiUpdateInput, NilaiInstansiUncheckedUpdateInput>
    /**
     * Choose, which NilaiInstansi to update.
     */
    where: NilaiInstansiWhereUniqueInput
  }

  /**
   * NilaiInstansi updateMany
   */
  export type NilaiInstansiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NilaiInstansis.
     */
    data: XOR<NilaiInstansiUpdateManyMutationInput, NilaiInstansiUncheckedUpdateManyInput>
    /**
     * Filter which NilaiInstansis to update
     */
    where?: NilaiInstansiWhereInput
    /**
     * Limit how many NilaiInstansis to update.
     */
    limit?: number
  }

  /**
   * NilaiInstansi updateManyAndReturn
   */
  export type NilaiInstansiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * The data used to update NilaiInstansis.
     */
    data: XOR<NilaiInstansiUpdateManyMutationInput, NilaiInstansiUncheckedUpdateManyInput>
    /**
     * Filter which NilaiInstansis to update
     */
    where?: NilaiInstansiWhereInput
    /**
     * Limit how many NilaiInstansis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NilaiInstansi upsert
   */
  export type NilaiInstansiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * The filter to search for the NilaiInstansi to update in case it exists.
     */
    where: NilaiInstansiWhereUniqueInput
    /**
     * In case the NilaiInstansi found by the `where` argument doesn't exist, create a new NilaiInstansi with this data.
     */
    create: XOR<NilaiInstansiCreateInput, NilaiInstansiUncheckedCreateInput>
    /**
     * In case the NilaiInstansi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NilaiInstansiUpdateInput, NilaiInstansiUncheckedUpdateInput>
  }

  /**
   * NilaiInstansi delete
   */
  export type NilaiInstansiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    /**
     * Filter which NilaiInstansi to delete.
     */
    where: NilaiInstansiWhereUniqueInput
  }

  /**
   * NilaiInstansi deleteMany
   */
  export type NilaiInstansiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NilaiInstansis to delete
     */
    where?: NilaiInstansiWhereInput
    /**
     * Limit how many NilaiInstansis to delete.
     */
    limit?: number
  }

  /**
   * NilaiInstansi without action
   */
  export type NilaiInstansiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
  }


  /**
   * Model PembimbingInstansi
   */

  export type AggregatePembimbingInstansi = {
    _count: PembimbingInstansiCountAggregateOutputType | null
    _avg: PembimbingInstansiAvgAggregateOutputType | null
    _sum: PembimbingInstansiSumAggregateOutputType | null
    _min: PembimbingInstansiMinAggregateOutputType | null
    _max: PembimbingInstansiMaxAggregateOutputType | null
  }

  export type PembimbingInstansiAvgAggregateOutputType = {
    id_instansi: number | null
  }

  export type PembimbingInstansiSumAggregateOutputType = {
    id_instansi: number | null
  }

  export type PembimbingInstansiMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    jabatan: string | null
    no_hp: string | null
    id_instansi: number | null
  }

  export type PembimbingInstansiMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    jabatan: string | null
    no_hp: string | null
    id_instansi: number | null
  }

  export type PembimbingInstansiCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    jabatan: number
    no_hp: number
    id_instansi: number
    _all: number
  }


  export type PembimbingInstansiAvgAggregateInputType = {
    id_instansi?: true
  }

  export type PembimbingInstansiSumAggregateInputType = {
    id_instansi?: true
  }

  export type PembimbingInstansiMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    jabatan?: true
    no_hp?: true
    id_instansi?: true
  }

  export type PembimbingInstansiMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    jabatan?: true
    no_hp?: true
    id_instansi?: true
  }

  export type PembimbingInstansiCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    jabatan?: true
    no_hp?: true
    id_instansi?: true
    _all?: true
  }

  export type PembimbingInstansiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PembimbingInstansi to aggregate.
     */
    where?: PembimbingInstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PembimbingInstansis to fetch.
     */
    orderBy?: PembimbingInstansiOrderByWithRelationInput | PembimbingInstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembimbingInstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PembimbingInstansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PembimbingInstansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PembimbingInstansis
    **/
    _count?: true | PembimbingInstansiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembimbingInstansiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembimbingInstansiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembimbingInstansiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembimbingInstansiMaxAggregateInputType
  }

  export type GetPembimbingInstansiAggregateType<T extends PembimbingInstansiAggregateArgs> = {
        [P in keyof T & keyof AggregatePembimbingInstansi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembimbingInstansi[P]>
      : GetScalarType<T[P], AggregatePembimbingInstansi[P]>
  }




  export type PembimbingInstansiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembimbingInstansiWhereInput
    orderBy?: PembimbingInstansiOrderByWithAggregationInput | PembimbingInstansiOrderByWithAggregationInput[]
    by: PembimbingInstansiScalarFieldEnum[] | PembimbingInstansiScalarFieldEnum
    having?: PembimbingInstansiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembimbingInstansiCountAggregateInputType | true
    _avg?: PembimbingInstansiAvgAggregateInputType
    _sum?: PembimbingInstansiSumAggregateInputType
    _min?: PembimbingInstansiMinAggregateInputType
    _max?: PembimbingInstansiMaxAggregateInputType
  }

  export type PembimbingInstansiGroupByOutputType = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
    _count: PembimbingInstansiCountAggregateOutputType | null
    _avg: PembimbingInstansiAvgAggregateOutputType | null
    _sum: PembimbingInstansiSumAggregateOutputType | null
    _min: PembimbingInstansiMinAggregateOutputType | null
    _max: PembimbingInstansiMaxAggregateOutputType | null
  }

  type GetPembimbingInstansiGroupByPayload<T extends PembimbingInstansiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembimbingInstansiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembimbingInstansiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembimbingInstansiGroupByOutputType[P]>
            : GetScalarType<T[P], PembimbingInstansiGroupByOutputType[P]>
        }
      >
    >


  export type PembimbingInstansiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    jabatan?: boolean
    no_hp?: boolean
    id_instansi?: boolean
    NilaiInstansi?: boolean | PembimbingInstansi$NilaiInstansiArgs<ExtArgs>
    Instansi?: boolean | InstansiDefaultArgs<ExtArgs>
    PendaftaranKP?: boolean | PembimbingInstansi$PendaftaranKPArgs<ExtArgs>
    _count?: boolean | PembimbingInstansiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembimbingInstansi"]>

  export type PembimbingInstansiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    jabatan?: boolean
    no_hp?: boolean
    id_instansi?: boolean
    Instansi?: boolean | InstansiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembimbingInstansi"]>

  export type PembimbingInstansiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    jabatan?: boolean
    no_hp?: boolean
    id_instansi?: boolean
    Instansi?: boolean | InstansiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembimbingInstansi"]>

  export type PembimbingInstansiSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    jabatan?: boolean
    no_hp?: boolean
    id_instansi?: boolean
  }

  export type PembimbingInstansiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "jabatan" | "no_hp" | "id_instansi", ExtArgs["result"]["pembimbingInstansi"]>
  export type PembimbingInstansiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NilaiInstansi?: boolean | PembimbingInstansi$NilaiInstansiArgs<ExtArgs>
    Instansi?: boolean | InstansiDefaultArgs<ExtArgs>
    PendaftaranKP?: boolean | PembimbingInstansi$PendaftaranKPArgs<ExtArgs>
    _count?: boolean | PembimbingInstansiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PembimbingInstansiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Instansi?: boolean | InstansiDefaultArgs<ExtArgs>
  }
  export type PembimbingInstansiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Instansi?: boolean | InstansiDefaultArgs<ExtArgs>
  }

  export type $PembimbingInstansiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PembimbingInstansi"
    objects: {
      NilaiInstansi: Prisma.$NilaiInstansiPayload<ExtArgs>[]
      Instansi: Prisma.$InstansiPayload<ExtArgs>
      PendaftaranKP: Prisma.$PendaftaranKPPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      jabatan: string
      no_hp: string
      id_instansi: number
    }, ExtArgs["result"]["pembimbingInstansi"]>
    composites: {}
  }

  type PembimbingInstansiGetPayload<S extends boolean | null | undefined | PembimbingInstansiDefaultArgs> = $Result.GetResult<Prisma.$PembimbingInstansiPayload, S>

  type PembimbingInstansiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembimbingInstansiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembimbingInstansiCountAggregateInputType | true
    }

  export interface PembimbingInstansiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PembimbingInstansi'], meta: { name: 'PembimbingInstansi' } }
    /**
     * Find zero or one PembimbingInstansi that matches the filter.
     * @param {PembimbingInstansiFindUniqueArgs} args - Arguments to find a PembimbingInstansi
     * @example
     * // Get one PembimbingInstansi
     * const pembimbingInstansi = await prisma.pembimbingInstansi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembimbingInstansiFindUniqueArgs>(args: SelectSubset<T, PembimbingInstansiFindUniqueArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PembimbingInstansi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembimbingInstansiFindUniqueOrThrowArgs} args - Arguments to find a PembimbingInstansi
     * @example
     * // Get one PembimbingInstansi
     * const pembimbingInstansi = await prisma.pembimbingInstansi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembimbingInstansiFindUniqueOrThrowArgs>(args: SelectSubset<T, PembimbingInstansiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PembimbingInstansi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembimbingInstansiFindFirstArgs} args - Arguments to find a PembimbingInstansi
     * @example
     * // Get one PembimbingInstansi
     * const pembimbingInstansi = await prisma.pembimbingInstansi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembimbingInstansiFindFirstArgs>(args?: SelectSubset<T, PembimbingInstansiFindFirstArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PembimbingInstansi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembimbingInstansiFindFirstOrThrowArgs} args - Arguments to find a PembimbingInstansi
     * @example
     * // Get one PembimbingInstansi
     * const pembimbingInstansi = await prisma.pembimbingInstansi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembimbingInstansiFindFirstOrThrowArgs>(args?: SelectSubset<T, PembimbingInstansiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PembimbingInstansis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembimbingInstansiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PembimbingInstansis
     * const pembimbingInstansis = await prisma.pembimbingInstansi.findMany()
     * 
     * // Get first 10 PembimbingInstansis
     * const pembimbingInstansis = await prisma.pembimbingInstansi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembimbingInstansiWithIdOnly = await prisma.pembimbingInstansi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PembimbingInstansiFindManyArgs>(args?: SelectSubset<T, PembimbingInstansiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PembimbingInstansi.
     * @param {PembimbingInstansiCreateArgs} args - Arguments to create a PembimbingInstansi.
     * @example
     * // Create one PembimbingInstansi
     * const PembimbingInstansi = await prisma.pembimbingInstansi.create({
     *   data: {
     *     // ... data to create a PembimbingInstansi
     *   }
     * })
     * 
     */
    create<T extends PembimbingInstansiCreateArgs>(args: SelectSubset<T, PembimbingInstansiCreateArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PembimbingInstansis.
     * @param {PembimbingInstansiCreateManyArgs} args - Arguments to create many PembimbingInstansis.
     * @example
     * // Create many PembimbingInstansis
     * const pembimbingInstansi = await prisma.pembimbingInstansi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembimbingInstansiCreateManyArgs>(args?: SelectSubset<T, PembimbingInstansiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PembimbingInstansis and returns the data saved in the database.
     * @param {PembimbingInstansiCreateManyAndReturnArgs} args - Arguments to create many PembimbingInstansis.
     * @example
     * // Create many PembimbingInstansis
     * const pembimbingInstansi = await prisma.pembimbingInstansi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PembimbingInstansis and only return the `id`
     * const pembimbingInstansiWithIdOnly = await prisma.pembimbingInstansi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembimbingInstansiCreateManyAndReturnArgs>(args?: SelectSubset<T, PembimbingInstansiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PembimbingInstansi.
     * @param {PembimbingInstansiDeleteArgs} args - Arguments to delete one PembimbingInstansi.
     * @example
     * // Delete one PembimbingInstansi
     * const PembimbingInstansi = await prisma.pembimbingInstansi.delete({
     *   where: {
     *     // ... filter to delete one PembimbingInstansi
     *   }
     * })
     * 
     */
    delete<T extends PembimbingInstansiDeleteArgs>(args: SelectSubset<T, PembimbingInstansiDeleteArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PembimbingInstansi.
     * @param {PembimbingInstansiUpdateArgs} args - Arguments to update one PembimbingInstansi.
     * @example
     * // Update one PembimbingInstansi
     * const pembimbingInstansi = await prisma.pembimbingInstansi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembimbingInstansiUpdateArgs>(args: SelectSubset<T, PembimbingInstansiUpdateArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PembimbingInstansis.
     * @param {PembimbingInstansiDeleteManyArgs} args - Arguments to filter PembimbingInstansis to delete.
     * @example
     * // Delete a few PembimbingInstansis
     * const { count } = await prisma.pembimbingInstansi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembimbingInstansiDeleteManyArgs>(args?: SelectSubset<T, PembimbingInstansiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PembimbingInstansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembimbingInstansiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PembimbingInstansis
     * const pembimbingInstansi = await prisma.pembimbingInstansi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembimbingInstansiUpdateManyArgs>(args: SelectSubset<T, PembimbingInstansiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PembimbingInstansis and returns the data updated in the database.
     * @param {PembimbingInstansiUpdateManyAndReturnArgs} args - Arguments to update many PembimbingInstansis.
     * @example
     * // Update many PembimbingInstansis
     * const pembimbingInstansi = await prisma.pembimbingInstansi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PembimbingInstansis and only return the `id`
     * const pembimbingInstansiWithIdOnly = await prisma.pembimbingInstansi.updateManyAndReturn({
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
    updateManyAndReturn<T extends PembimbingInstansiUpdateManyAndReturnArgs>(args: SelectSubset<T, PembimbingInstansiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PembimbingInstansi.
     * @param {PembimbingInstansiUpsertArgs} args - Arguments to update or create a PembimbingInstansi.
     * @example
     * // Update or create a PembimbingInstansi
     * const pembimbingInstansi = await prisma.pembimbingInstansi.upsert({
     *   create: {
     *     // ... data to create a PembimbingInstansi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PembimbingInstansi we want to update
     *   }
     * })
     */
    upsert<T extends PembimbingInstansiUpsertArgs>(args: SelectSubset<T, PembimbingInstansiUpsertArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PembimbingInstansis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembimbingInstansiCountArgs} args - Arguments to filter PembimbingInstansis to count.
     * @example
     * // Count the number of PembimbingInstansis
     * const count = await prisma.pembimbingInstansi.count({
     *   where: {
     *     // ... the filter for the PembimbingInstansis we want to count
     *   }
     * })
    **/
    count<T extends PembimbingInstansiCountArgs>(
      args?: Subset<T, PembimbingInstansiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembimbingInstansiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PembimbingInstansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembimbingInstansiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembimbingInstansiAggregateArgs>(args: Subset<T, PembimbingInstansiAggregateArgs>): Prisma.PrismaPromise<GetPembimbingInstansiAggregateType<T>>

    /**
     * Group by PembimbingInstansi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembimbingInstansiGroupByArgs} args - Group by arguments.
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
      T extends PembimbingInstansiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembimbingInstansiGroupByArgs['orderBy'] }
        : { orderBy?: PembimbingInstansiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembimbingInstansiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembimbingInstansiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PembimbingInstansi model
   */
  readonly fields: PembimbingInstansiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PembimbingInstansi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembimbingInstansiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NilaiInstansi<T extends PembimbingInstansi$NilaiInstansiArgs<ExtArgs> = {}>(args?: Subset<T, PembimbingInstansi$NilaiInstansiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiInstansiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Instansi<T extends InstansiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstansiDefaultArgs<ExtArgs>>): Prisma__InstansiClient<$Result.GetResult<Prisma.$InstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PendaftaranKP<T extends PembimbingInstansi$PendaftaranKPArgs<ExtArgs> = {}>(args?: Subset<T, PembimbingInstansi$PendaftaranKPArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PembimbingInstansi model
   */
  interface PembimbingInstansiFieldRefs {
    readonly id: FieldRef<"PembimbingInstansi", 'String'>
    readonly nama: FieldRef<"PembimbingInstansi", 'String'>
    readonly email: FieldRef<"PembimbingInstansi", 'String'>
    readonly jabatan: FieldRef<"PembimbingInstansi", 'String'>
    readonly no_hp: FieldRef<"PembimbingInstansi", 'String'>
    readonly id_instansi: FieldRef<"PembimbingInstansi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PembimbingInstansi findUnique
   */
  export type PembimbingInstansiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * Filter, which PembimbingInstansi to fetch.
     */
    where: PembimbingInstansiWhereUniqueInput
  }

  /**
   * PembimbingInstansi findUniqueOrThrow
   */
  export type PembimbingInstansiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * Filter, which PembimbingInstansi to fetch.
     */
    where: PembimbingInstansiWhereUniqueInput
  }

  /**
   * PembimbingInstansi findFirst
   */
  export type PembimbingInstansiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * Filter, which PembimbingInstansi to fetch.
     */
    where?: PembimbingInstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PembimbingInstansis to fetch.
     */
    orderBy?: PembimbingInstansiOrderByWithRelationInput | PembimbingInstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PembimbingInstansis.
     */
    cursor?: PembimbingInstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PembimbingInstansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PembimbingInstansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PembimbingInstansis.
     */
    distinct?: PembimbingInstansiScalarFieldEnum | PembimbingInstansiScalarFieldEnum[]
  }

  /**
   * PembimbingInstansi findFirstOrThrow
   */
  export type PembimbingInstansiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * Filter, which PembimbingInstansi to fetch.
     */
    where?: PembimbingInstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PembimbingInstansis to fetch.
     */
    orderBy?: PembimbingInstansiOrderByWithRelationInput | PembimbingInstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PembimbingInstansis.
     */
    cursor?: PembimbingInstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PembimbingInstansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PembimbingInstansis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PembimbingInstansis.
     */
    distinct?: PembimbingInstansiScalarFieldEnum | PembimbingInstansiScalarFieldEnum[]
  }

  /**
   * PembimbingInstansi findMany
   */
  export type PembimbingInstansiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * Filter, which PembimbingInstansis to fetch.
     */
    where?: PembimbingInstansiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PembimbingInstansis to fetch.
     */
    orderBy?: PembimbingInstansiOrderByWithRelationInput | PembimbingInstansiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PembimbingInstansis.
     */
    cursor?: PembimbingInstansiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PembimbingInstansis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PembimbingInstansis.
     */
    skip?: number
    distinct?: PembimbingInstansiScalarFieldEnum | PembimbingInstansiScalarFieldEnum[]
  }

  /**
   * PembimbingInstansi create
   */
  export type PembimbingInstansiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * The data needed to create a PembimbingInstansi.
     */
    data: XOR<PembimbingInstansiCreateInput, PembimbingInstansiUncheckedCreateInput>
  }

  /**
   * PembimbingInstansi createMany
   */
  export type PembimbingInstansiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PembimbingInstansis.
     */
    data: PembimbingInstansiCreateManyInput | PembimbingInstansiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PembimbingInstansi createManyAndReturn
   */
  export type PembimbingInstansiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * The data used to create many PembimbingInstansis.
     */
    data: PembimbingInstansiCreateManyInput | PembimbingInstansiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PembimbingInstansi update
   */
  export type PembimbingInstansiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * The data needed to update a PembimbingInstansi.
     */
    data: XOR<PembimbingInstansiUpdateInput, PembimbingInstansiUncheckedUpdateInput>
    /**
     * Choose, which PembimbingInstansi to update.
     */
    where: PembimbingInstansiWhereUniqueInput
  }

  /**
   * PembimbingInstansi updateMany
   */
  export type PembimbingInstansiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PembimbingInstansis.
     */
    data: XOR<PembimbingInstansiUpdateManyMutationInput, PembimbingInstansiUncheckedUpdateManyInput>
    /**
     * Filter which PembimbingInstansis to update
     */
    where?: PembimbingInstansiWhereInput
    /**
     * Limit how many PembimbingInstansis to update.
     */
    limit?: number
  }

  /**
   * PembimbingInstansi updateManyAndReturn
   */
  export type PembimbingInstansiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * The data used to update PembimbingInstansis.
     */
    data: XOR<PembimbingInstansiUpdateManyMutationInput, PembimbingInstansiUncheckedUpdateManyInput>
    /**
     * Filter which PembimbingInstansis to update
     */
    where?: PembimbingInstansiWhereInput
    /**
     * Limit how many PembimbingInstansis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PembimbingInstansi upsert
   */
  export type PembimbingInstansiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * The filter to search for the PembimbingInstansi to update in case it exists.
     */
    where: PembimbingInstansiWhereUniqueInput
    /**
     * In case the PembimbingInstansi found by the `where` argument doesn't exist, create a new PembimbingInstansi with this data.
     */
    create: XOR<PembimbingInstansiCreateInput, PembimbingInstansiUncheckedCreateInput>
    /**
     * In case the PembimbingInstansi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembimbingInstansiUpdateInput, PembimbingInstansiUncheckedUpdateInput>
  }

  /**
   * PembimbingInstansi delete
   */
  export type PembimbingInstansiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
    /**
     * Filter which PembimbingInstansi to delete.
     */
    where: PembimbingInstansiWhereUniqueInput
  }

  /**
   * PembimbingInstansi deleteMany
   */
  export type PembimbingInstansiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PembimbingInstansis to delete
     */
    where?: PembimbingInstansiWhereInput
    /**
     * Limit how many PembimbingInstansis to delete.
     */
    limit?: number
  }

  /**
   * PembimbingInstansi.NilaiInstansi
   */
  export type PembimbingInstansi$NilaiInstansiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NilaiInstansi
     */
    select?: NilaiInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NilaiInstansi
     */
    omit?: NilaiInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInstansiInclude<ExtArgs> | null
    where?: NilaiInstansiWhereInput
    orderBy?: NilaiInstansiOrderByWithRelationInput | NilaiInstansiOrderByWithRelationInput[]
    cursor?: NilaiInstansiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiInstansiScalarFieldEnum | NilaiInstansiScalarFieldEnum[]
  }

  /**
   * PembimbingInstansi.PendaftaranKP
   */
  export type PembimbingInstansi$PendaftaranKPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    where?: PendaftaranKPWhereInput
    orderBy?: PendaftaranKPOrderByWithRelationInput | PendaftaranKPOrderByWithRelationInput[]
    cursor?: PendaftaranKPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendaftaranKPScalarFieldEnum | PendaftaranKPScalarFieldEnum[]
  }

  /**
   * PembimbingInstansi without action
   */
  export type PembimbingInstansiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembimbingInstansi
     */
    select?: PembimbingInstansiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PembimbingInstansi
     */
    omit?: PembimbingInstansiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembimbingInstansiInclude<ExtArgs> | null
  }


  /**
   * Model PendaftaranKP
   */

  export type AggregatePendaftaranKP = {
    _count: PendaftaranKPCountAggregateOutputType | null
    _avg: PendaftaranKPAvgAggregateOutputType | null
    _sum: PendaftaranKPSumAggregateOutputType | null
    _min: PendaftaranKPMinAggregateOutputType | null
    _max: PendaftaranKPMaxAggregateOutputType | null
  }

  export type PendaftaranKPAvgAggregateOutputType = {
    semester: number | null
  }

  export type PendaftaranKPSumAggregateOutputType = {
    semester: number | null
  }

  export type PendaftaranKPMinAggregateOutputType = {
    nim: string | null
    semester: number | null
    tanggalTerdaftar: Date | null
    tanggalMulai: Date | null
    tenggatWaktu: Date | null
    gagal: boolean | null
    tanggalSelesai: Date | null
    linkSuratPengantar: string | null
    linkSuratBalasan: string | null
    linkSuratPenunjukkanDospem: string | null
    alasanLanjutKP: string | null
    linkSuratPerpanjanganKP: string | null
    id_pembimbing_instansi: string | null
    nip: string | null
  }

  export type PendaftaranKPMaxAggregateOutputType = {
    nim: string | null
    semester: number | null
    tanggalTerdaftar: Date | null
    tanggalMulai: Date | null
    tenggatWaktu: Date | null
    gagal: boolean | null
    tanggalSelesai: Date | null
    linkSuratPengantar: string | null
    linkSuratBalasan: string | null
    linkSuratPenunjukkanDospem: string | null
    alasanLanjutKP: string | null
    linkSuratPerpanjanganKP: string | null
    id_pembimbing_instansi: string | null
    nip: string | null
  }

  export type PendaftaranKPCountAggregateOutputType = {
    nim: number
    semester: number
    tanggalTerdaftar: number
    tanggalMulai: number
    tenggatWaktu: number
    gagal: number
    tanggalSelesai: number
    linkSuratPengantar: number
    linkSuratBalasan: number
    linkSuratPenunjukkanDospem: number
    alasanLanjutKP: number
    linkSuratPerpanjanganKP: number
    id_pembimbing_instansi: number
    nip: number
    _all: number
  }


  export type PendaftaranKPAvgAggregateInputType = {
    semester?: true
  }

  export type PendaftaranKPSumAggregateInputType = {
    semester?: true
  }

  export type PendaftaranKPMinAggregateInputType = {
    nim?: true
    semester?: true
    tanggalTerdaftar?: true
    tanggalMulai?: true
    tenggatWaktu?: true
    gagal?: true
    tanggalSelesai?: true
    linkSuratPengantar?: true
    linkSuratBalasan?: true
    linkSuratPenunjukkanDospem?: true
    alasanLanjutKP?: true
    linkSuratPerpanjanganKP?: true
    id_pembimbing_instansi?: true
    nip?: true
  }

  export type PendaftaranKPMaxAggregateInputType = {
    nim?: true
    semester?: true
    tanggalTerdaftar?: true
    tanggalMulai?: true
    tenggatWaktu?: true
    gagal?: true
    tanggalSelesai?: true
    linkSuratPengantar?: true
    linkSuratBalasan?: true
    linkSuratPenunjukkanDospem?: true
    alasanLanjutKP?: true
    linkSuratPerpanjanganKP?: true
    id_pembimbing_instansi?: true
    nip?: true
  }

  export type PendaftaranKPCountAggregateInputType = {
    nim?: true
    semester?: true
    tanggalTerdaftar?: true
    tanggalMulai?: true
    tenggatWaktu?: true
    gagal?: true
    tanggalSelesai?: true
    linkSuratPengantar?: true
    linkSuratBalasan?: true
    linkSuratPenunjukkanDospem?: true
    alasanLanjutKP?: true
    linkSuratPerpanjanganKP?: true
    id_pembimbing_instansi?: true
    nip?: true
    _all?: true
  }

  export type PendaftaranKPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendaftaranKP to aggregate.
     */
    where?: PendaftaranKPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftaranKPS to fetch.
     */
    orderBy?: PendaftaranKPOrderByWithRelationInput | PendaftaranKPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendaftaranKPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftaranKPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftaranKPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendaftaranKPS
    **/
    _count?: true | PendaftaranKPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendaftaranKPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendaftaranKPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendaftaranKPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendaftaranKPMaxAggregateInputType
  }

  export type GetPendaftaranKPAggregateType<T extends PendaftaranKPAggregateArgs> = {
        [P in keyof T & keyof AggregatePendaftaranKP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendaftaranKP[P]>
      : GetScalarType<T[P], AggregatePendaftaranKP[P]>
  }




  export type PendaftaranKPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftaranKPWhereInput
    orderBy?: PendaftaranKPOrderByWithAggregationInput | PendaftaranKPOrderByWithAggregationInput[]
    by: PendaftaranKPScalarFieldEnum[] | PendaftaranKPScalarFieldEnum
    having?: PendaftaranKPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendaftaranKPCountAggregateInputType | true
    _avg?: PendaftaranKPAvgAggregateInputType
    _sum?: PendaftaranKPSumAggregateInputType
    _min?: PendaftaranKPMinAggregateInputType
    _max?: PendaftaranKPMaxAggregateInputType
  }

  export type PendaftaranKPGroupByOutputType = {
    nim: string
    semester: number
    tanggalTerdaftar: Date
    tanggalMulai: Date | null
    tenggatWaktu: Date
    gagal: boolean
    tanggalSelesai: Date | null
    linkSuratPengantar: string | null
    linkSuratBalasan: string | null
    linkSuratPenunjukkanDospem: string | null
    alasanLanjutKP: string | null
    linkSuratPerpanjanganKP: string | null
    id_pembimbing_instansi: string
    nip: string | null
    _count: PendaftaranKPCountAggregateOutputType | null
    _avg: PendaftaranKPAvgAggregateOutputType | null
    _sum: PendaftaranKPSumAggregateOutputType | null
    _min: PendaftaranKPMinAggregateOutputType | null
    _max: PendaftaranKPMaxAggregateOutputType | null
  }

  type GetPendaftaranKPGroupByPayload<T extends PendaftaranKPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendaftaranKPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendaftaranKPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendaftaranKPGroupByOutputType[P]>
            : GetScalarType<T[P], PendaftaranKPGroupByOutputType[P]>
        }
      >
    >


  export type PendaftaranKPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    semester?: boolean
    tanggalTerdaftar?: boolean
    tanggalMulai?: boolean
    tenggatWaktu?: boolean
    gagal?: boolean
    tanggalSelesai?: boolean
    linkSuratPengantar?: boolean
    linkSuratBalasan?: boolean
    linkSuratPenunjukkanDospem?: boolean
    alasanLanjutKP?: boolean
    linkSuratPerpanjanganKP?: boolean
    id_pembimbing_instansi?: boolean
    nip?: boolean
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | PendaftaranKP$DosenArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaranKP"]>

  export type PendaftaranKPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    semester?: boolean
    tanggalTerdaftar?: boolean
    tanggalMulai?: boolean
    tenggatWaktu?: boolean
    gagal?: boolean
    tanggalSelesai?: boolean
    linkSuratPengantar?: boolean
    linkSuratBalasan?: boolean
    linkSuratPenunjukkanDospem?: boolean
    alasanLanjutKP?: boolean
    linkSuratPerpanjanganKP?: boolean
    id_pembimbing_instansi?: boolean
    nip?: boolean
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | PendaftaranKP$DosenArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaranKP"]>

  export type PendaftaranKPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nim?: boolean
    semester?: boolean
    tanggalTerdaftar?: boolean
    tanggalMulai?: boolean
    tenggatWaktu?: boolean
    gagal?: boolean
    tanggalSelesai?: boolean
    linkSuratPengantar?: boolean
    linkSuratBalasan?: boolean
    linkSuratPenunjukkanDospem?: boolean
    alasanLanjutKP?: boolean
    linkSuratPerpanjanganKP?: boolean
    id_pembimbing_instansi?: boolean
    nip?: boolean
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | PendaftaranKP$DosenArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaranKP"]>

  export type PendaftaranKPSelectScalar = {
    nim?: boolean
    semester?: boolean
    tanggalTerdaftar?: boolean
    tanggalMulai?: boolean
    tenggatWaktu?: boolean
    gagal?: boolean
    tanggalSelesai?: boolean
    linkSuratPengantar?: boolean
    linkSuratBalasan?: boolean
    linkSuratPenunjukkanDospem?: boolean
    alasanLanjutKP?: boolean
    linkSuratPerpanjanganKP?: boolean
    id_pembimbing_instansi?: boolean
    nip?: boolean
  }

  export type PendaftaranKPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nim" | "semester" | "tanggalTerdaftar" | "tanggalMulai" | "tenggatWaktu" | "gagal" | "tanggalSelesai" | "linkSuratPengantar" | "linkSuratBalasan" | "linkSuratPenunjukkanDospem" | "alasanLanjutKP" | "linkSuratPerpanjanganKP" | "id_pembimbing_instansi" | "nip", ExtArgs["result"]["pendaftaranKP"]>
  export type PendaftaranKPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | PendaftaranKP$DosenArgs<ExtArgs>
  }
  export type PendaftaranKPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | PendaftaranKP$DosenArgs<ExtArgs>
  }
  export type PendaftaranKPIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PembimbingInstansi?: boolean | PembimbingInstansiDefaultArgs<ExtArgs>
    Mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    Dosen?: boolean | PendaftaranKP$DosenArgs<ExtArgs>
  }

  export type $PendaftaranKPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendaftaranKP"
    objects: {
      PembimbingInstansi: Prisma.$PembimbingInstansiPayload<ExtArgs>
      Mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      Dosen: Prisma.$DosenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      nim: string
      semester: number
      tanggalTerdaftar: Date
      tanggalMulai: Date | null
      tenggatWaktu: Date
      gagal: boolean
      tanggalSelesai: Date | null
      linkSuratPengantar: string | null
      linkSuratBalasan: string | null
      linkSuratPenunjukkanDospem: string | null
      alasanLanjutKP: string | null
      linkSuratPerpanjanganKP: string | null
      id_pembimbing_instansi: string
      nip: string | null
    }, ExtArgs["result"]["pendaftaranKP"]>
    composites: {}
  }

  type PendaftaranKPGetPayload<S extends boolean | null | undefined | PendaftaranKPDefaultArgs> = $Result.GetResult<Prisma.$PendaftaranKPPayload, S>

  type PendaftaranKPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendaftaranKPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendaftaranKPCountAggregateInputType | true
    }

  export interface PendaftaranKPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendaftaranKP'], meta: { name: 'PendaftaranKP' } }
    /**
     * Find zero or one PendaftaranKP that matches the filter.
     * @param {PendaftaranKPFindUniqueArgs} args - Arguments to find a PendaftaranKP
     * @example
     * // Get one PendaftaranKP
     * const pendaftaranKP = await prisma.pendaftaranKP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendaftaranKPFindUniqueArgs>(args: SelectSubset<T, PendaftaranKPFindUniqueArgs<ExtArgs>>): Prisma__PendaftaranKPClient<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PendaftaranKP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendaftaranKPFindUniqueOrThrowArgs} args - Arguments to find a PendaftaranKP
     * @example
     * // Get one PendaftaranKP
     * const pendaftaranKP = await prisma.pendaftaranKP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendaftaranKPFindUniqueOrThrowArgs>(args: SelectSubset<T, PendaftaranKPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendaftaranKPClient<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendaftaranKP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranKPFindFirstArgs} args - Arguments to find a PendaftaranKP
     * @example
     * // Get one PendaftaranKP
     * const pendaftaranKP = await prisma.pendaftaranKP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendaftaranKPFindFirstArgs>(args?: SelectSubset<T, PendaftaranKPFindFirstArgs<ExtArgs>>): Prisma__PendaftaranKPClient<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendaftaranKP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranKPFindFirstOrThrowArgs} args - Arguments to find a PendaftaranKP
     * @example
     * // Get one PendaftaranKP
     * const pendaftaranKP = await prisma.pendaftaranKP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendaftaranKPFindFirstOrThrowArgs>(args?: SelectSubset<T, PendaftaranKPFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendaftaranKPClient<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PendaftaranKPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranKPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendaftaranKPS
     * const pendaftaranKPS = await prisma.pendaftaranKP.findMany()
     * 
     * // Get first 10 PendaftaranKPS
     * const pendaftaranKPS = await prisma.pendaftaranKP.findMany({ take: 10 })
     * 
     * // Only select the `nim`
     * const pendaftaranKPWithNimOnly = await prisma.pendaftaranKP.findMany({ select: { nim: true } })
     * 
     */
    findMany<T extends PendaftaranKPFindManyArgs>(args?: SelectSubset<T, PendaftaranKPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PendaftaranKP.
     * @param {PendaftaranKPCreateArgs} args - Arguments to create a PendaftaranKP.
     * @example
     * // Create one PendaftaranKP
     * const PendaftaranKP = await prisma.pendaftaranKP.create({
     *   data: {
     *     // ... data to create a PendaftaranKP
     *   }
     * })
     * 
     */
    create<T extends PendaftaranKPCreateArgs>(args: SelectSubset<T, PendaftaranKPCreateArgs<ExtArgs>>): Prisma__PendaftaranKPClient<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PendaftaranKPS.
     * @param {PendaftaranKPCreateManyArgs} args - Arguments to create many PendaftaranKPS.
     * @example
     * // Create many PendaftaranKPS
     * const pendaftaranKP = await prisma.pendaftaranKP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendaftaranKPCreateManyArgs>(args?: SelectSubset<T, PendaftaranKPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendaftaranKPS and returns the data saved in the database.
     * @param {PendaftaranKPCreateManyAndReturnArgs} args - Arguments to create many PendaftaranKPS.
     * @example
     * // Create many PendaftaranKPS
     * const pendaftaranKP = await prisma.pendaftaranKP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendaftaranKPS and only return the `nim`
     * const pendaftaranKPWithNimOnly = await prisma.pendaftaranKP.createManyAndReturn({
     *   select: { nim: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendaftaranKPCreateManyAndReturnArgs>(args?: SelectSubset<T, PendaftaranKPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PendaftaranKP.
     * @param {PendaftaranKPDeleteArgs} args - Arguments to delete one PendaftaranKP.
     * @example
     * // Delete one PendaftaranKP
     * const PendaftaranKP = await prisma.pendaftaranKP.delete({
     *   where: {
     *     // ... filter to delete one PendaftaranKP
     *   }
     * })
     * 
     */
    delete<T extends PendaftaranKPDeleteArgs>(args: SelectSubset<T, PendaftaranKPDeleteArgs<ExtArgs>>): Prisma__PendaftaranKPClient<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PendaftaranKP.
     * @param {PendaftaranKPUpdateArgs} args - Arguments to update one PendaftaranKP.
     * @example
     * // Update one PendaftaranKP
     * const pendaftaranKP = await prisma.pendaftaranKP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendaftaranKPUpdateArgs>(args: SelectSubset<T, PendaftaranKPUpdateArgs<ExtArgs>>): Prisma__PendaftaranKPClient<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PendaftaranKPS.
     * @param {PendaftaranKPDeleteManyArgs} args - Arguments to filter PendaftaranKPS to delete.
     * @example
     * // Delete a few PendaftaranKPS
     * const { count } = await prisma.pendaftaranKP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendaftaranKPDeleteManyArgs>(args?: SelectSubset<T, PendaftaranKPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendaftaranKPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranKPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendaftaranKPS
     * const pendaftaranKP = await prisma.pendaftaranKP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendaftaranKPUpdateManyArgs>(args: SelectSubset<T, PendaftaranKPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendaftaranKPS and returns the data updated in the database.
     * @param {PendaftaranKPUpdateManyAndReturnArgs} args - Arguments to update many PendaftaranKPS.
     * @example
     * // Update many PendaftaranKPS
     * const pendaftaranKP = await prisma.pendaftaranKP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PendaftaranKPS and only return the `nim`
     * const pendaftaranKPWithNimOnly = await prisma.pendaftaranKP.updateManyAndReturn({
     *   select: { nim: true },
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
    updateManyAndReturn<T extends PendaftaranKPUpdateManyAndReturnArgs>(args: SelectSubset<T, PendaftaranKPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PendaftaranKP.
     * @param {PendaftaranKPUpsertArgs} args - Arguments to update or create a PendaftaranKP.
     * @example
     * // Update or create a PendaftaranKP
     * const pendaftaranKP = await prisma.pendaftaranKP.upsert({
     *   create: {
     *     // ... data to create a PendaftaranKP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendaftaranKP we want to update
     *   }
     * })
     */
    upsert<T extends PendaftaranKPUpsertArgs>(args: SelectSubset<T, PendaftaranKPUpsertArgs<ExtArgs>>): Prisma__PendaftaranKPClient<$Result.GetResult<Prisma.$PendaftaranKPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PendaftaranKPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranKPCountArgs} args - Arguments to filter PendaftaranKPS to count.
     * @example
     * // Count the number of PendaftaranKPS
     * const count = await prisma.pendaftaranKP.count({
     *   where: {
     *     // ... the filter for the PendaftaranKPS we want to count
     *   }
     * })
    **/
    count<T extends PendaftaranKPCountArgs>(
      args?: Subset<T, PendaftaranKPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendaftaranKPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendaftaranKP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranKPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendaftaranKPAggregateArgs>(args: Subset<T, PendaftaranKPAggregateArgs>): Prisma.PrismaPromise<GetPendaftaranKPAggregateType<T>>

    /**
     * Group by PendaftaranKP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranKPGroupByArgs} args - Group by arguments.
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
      T extends PendaftaranKPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendaftaranKPGroupByArgs['orderBy'] }
        : { orderBy?: PendaftaranKPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendaftaranKPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendaftaranKPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendaftaranKP model
   */
  readonly fields: PendaftaranKPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendaftaranKP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendaftaranKPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PembimbingInstansi<T extends PembimbingInstansiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PembimbingInstansiDefaultArgs<ExtArgs>>): Prisma__PembimbingInstansiClient<$Result.GetResult<Prisma.$PembimbingInstansiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Dosen<T extends PendaftaranKP$DosenArgs<ExtArgs> = {}>(args?: Subset<T, PendaftaranKP$DosenArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PendaftaranKP model
   */
  interface PendaftaranKPFieldRefs {
    readonly nim: FieldRef<"PendaftaranKP", 'String'>
    readonly semester: FieldRef<"PendaftaranKP", 'Int'>
    readonly tanggalTerdaftar: FieldRef<"PendaftaranKP", 'DateTime'>
    readonly tanggalMulai: FieldRef<"PendaftaranKP", 'DateTime'>
    readonly tenggatWaktu: FieldRef<"PendaftaranKP", 'DateTime'>
    readonly gagal: FieldRef<"PendaftaranKP", 'Boolean'>
    readonly tanggalSelesai: FieldRef<"PendaftaranKP", 'DateTime'>
    readonly linkSuratPengantar: FieldRef<"PendaftaranKP", 'String'>
    readonly linkSuratBalasan: FieldRef<"PendaftaranKP", 'String'>
    readonly linkSuratPenunjukkanDospem: FieldRef<"PendaftaranKP", 'String'>
    readonly alasanLanjutKP: FieldRef<"PendaftaranKP", 'String'>
    readonly linkSuratPerpanjanganKP: FieldRef<"PendaftaranKP", 'String'>
    readonly id_pembimbing_instansi: FieldRef<"PendaftaranKP", 'String'>
    readonly nip: FieldRef<"PendaftaranKP", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PendaftaranKP findUnique
   */
  export type PendaftaranKPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranKP to fetch.
     */
    where: PendaftaranKPWhereUniqueInput
  }

  /**
   * PendaftaranKP findUniqueOrThrow
   */
  export type PendaftaranKPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranKP to fetch.
     */
    where: PendaftaranKPWhereUniqueInput
  }

  /**
   * PendaftaranKP findFirst
   */
  export type PendaftaranKPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranKP to fetch.
     */
    where?: PendaftaranKPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftaranKPS to fetch.
     */
    orderBy?: PendaftaranKPOrderByWithRelationInput | PendaftaranKPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendaftaranKPS.
     */
    cursor?: PendaftaranKPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftaranKPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftaranKPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftaranKPS.
     */
    distinct?: PendaftaranKPScalarFieldEnum | PendaftaranKPScalarFieldEnum[]
  }

  /**
   * PendaftaranKP findFirstOrThrow
   */
  export type PendaftaranKPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranKP to fetch.
     */
    where?: PendaftaranKPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftaranKPS to fetch.
     */
    orderBy?: PendaftaranKPOrderByWithRelationInput | PendaftaranKPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendaftaranKPS.
     */
    cursor?: PendaftaranKPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftaranKPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftaranKPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendaftaranKPS.
     */
    distinct?: PendaftaranKPScalarFieldEnum | PendaftaranKPScalarFieldEnum[]
  }

  /**
   * PendaftaranKP findMany
   */
  export type PendaftaranKPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * Filter, which PendaftaranKPS to fetch.
     */
    where?: PendaftaranKPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendaftaranKPS to fetch.
     */
    orderBy?: PendaftaranKPOrderByWithRelationInput | PendaftaranKPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendaftaranKPS.
     */
    cursor?: PendaftaranKPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendaftaranKPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendaftaranKPS.
     */
    skip?: number
    distinct?: PendaftaranKPScalarFieldEnum | PendaftaranKPScalarFieldEnum[]
  }

  /**
   * PendaftaranKP create
   */
  export type PendaftaranKPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * The data needed to create a PendaftaranKP.
     */
    data: XOR<PendaftaranKPCreateInput, PendaftaranKPUncheckedCreateInput>
  }

  /**
   * PendaftaranKP createMany
   */
  export type PendaftaranKPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendaftaranKPS.
     */
    data: PendaftaranKPCreateManyInput | PendaftaranKPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendaftaranKP createManyAndReturn
   */
  export type PendaftaranKPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * The data used to create many PendaftaranKPS.
     */
    data: PendaftaranKPCreateManyInput | PendaftaranKPCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendaftaranKP update
   */
  export type PendaftaranKPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * The data needed to update a PendaftaranKP.
     */
    data: XOR<PendaftaranKPUpdateInput, PendaftaranKPUncheckedUpdateInput>
    /**
     * Choose, which PendaftaranKP to update.
     */
    where: PendaftaranKPWhereUniqueInput
  }

  /**
   * PendaftaranKP updateMany
   */
  export type PendaftaranKPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendaftaranKPS.
     */
    data: XOR<PendaftaranKPUpdateManyMutationInput, PendaftaranKPUncheckedUpdateManyInput>
    /**
     * Filter which PendaftaranKPS to update
     */
    where?: PendaftaranKPWhereInput
    /**
     * Limit how many PendaftaranKPS to update.
     */
    limit?: number
  }

  /**
   * PendaftaranKP updateManyAndReturn
   */
  export type PendaftaranKPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * The data used to update PendaftaranKPS.
     */
    data: XOR<PendaftaranKPUpdateManyMutationInput, PendaftaranKPUncheckedUpdateManyInput>
    /**
     * Filter which PendaftaranKPS to update
     */
    where?: PendaftaranKPWhereInput
    /**
     * Limit how many PendaftaranKPS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendaftaranKP upsert
   */
  export type PendaftaranKPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * The filter to search for the PendaftaranKP to update in case it exists.
     */
    where: PendaftaranKPWhereUniqueInput
    /**
     * In case the PendaftaranKP found by the `where` argument doesn't exist, create a new PendaftaranKP with this data.
     */
    create: XOR<PendaftaranKPCreateInput, PendaftaranKPUncheckedCreateInput>
    /**
     * In case the PendaftaranKP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendaftaranKPUpdateInput, PendaftaranKPUncheckedUpdateInput>
  }

  /**
   * PendaftaranKP delete
   */
  export type PendaftaranKPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
    /**
     * Filter which PendaftaranKP to delete.
     */
    where: PendaftaranKPWhereUniqueInput
  }

  /**
   * PendaftaranKP deleteMany
   */
  export type PendaftaranKPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendaftaranKPS to delete
     */
    where?: PendaftaranKPWhereInput
    /**
     * Limit how many PendaftaranKPS to delete.
     */
    limit?: number
  }

  /**
   * PendaftaranKP.Dosen
   */
  export type PendaftaranKP$DosenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    where?: DosenWhereInput
  }

  /**
   * PendaftaranKP without action
   */
  export type PendaftaranKPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranKP
     */
    select?: PendaftaranKPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendaftaranKP
     */
    omit?: PendaftaranKPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranKPInclude<ExtArgs> | null
  }


  /**
   * Model Ruangan
   */

  export type AggregateRuangan = {
    _count: RuanganCountAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  export type RuanganMinAggregateOutputType = {
    nama: string | null
  }

  export type RuanganMaxAggregateOutputType = {
    nama: string | null
  }

  export type RuanganCountAggregateOutputType = {
    nama: number
    _all: number
  }


  export type RuanganMinAggregateInputType = {
    nama?: true
  }

  export type RuanganMaxAggregateInputType = {
    nama?: true
  }

  export type RuanganCountAggregateInputType = {
    nama?: true
    _all?: true
  }

  export type RuanganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruangan to aggregate.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ruangans
    **/
    _count?: true | RuanganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuanganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuanganMaxAggregateInputType
  }

  export type GetRuanganAggregateType<T extends RuanganAggregateArgs> = {
        [P in keyof T & keyof AggregateRuangan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuangan[P]>
      : GetScalarType<T[P], AggregateRuangan[P]>
  }




  export type RuanganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuanganWhereInput
    orderBy?: RuanganOrderByWithAggregationInput | RuanganOrderByWithAggregationInput[]
    by: RuanganScalarFieldEnum[] | RuanganScalarFieldEnum
    having?: RuanganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuanganCountAggregateInputType | true
    _min?: RuanganMinAggregateInputType
    _max?: RuanganMaxAggregateInputType
  }

  export type RuanganGroupByOutputType = {
    nama: string
    _count: RuanganCountAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  type GetRuanganGroupByPayload<T extends RuanganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuanganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuanganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuanganGroupByOutputType[P]>
            : GetScalarType<T[P], RuanganGroupByOutputType[P]>
        }
      >
    >


  export type RuanganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
    Jadwal?: boolean | Ruangan$JadwalArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nama?: boolean
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectScalar = {
    nama?: boolean
  }

  export type RuanganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nama", ExtArgs["result"]["ruangan"]>
  export type RuanganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jadwal?: boolean | Ruangan$JadwalArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuanganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RuanganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RuanganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ruangan"
    objects: {
      Jadwal: Prisma.$JadwalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nama: string
    }, ExtArgs["result"]["ruangan"]>
    composites: {}
  }

  type RuanganGetPayload<S extends boolean | null | undefined | RuanganDefaultArgs> = $Result.GetResult<Prisma.$RuanganPayload, S>

  type RuanganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuanganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuanganCountAggregateInputType | true
    }

  export interface RuanganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ruangan'], meta: { name: 'Ruangan' } }
    /**
     * Find zero or one Ruangan that matches the filter.
     * @param {RuanganFindUniqueArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuanganFindUniqueArgs>(args: SelectSubset<T, RuanganFindUniqueArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ruangan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuanganFindUniqueOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuanganFindUniqueOrThrowArgs>(args: SelectSubset<T, RuanganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindFirstArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuanganFindFirstArgs>(args?: SelectSubset<T, RuanganFindFirstArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindFirstOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuanganFindFirstOrThrowArgs>(args?: SelectSubset<T, RuanganFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ruangans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ruangans
     * const ruangans = await prisma.ruangan.findMany()
     * 
     * // Get first 10 Ruangans
     * const ruangans = await prisma.ruangan.findMany({ take: 10 })
     * 
     * // Only select the `nama`
     * const ruanganWithNamaOnly = await prisma.ruangan.findMany({ select: { nama: true } })
     * 
     */
    findMany<T extends RuanganFindManyArgs>(args?: SelectSubset<T, RuanganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ruangan.
     * @param {RuanganCreateArgs} args - Arguments to create a Ruangan.
     * @example
     * // Create one Ruangan
     * const Ruangan = await prisma.ruangan.create({
     *   data: {
     *     // ... data to create a Ruangan
     *   }
     * })
     * 
     */
    create<T extends RuanganCreateArgs>(args: SelectSubset<T, RuanganCreateArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ruangans.
     * @param {RuanganCreateManyArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuanganCreateManyArgs>(args?: SelectSubset<T, RuanganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ruangans and returns the data saved in the database.
     * @param {RuanganCreateManyAndReturnArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ruangans and only return the `nama`
     * const ruanganWithNamaOnly = await prisma.ruangan.createManyAndReturn({
     *   select: { nama: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuanganCreateManyAndReturnArgs>(args?: SelectSubset<T, RuanganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ruangan.
     * @param {RuanganDeleteArgs} args - Arguments to delete one Ruangan.
     * @example
     * // Delete one Ruangan
     * const Ruangan = await prisma.ruangan.delete({
     *   where: {
     *     // ... filter to delete one Ruangan
     *   }
     * })
     * 
     */
    delete<T extends RuanganDeleteArgs>(args: SelectSubset<T, RuanganDeleteArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ruangan.
     * @param {RuanganUpdateArgs} args - Arguments to update one Ruangan.
     * @example
     * // Update one Ruangan
     * const ruangan = await prisma.ruangan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuanganUpdateArgs>(args: SelectSubset<T, RuanganUpdateArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ruangans.
     * @param {RuanganDeleteManyArgs} args - Arguments to filter Ruangans to delete.
     * @example
     * // Delete a few Ruangans
     * const { count } = await prisma.ruangan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuanganDeleteManyArgs>(args?: SelectSubset<T, RuanganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuanganUpdateManyArgs>(args: SelectSubset<T, RuanganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans and returns the data updated in the database.
     * @param {RuanganUpdateManyAndReturnArgs} args - Arguments to update many Ruangans.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ruangans and only return the `nama`
     * const ruanganWithNamaOnly = await prisma.ruangan.updateManyAndReturn({
     *   select: { nama: true },
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
    updateManyAndReturn<T extends RuanganUpdateManyAndReturnArgs>(args: SelectSubset<T, RuanganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ruangan.
     * @param {RuanganUpsertArgs} args - Arguments to update or create a Ruangan.
     * @example
     * // Update or create a Ruangan
     * const ruangan = await prisma.ruangan.upsert({
     *   create: {
     *     // ... data to create a Ruangan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruangan we want to update
     *   }
     * })
     */
    upsert<T extends RuanganUpsertArgs>(args: SelectSubset<T, RuanganUpsertArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganCountArgs} args - Arguments to filter Ruangans to count.
     * @example
     * // Count the number of Ruangans
     * const count = await prisma.ruangan.count({
     *   where: {
     *     // ... the filter for the Ruangans we want to count
     *   }
     * })
    **/
    count<T extends RuanganCountArgs>(
      args?: Subset<T, RuanganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuanganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuanganAggregateArgs>(args: Subset<T, RuanganAggregateArgs>): Prisma.PrismaPromise<GetRuanganAggregateType<T>>

    /**
     * Group by Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganGroupByArgs} args - Group by arguments.
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
      T extends RuanganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuanganGroupByArgs['orderBy'] }
        : { orderBy?: RuanganGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuanganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuanganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ruangan model
   */
  readonly fields: RuanganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ruangan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuanganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Jadwal<T extends Ruangan$JadwalArgs<ExtArgs> = {}>(args?: Subset<T, Ruangan$JadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ruangan model
   */
  interface RuanganFieldRefs {
    readonly nama: FieldRef<"Ruangan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ruangan findUnique
   */
  export type RuanganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan findUniqueOrThrow
   */
  export type RuanganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan findFirst
   */
  export type RuanganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan findFirstOrThrow
   */
  export type RuanganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan findMany
   */
  export type RuanganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangans to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan create
   */
  export type RuanganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The data needed to create a Ruangan.
     */
    data: XOR<RuanganCreateInput, RuanganUncheckedCreateInput>
  }

  /**
   * Ruangan createMany
   */
  export type RuanganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ruangans.
     */
    data: RuanganCreateManyInput | RuanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruangan createManyAndReturn
   */
  export type RuanganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * The data used to create many Ruangans.
     */
    data: RuanganCreateManyInput | RuanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruangan update
   */
  export type RuanganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The data needed to update a Ruangan.
     */
    data: XOR<RuanganUpdateInput, RuanganUncheckedUpdateInput>
    /**
     * Choose, which Ruangan to update.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan updateMany
   */
  export type RuanganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ruangans.
     */
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyInput>
    /**
     * Filter which Ruangans to update
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to update.
     */
    limit?: number
  }

  /**
   * Ruangan updateManyAndReturn
   */
  export type RuanganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * The data used to update Ruangans.
     */
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyInput>
    /**
     * Filter which Ruangans to update
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to update.
     */
    limit?: number
  }

  /**
   * Ruangan upsert
   */
  export type RuanganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The filter to search for the Ruangan to update in case it exists.
     */
    where: RuanganWhereUniqueInput
    /**
     * In case the Ruangan found by the `where` argument doesn't exist, create a new Ruangan with this data.
     */
    create: XOR<RuanganCreateInput, RuanganUncheckedCreateInput>
    /**
     * In case the Ruangan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuanganUpdateInput, RuanganUncheckedUpdateInput>
  }

  /**
   * Ruangan delete
   */
  export type RuanganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter which Ruangan to delete.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan deleteMany
   */
  export type RuanganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruangans to delete
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to delete.
     */
    limit?: number
  }

  /**
   * Ruangan.Jadwal
   */
  export type Ruangan$JadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    cursor?: JadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Ruangan without action
   */
  export type RuanganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
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


  export const BimbinganScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    catatan: 'catatan',
    status: 'status',
    nim: 'nim',
    nip: 'nip'
  };

  export type BimbinganScalarFieldEnum = (typeof BimbinganScalarFieldEnum)[keyof typeof BimbinganScalarFieldEnum]


  export const DailyReportScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    status: 'status',
    catatan: 'catatan',
    latitude: 'latitude',
    longitude: 'longitude',
    nim: 'nim'
  };

  export type DailyReportScalarFieldEnum = (typeof DailyReportScalarFieldEnum)[keyof typeof DailyReportScalarFieldEnum]


  export const DetailDailyReportScalarFieldEnum: {
    id: 'id',
    judul_kegiatan: 'judul_kegiatan',
    deskripsi_kegiatan: 'deskripsi_kegiatan',
    waktu: 'waktu',
    id_daily_report: 'id_daily_report'
  };

  export type DetailDailyReportScalarFieldEnum = (typeof DetailDailyReportScalarFieldEnum)[keyof typeof DetailDailyReportScalarFieldEnum]


  export const DokumenScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    jenis_dokumen: 'jenis_dokumen',
    file_path: 'file_path',
    tanggal_upload: 'tanggal_upload',
    status: 'status',
    komentar: 'komentar'
  };

  export type DokumenScalarFieldEnum = (typeof DokumenScalarFieldEnum)[keyof typeof DokumenScalarFieldEnum]


  export const DosenScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama',
    email: 'email',
    no_hp: 'no_hp',
    chat_id: 'chat_id'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const InstansiScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alamat: 'alamat',
    jenis: 'jenis',
    profil_singkat: 'profil_singkat',
    status: 'status'
  };

  export type InstansiScalarFieldEnum = (typeof InstansiScalarFieldEnum)[keyof typeof InstansiScalarFieldEnum]


  export const JadwalScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    nip: 'nip',
    tanggal: 'tanggal',
    waktu_mulai: 'waktu_mulai',
    waktu_selesai: 'waktu_selesai',
    ruangan_nama: 'ruangan_nama',
    status: 'status'
  };

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


  export const LogJadwalScalarFieldEnum: {
    id: 'id',
    jadwal_seminar_id: 'jadwal_seminar_id',
    log_type: 'log_type',
    nip: 'nip',
    tanggal_lama: 'tanggal_lama',
    tanggal_baru: 'tanggal_baru',
    ruangan_lama: 'ruangan_lama',
    ruangan_baru: 'ruangan_baru',
    keterangan: 'keterangan',
    created_at: 'created_at'
  };

  export type LogJadwalScalarFieldEnum = (typeof LogJadwalScalarFieldEnum)[keyof typeof LogJadwalScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    nim: 'nim',
    nama: 'nama',
    email: 'email'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const NilaiScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    jadwal_seminar_id: 'jadwal_seminar_id',
    nip_penguji: 'nip_penguji',
    nip_pembimbing: 'nip_pembimbing',
    nilai_pembimbing: 'nilai_pembimbing',
    nilai_penguji: 'nilai_penguji',
    note_pembimbing: 'note_pembimbing',
    note_penguji: 'note_penguji'
  };

  export type NilaiScalarFieldEnum = (typeof NilaiScalarFieldEnum)[keyof typeof NilaiScalarFieldEnum]


  export const NilaiInstansiScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    nilai_angka: 'nilai_angka',
    nilai_huruf: 'nilai_huruf',
    nim: 'nim',
    id_pembimbing_instansi: 'id_pembimbing_instansi'
  };

  export type NilaiInstansiScalarFieldEnum = (typeof NilaiInstansiScalarFieldEnum)[keyof typeof NilaiInstansiScalarFieldEnum]


  export const PembimbingInstansiScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    jabatan: 'jabatan',
    no_hp: 'no_hp',
    id_instansi: 'id_instansi'
  };

  export type PembimbingInstansiScalarFieldEnum = (typeof PembimbingInstansiScalarFieldEnum)[keyof typeof PembimbingInstansiScalarFieldEnum]


  export const PendaftaranKPScalarFieldEnum: {
    nim: 'nim',
    semester: 'semester',
    tanggalTerdaftar: 'tanggalTerdaftar',
    tanggalMulai: 'tanggalMulai',
    tenggatWaktu: 'tenggatWaktu',
    gagal: 'gagal',
    tanggalSelesai: 'tanggalSelesai',
    linkSuratPengantar: 'linkSuratPengantar',
    linkSuratBalasan: 'linkSuratBalasan',
    linkSuratPenunjukkanDospem: 'linkSuratPenunjukkanDospem',
    alasanLanjutKP: 'alasanLanjutKP',
    linkSuratPerpanjanganKP: 'linkSuratPerpanjanganKP',
    id_pembimbing_instansi: 'id_pembimbing_instansi',
    nip: 'nip'
  };

  export type PendaftaranKPScalarFieldEnum = (typeof PendaftaranKPScalarFieldEnum)[keyof typeof PendaftaranKPScalarFieldEnum]


  export const RuanganScalarFieldEnum: {
    nama: 'nama'
  };

  export type RuanganScalarFieldEnum = (typeof RuanganScalarFieldEnum)[keyof typeof RuanganScalarFieldEnum]


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
   * Reference to a field of type 'StatusValidasi'
   */
  export type EnumStatusValidasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusValidasi'>
    


  /**
   * Reference to a field of type 'StatusValidasi[]'
   */
  export type ListEnumStatusValidasiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusValidasi[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'JenisDokumen'
   */
  export type EnumJenisDokumenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisDokumen'>
    


  /**
   * Reference to a field of type 'JenisDokumen[]'
   */
  export type ListEnumJenisDokumenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisDokumen[]'>
    


  /**
   * Reference to a field of type 'DokumenStatus'
   */
  export type EnumDokumenStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DokumenStatus'>
    


  /**
   * Reference to a field of type 'DokumenStatus[]'
   */
  export type ListEnumDokumenStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DokumenStatus[]'>
    


  /**
   * Reference to a field of type 'JenisInstansi'
   */
  export type EnumJenisInstansiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisInstansi'>
    


  /**
   * Reference to a field of type 'JenisInstansi[]'
   */
  export type ListEnumJenisInstansiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisInstansi[]'>
    


  /**
   * Reference to a field of type 'StatusInstansi'
   */
  export type EnumStatusInstansiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInstansi'>
    


  /**
   * Reference to a field of type 'StatusInstansi[]'
   */
  export type ListEnumStatusInstansiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInstansi[]'>
    


  /**
   * Reference to a field of type 'StatusSeminar'
   */
  export type EnumStatusSeminarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSeminar'>
    


  /**
   * Reference to a field of type 'StatusSeminar[]'
   */
  export type ListEnumStatusSeminarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSeminar[]'>
    


  /**
   * Reference to a field of type 'LogType'
   */
  export type EnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType'>
    


  /**
   * Reference to a field of type 'LogType[]'
   */
  export type ListEnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type BimbinganWhereInput = {
    AND?: BimbinganWhereInput | BimbinganWhereInput[]
    OR?: BimbinganWhereInput[]
    NOT?: BimbinganWhereInput | BimbinganWhereInput[]
    id?: StringFilter<"Bimbingan"> | string
    tanggal?: DateTimeFilter<"Bimbingan"> | Date | string
    catatan?: StringFilter<"Bimbingan"> | string
    status?: EnumStatusValidasiFilter<"Bimbingan"> | $Enums.StatusValidasi
    nim?: StringFilter<"Bimbingan"> | string
    nip?: StringFilter<"Bimbingan"> | string
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    Dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
  }

  export type BimbinganOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    Mahasiswa?: MahasiswaOrderByWithRelationInput
    Dosen?: DosenOrderByWithRelationInput
  }

  export type BimbinganWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BimbinganWhereInput | BimbinganWhereInput[]
    OR?: BimbinganWhereInput[]
    NOT?: BimbinganWhereInput | BimbinganWhereInput[]
    tanggal?: DateTimeFilter<"Bimbingan"> | Date | string
    catatan?: StringFilter<"Bimbingan"> | string
    status?: EnumStatusValidasiFilter<"Bimbingan"> | $Enums.StatusValidasi
    nim?: StringFilter<"Bimbingan"> | string
    nip?: StringFilter<"Bimbingan"> | string
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    Dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
  }, "id">

  export type BimbinganOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    _count?: BimbinganCountOrderByAggregateInput
    _max?: BimbinganMaxOrderByAggregateInput
    _min?: BimbinganMinOrderByAggregateInput
  }

  export type BimbinganScalarWhereWithAggregatesInput = {
    AND?: BimbinganScalarWhereWithAggregatesInput | BimbinganScalarWhereWithAggregatesInput[]
    OR?: BimbinganScalarWhereWithAggregatesInput[]
    NOT?: BimbinganScalarWhereWithAggregatesInput | BimbinganScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bimbingan"> | string
    tanggal?: DateTimeWithAggregatesFilter<"Bimbingan"> | Date | string
    catatan?: StringWithAggregatesFilter<"Bimbingan"> | string
    status?: EnumStatusValidasiWithAggregatesFilter<"Bimbingan"> | $Enums.StatusValidasi
    nim?: StringWithAggregatesFilter<"Bimbingan"> | string
    nip?: StringWithAggregatesFilter<"Bimbingan"> | string
  }

  export type DailyReportWhereInput = {
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    id?: StringFilter<"DailyReport"> | string
    tanggal?: DateTimeFilter<"DailyReport"> | Date | string
    status?: EnumStatusValidasiFilter<"DailyReport"> | $Enums.StatusValidasi
    catatan?: StringNullableFilter<"DailyReport"> | string | null
    latitude?: FloatFilter<"DailyReport"> | number
    longitude?: FloatFilter<"DailyReport"> | number
    nim?: StringFilter<"DailyReport"> | string
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    DetailDailyReport?: DetailDailyReportListRelationFilter
  }

  export type DailyReportOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
    Mahasiswa?: MahasiswaOrderByWithRelationInput
    DetailDailyReport?: DetailDailyReportOrderByRelationAggregateInput
  }

  export type DailyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    tanggal?: DateTimeFilter<"DailyReport"> | Date | string
    status?: EnumStatusValidasiFilter<"DailyReport"> | $Enums.StatusValidasi
    catatan?: StringNullableFilter<"DailyReport"> | string | null
    latitude?: FloatFilter<"DailyReport"> | number
    longitude?: FloatFilter<"DailyReport"> | number
    nim?: StringFilter<"DailyReport"> | string
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    DetailDailyReport?: DetailDailyReportListRelationFilter
  }, "id">

  export type DailyReportOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
    _count?: DailyReportCountOrderByAggregateInput
    _avg?: DailyReportAvgOrderByAggregateInput
    _max?: DailyReportMaxOrderByAggregateInput
    _min?: DailyReportMinOrderByAggregateInput
    _sum?: DailyReportSumOrderByAggregateInput
  }

  export type DailyReportScalarWhereWithAggregatesInput = {
    AND?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    OR?: DailyReportScalarWhereWithAggregatesInput[]
    NOT?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyReport"> | string
    tanggal?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    status?: EnumStatusValidasiWithAggregatesFilter<"DailyReport"> | $Enums.StatusValidasi
    catatan?: StringNullableWithAggregatesFilter<"DailyReport"> | string | null
    latitude?: FloatWithAggregatesFilter<"DailyReport"> | number
    longitude?: FloatWithAggregatesFilter<"DailyReport"> | number
    nim?: StringWithAggregatesFilter<"DailyReport"> | string
  }

  export type DetailDailyReportWhereInput = {
    AND?: DetailDailyReportWhereInput | DetailDailyReportWhereInput[]
    OR?: DetailDailyReportWhereInput[]
    NOT?: DetailDailyReportWhereInput | DetailDailyReportWhereInput[]
    id?: IntFilter<"DetailDailyReport"> | number
    judul_kegiatan?: StringFilter<"DetailDailyReport"> | string
    deskripsi_kegiatan?: StringFilter<"DetailDailyReport"> | string
    waktu?: DateTimeFilter<"DetailDailyReport"> | Date | string
    id_daily_report?: StringFilter<"DetailDailyReport"> | string
    DailyReport?: XOR<DailyReportScalarRelationFilter, DailyReportWhereInput>
  }

  export type DetailDailyReportOrderByWithRelationInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
    DailyReport?: DailyReportOrderByWithRelationInput
  }

  export type DetailDailyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetailDailyReportWhereInput | DetailDailyReportWhereInput[]
    OR?: DetailDailyReportWhereInput[]
    NOT?: DetailDailyReportWhereInput | DetailDailyReportWhereInput[]
    judul_kegiatan?: StringFilter<"DetailDailyReport"> | string
    deskripsi_kegiatan?: StringFilter<"DetailDailyReport"> | string
    waktu?: DateTimeFilter<"DetailDailyReport"> | Date | string
    id_daily_report?: StringFilter<"DetailDailyReport"> | string
    DailyReport?: XOR<DailyReportScalarRelationFilter, DailyReportWhereInput>
  }, "id">

  export type DetailDailyReportOrderByWithAggregationInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
    _count?: DetailDailyReportCountOrderByAggregateInput
    _avg?: DetailDailyReportAvgOrderByAggregateInput
    _max?: DetailDailyReportMaxOrderByAggregateInput
    _min?: DetailDailyReportMinOrderByAggregateInput
    _sum?: DetailDailyReportSumOrderByAggregateInput
  }

  export type DetailDailyReportScalarWhereWithAggregatesInput = {
    AND?: DetailDailyReportScalarWhereWithAggregatesInput | DetailDailyReportScalarWhereWithAggregatesInput[]
    OR?: DetailDailyReportScalarWhereWithAggregatesInput[]
    NOT?: DetailDailyReportScalarWhereWithAggregatesInput | DetailDailyReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetailDailyReport"> | number
    judul_kegiatan?: StringWithAggregatesFilter<"DetailDailyReport"> | string
    deskripsi_kegiatan?: StringWithAggregatesFilter<"DetailDailyReport"> | string
    waktu?: DateTimeWithAggregatesFilter<"DetailDailyReport"> | Date | string
    id_daily_report?: StringWithAggregatesFilter<"DetailDailyReport"> | string
  }

  export type DokumenWhereInput = {
    AND?: DokumenWhereInput | DokumenWhereInput[]
    OR?: DokumenWhereInput[]
    NOT?: DokumenWhereInput | DokumenWhereInput[]
    id?: StringFilter<"Dokumen"> | string
    nim?: StringFilter<"Dokumen"> | string
    jenis_dokumen?: EnumJenisDokumenFilter<"Dokumen"> | $Enums.JenisDokumen
    file_path?: StringFilter<"Dokumen"> | string
    tanggal_upload?: DateTimeFilter<"Dokumen"> | Date | string
    status?: EnumDokumenStatusFilter<"Dokumen"> | $Enums.DokumenStatus
    komentar?: StringNullableFilter<"Dokumen"> | string | null
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }

  export type DokumenOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrderInput | SortOrder
    Mahasiswa?: MahasiswaOrderByWithRelationInput
  }

  export type DokumenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DokumenWhereInput | DokumenWhereInput[]
    OR?: DokumenWhereInput[]
    NOT?: DokumenWhereInput | DokumenWhereInput[]
    nim?: StringFilter<"Dokumen"> | string
    jenis_dokumen?: EnumJenisDokumenFilter<"Dokumen"> | $Enums.JenisDokumen
    file_path?: StringFilter<"Dokumen"> | string
    tanggal_upload?: DateTimeFilter<"Dokumen"> | Date | string
    status?: EnumDokumenStatusFilter<"Dokumen"> | $Enums.DokumenStatus
    komentar?: StringNullableFilter<"Dokumen"> | string | null
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }, "id">

  export type DokumenOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrderInput | SortOrder
    _count?: DokumenCountOrderByAggregateInput
    _max?: DokumenMaxOrderByAggregateInput
    _min?: DokumenMinOrderByAggregateInput
  }

  export type DokumenScalarWhereWithAggregatesInput = {
    AND?: DokumenScalarWhereWithAggregatesInput | DokumenScalarWhereWithAggregatesInput[]
    OR?: DokumenScalarWhereWithAggregatesInput[]
    NOT?: DokumenScalarWhereWithAggregatesInput | DokumenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dokumen"> | string
    nim?: StringWithAggregatesFilter<"Dokumen"> | string
    jenis_dokumen?: EnumJenisDokumenWithAggregatesFilter<"Dokumen"> | $Enums.JenisDokumen
    file_path?: StringWithAggregatesFilter<"Dokumen"> | string
    tanggal_upload?: DateTimeWithAggregatesFilter<"Dokumen"> | Date | string
    status?: EnumDokumenStatusWithAggregatesFilter<"Dokumen"> | $Enums.DokumenStatus
    komentar?: StringNullableWithAggregatesFilter<"Dokumen"> | string | null
  }

  export type DosenWhereInput = {
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    nip?: StringFilter<"Dosen"> | string
    nama?: StringFilter<"Dosen"> | string
    email?: StringFilter<"Dosen"> | string
    no_hp?: StringFilter<"Dosen"> | string
    chat_id?: StringFilter<"Dosen"> | string
    Bimbingan?: BimbinganListRelationFilter
    Jadwal?: JadwalListRelationFilter
    NilaiPenguji?: NilaiListRelationFilter
    NilaiPembimbing?: NilaiListRelationFilter
    PendaftaranKP?: PendaftaranKPListRelationFilter
  }

  export type DosenOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    chat_id?: SortOrder
    Bimbingan?: BimbinganOrderByRelationAggregateInput
    Jadwal?: JadwalOrderByRelationAggregateInput
    NilaiPenguji?: NilaiOrderByRelationAggregateInput
    NilaiPembimbing?: NilaiOrderByRelationAggregateInput
    PendaftaranKP?: PendaftaranKPOrderByRelationAggregateInput
  }

  export type DosenWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    email?: string
    chat_id?: string
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    nama?: StringFilter<"Dosen"> | string
    no_hp?: StringFilter<"Dosen"> | string
    Bimbingan?: BimbinganListRelationFilter
    Jadwal?: JadwalListRelationFilter
    NilaiPenguji?: NilaiListRelationFilter
    NilaiPembimbing?: NilaiListRelationFilter
    PendaftaranKP?: PendaftaranKPListRelationFilter
  }, "nip" | "email" | "chat_id">

  export type DosenOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    chat_id?: SortOrder
    _count?: DosenCountOrderByAggregateInput
    _max?: DosenMaxOrderByAggregateInput
    _min?: DosenMinOrderByAggregateInput
  }

  export type DosenScalarWhereWithAggregatesInput = {
    AND?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    OR?: DosenScalarWhereWithAggregatesInput[]
    NOT?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"Dosen"> | string
    nama?: StringWithAggregatesFilter<"Dosen"> | string
    email?: StringWithAggregatesFilter<"Dosen"> | string
    no_hp?: StringWithAggregatesFilter<"Dosen"> | string
    chat_id?: StringWithAggregatesFilter<"Dosen"> | string
  }

  export type InstansiWhereInput = {
    AND?: InstansiWhereInput | InstansiWhereInput[]
    OR?: InstansiWhereInput[]
    NOT?: InstansiWhereInput | InstansiWhereInput[]
    id?: IntFilter<"Instansi"> | number
    nama?: StringFilter<"Instansi"> | string
    alamat?: StringFilter<"Instansi"> | string
    jenis?: EnumJenisInstansiFilter<"Instansi"> | $Enums.JenisInstansi
    profil_singkat?: StringFilter<"Instansi"> | string
    status?: EnumStatusInstansiFilter<"Instansi"> | $Enums.StatusInstansi
    PembimbingInstansi?: PembimbingInstansiListRelationFilter
  }

  export type InstansiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
    PembimbingInstansi?: PembimbingInstansiOrderByRelationAggregateInput
  }

  export type InstansiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstansiWhereInput | InstansiWhereInput[]
    OR?: InstansiWhereInput[]
    NOT?: InstansiWhereInput | InstansiWhereInput[]
    nama?: StringFilter<"Instansi"> | string
    alamat?: StringFilter<"Instansi"> | string
    jenis?: EnumJenisInstansiFilter<"Instansi"> | $Enums.JenisInstansi
    profil_singkat?: StringFilter<"Instansi"> | string
    status?: EnumStatusInstansiFilter<"Instansi"> | $Enums.StatusInstansi
    PembimbingInstansi?: PembimbingInstansiListRelationFilter
  }, "id">

  export type InstansiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
    _count?: InstansiCountOrderByAggregateInput
    _avg?: InstansiAvgOrderByAggregateInput
    _max?: InstansiMaxOrderByAggregateInput
    _min?: InstansiMinOrderByAggregateInput
    _sum?: InstansiSumOrderByAggregateInput
  }

  export type InstansiScalarWhereWithAggregatesInput = {
    AND?: InstansiScalarWhereWithAggregatesInput | InstansiScalarWhereWithAggregatesInput[]
    OR?: InstansiScalarWhereWithAggregatesInput[]
    NOT?: InstansiScalarWhereWithAggregatesInput | InstansiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instansi"> | number
    nama?: StringWithAggregatesFilter<"Instansi"> | string
    alamat?: StringWithAggregatesFilter<"Instansi"> | string
    jenis?: EnumJenisInstansiWithAggregatesFilter<"Instansi"> | $Enums.JenisInstansi
    profil_singkat?: StringWithAggregatesFilter<"Instansi"> | string
    status?: EnumStatusInstansiWithAggregatesFilter<"Instansi"> | $Enums.StatusInstansi
  }

  export type JadwalWhereInput = {
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    id?: StringFilter<"Jadwal"> | string
    nim?: StringFilter<"Jadwal"> | string
    nip?: StringFilter<"Jadwal"> | string
    tanggal?: DateTimeFilter<"Jadwal"> | Date | string
    waktu_mulai?: DateTimeFilter<"Jadwal"> | Date | string
    waktu_selesai?: DateTimeFilter<"Jadwal"> | Date | string
    ruangan_nama?: StringFilter<"Jadwal"> | string
    status?: EnumStatusSeminarFilter<"Jadwal"> | $Enums.StatusSeminar
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    Dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
    Ruangan?: XOR<RuanganScalarRelationFilter, RuanganWhereInput>
    Nilai?: XOR<NilaiNullableScalarRelationFilter, NilaiWhereInput> | null
  }

  export type JadwalOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
    Mahasiswa?: MahasiswaOrderByWithRelationInput
    Dosen?: DosenOrderByWithRelationInput
    Ruangan?: RuanganOrderByWithRelationInput
    Nilai?: NilaiOrderByWithRelationInput
  }

  export type JadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    nim?: StringFilter<"Jadwal"> | string
    nip?: StringFilter<"Jadwal"> | string
    tanggal?: DateTimeFilter<"Jadwal"> | Date | string
    waktu_mulai?: DateTimeFilter<"Jadwal"> | Date | string
    waktu_selesai?: DateTimeFilter<"Jadwal"> | Date | string
    ruangan_nama?: StringFilter<"Jadwal"> | string
    status?: EnumStatusSeminarFilter<"Jadwal"> | $Enums.StatusSeminar
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    Dosen?: XOR<DosenScalarRelationFilter, DosenWhereInput>
    Ruangan?: XOR<RuanganScalarRelationFilter, RuanganWhereInput>
    Nilai?: XOR<NilaiNullableScalarRelationFilter, NilaiWhereInput> | null
  }, "id">

  export type JadwalOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
    _count?: JadwalCountOrderByAggregateInput
    _max?: JadwalMaxOrderByAggregateInput
    _min?: JadwalMinOrderByAggregateInput
  }

  export type JadwalScalarWhereWithAggregatesInput = {
    AND?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    OR?: JadwalScalarWhereWithAggregatesInput[]
    NOT?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jadwal"> | string
    nim?: StringWithAggregatesFilter<"Jadwal"> | string
    nip?: StringWithAggregatesFilter<"Jadwal"> | string
    tanggal?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    waktu_mulai?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    waktu_selesai?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    ruangan_nama?: StringWithAggregatesFilter<"Jadwal"> | string
    status?: EnumStatusSeminarWithAggregatesFilter<"Jadwal"> | $Enums.StatusSeminar
  }

  export type LogJadwalWhereInput = {
    AND?: LogJadwalWhereInput | LogJadwalWhereInput[]
    OR?: LogJadwalWhereInput[]
    NOT?: LogJadwalWhereInput | LogJadwalWhereInput[]
    id?: StringFilter<"LogJadwal"> | string
    jadwal_seminar_id?: StringFilter<"LogJadwal"> | string
    log_type?: EnumLogTypeFilter<"LogJadwal"> | $Enums.LogType
    nip?: StringFilter<"LogJadwal"> | string
    tanggal_lama?: DateTimeNullableFilter<"LogJadwal"> | Date | string | null
    tanggal_baru?: DateTimeNullableFilter<"LogJadwal"> | Date | string | null
    ruangan_lama?: StringNullableFilter<"LogJadwal"> | string | null
    ruangan_baru?: StringNullableFilter<"LogJadwal"> | string | null
    keterangan?: StringNullableFilter<"LogJadwal"> | string | null
    created_at?: DateTimeFilter<"LogJadwal"> | Date | string
  }

  export type LogJadwalOrderByWithRelationInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrderInput | SortOrder
    tanggal_baru?: SortOrderInput | SortOrder
    ruangan_lama?: SortOrderInput | SortOrder
    ruangan_baru?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type LogJadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogJadwalWhereInput | LogJadwalWhereInput[]
    OR?: LogJadwalWhereInput[]
    NOT?: LogJadwalWhereInput | LogJadwalWhereInput[]
    jadwal_seminar_id?: StringFilter<"LogJadwal"> | string
    log_type?: EnumLogTypeFilter<"LogJadwal"> | $Enums.LogType
    nip?: StringFilter<"LogJadwal"> | string
    tanggal_lama?: DateTimeNullableFilter<"LogJadwal"> | Date | string | null
    tanggal_baru?: DateTimeNullableFilter<"LogJadwal"> | Date | string | null
    ruangan_lama?: StringNullableFilter<"LogJadwal"> | string | null
    ruangan_baru?: StringNullableFilter<"LogJadwal"> | string | null
    keterangan?: StringNullableFilter<"LogJadwal"> | string | null
    created_at?: DateTimeFilter<"LogJadwal"> | Date | string
  }, "id">

  export type LogJadwalOrderByWithAggregationInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrderInput | SortOrder
    tanggal_baru?: SortOrderInput | SortOrder
    ruangan_lama?: SortOrderInput | SortOrder
    ruangan_baru?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: LogJadwalCountOrderByAggregateInput
    _max?: LogJadwalMaxOrderByAggregateInput
    _min?: LogJadwalMinOrderByAggregateInput
  }

  export type LogJadwalScalarWhereWithAggregatesInput = {
    AND?: LogJadwalScalarWhereWithAggregatesInput | LogJadwalScalarWhereWithAggregatesInput[]
    OR?: LogJadwalScalarWhereWithAggregatesInput[]
    NOT?: LogJadwalScalarWhereWithAggregatesInput | LogJadwalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogJadwal"> | string
    jadwal_seminar_id?: StringWithAggregatesFilter<"LogJadwal"> | string
    log_type?: EnumLogTypeWithAggregatesFilter<"LogJadwal"> | $Enums.LogType
    nip?: StringWithAggregatesFilter<"LogJadwal"> | string
    tanggal_lama?: DateTimeNullableWithAggregatesFilter<"LogJadwal"> | Date | string | null
    tanggal_baru?: DateTimeNullableWithAggregatesFilter<"LogJadwal"> | Date | string | null
    ruangan_lama?: StringNullableWithAggregatesFilter<"LogJadwal"> | string | null
    ruangan_baru?: StringNullableWithAggregatesFilter<"LogJadwal"> | string | null
    keterangan?: StringNullableWithAggregatesFilter<"LogJadwal"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"LogJadwal"> | Date | string
  }

  export type MahasiswaWhereInput = {
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    nim?: StringFilter<"Mahasiswa"> | string
    nama?: StringFilter<"Mahasiswa"> | string
    email?: StringFilter<"Mahasiswa"> | string
    Bimbingan?: BimbinganListRelationFilter
    DailyReport?: DailyReportListRelationFilter
    Dokumen?: DokumenListRelationFilter
    Jadwal?: JadwalListRelationFilter
    NilaiInstansi?: XOR<NilaiInstansiNullableScalarRelationFilter, NilaiInstansiWhereInput> | null
    PendaftaranKP?: PendaftaranKPListRelationFilter
    Nilai?: NilaiListRelationFilter
  }

  export type MahasiswaOrderByWithRelationInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    Bimbingan?: BimbinganOrderByRelationAggregateInput
    DailyReport?: DailyReportOrderByRelationAggregateInput
    Dokumen?: DokumenOrderByRelationAggregateInput
    Jadwal?: JadwalOrderByRelationAggregateInput
    NilaiInstansi?: NilaiInstansiOrderByWithRelationInput
    PendaftaranKP?: PendaftaranKPOrderByRelationAggregateInput
    Nilai?: NilaiOrderByRelationAggregateInput
  }

  export type MahasiswaWhereUniqueInput = Prisma.AtLeast<{
    nim?: string
    email?: string
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    nama?: StringFilter<"Mahasiswa"> | string
    Bimbingan?: BimbinganListRelationFilter
    DailyReport?: DailyReportListRelationFilter
    Dokumen?: DokumenListRelationFilter
    Jadwal?: JadwalListRelationFilter
    NilaiInstansi?: XOR<NilaiInstansiNullableScalarRelationFilter, NilaiInstansiWhereInput> | null
    PendaftaranKP?: PendaftaranKPListRelationFilter
    Nilai?: NilaiListRelationFilter
  }, "nim" | "email">

  export type MahasiswaOrderByWithAggregationInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    _count?: MahasiswaCountOrderByAggregateInput
    _max?: MahasiswaMaxOrderByAggregateInput
    _min?: MahasiswaMinOrderByAggregateInput
  }

  export type MahasiswaScalarWhereWithAggregatesInput = {
    AND?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    OR?: MahasiswaScalarWhereWithAggregatesInput[]
    NOT?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    nim?: StringWithAggregatesFilter<"Mahasiswa"> | string
    nama?: StringWithAggregatesFilter<"Mahasiswa"> | string
    email?: StringWithAggregatesFilter<"Mahasiswa"> | string
  }

  export type NilaiWhereInput = {
    AND?: NilaiWhereInput | NilaiWhereInput[]
    OR?: NilaiWhereInput[]
    NOT?: NilaiWhereInput | NilaiWhereInput[]
    id?: StringFilter<"Nilai"> | string
    nim?: StringFilter<"Nilai"> | string
    jadwal_seminar_id?: StringFilter<"Nilai"> | string
    nip_penguji?: StringFilter<"Nilai"> | string
    nip_pembimbing?: StringFilter<"Nilai"> | string
    nilai_pembimbing?: FloatFilter<"Nilai"> | number
    nilai_penguji?: FloatFilter<"Nilai"> | number
    note_pembimbing?: StringNullableFilter<"Nilai"> | string | null
    note_penguji?: StringNullableFilter<"Nilai"> | string | null
    Jadwal?: XOR<JadwalScalarRelationFilter, JadwalWhereInput>
    DosenPenguji?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    DosenPembimbing?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    Mahasiswa?: MahasiswaListRelationFilter
  }

  export type NilaiOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrderInput | SortOrder
    note_penguji?: SortOrderInput | SortOrder
    Jadwal?: JadwalOrderByWithRelationInput
    DosenPenguji?: DosenOrderByWithRelationInput
    DosenPembimbing?: DosenOrderByWithRelationInput
    Mahasiswa?: MahasiswaOrderByRelationAggregateInput
  }

  export type NilaiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jadwal_seminar_id?: string
    AND?: NilaiWhereInput | NilaiWhereInput[]
    OR?: NilaiWhereInput[]
    NOT?: NilaiWhereInput | NilaiWhereInput[]
    nim?: StringFilter<"Nilai"> | string
    nip_penguji?: StringFilter<"Nilai"> | string
    nip_pembimbing?: StringFilter<"Nilai"> | string
    nilai_pembimbing?: FloatFilter<"Nilai"> | number
    nilai_penguji?: FloatFilter<"Nilai"> | number
    note_pembimbing?: StringNullableFilter<"Nilai"> | string | null
    note_penguji?: StringNullableFilter<"Nilai"> | string | null
    Jadwal?: XOR<JadwalScalarRelationFilter, JadwalWhereInput>
    DosenPenguji?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    DosenPembimbing?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    Mahasiswa?: MahasiswaListRelationFilter
  }, "id" | "jadwal_seminar_id">

  export type NilaiOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrderInput | SortOrder
    note_penguji?: SortOrderInput | SortOrder
    _count?: NilaiCountOrderByAggregateInput
    _avg?: NilaiAvgOrderByAggregateInput
    _max?: NilaiMaxOrderByAggregateInput
    _min?: NilaiMinOrderByAggregateInput
    _sum?: NilaiSumOrderByAggregateInput
  }

  export type NilaiScalarWhereWithAggregatesInput = {
    AND?: NilaiScalarWhereWithAggregatesInput | NilaiScalarWhereWithAggregatesInput[]
    OR?: NilaiScalarWhereWithAggregatesInput[]
    NOT?: NilaiScalarWhereWithAggregatesInput | NilaiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Nilai"> | string
    nim?: StringWithAggregatesFilter<"Nilai"> | string
    jadwal_seminar_id?: StringWithAggregatesFilter<"Nilai"> | string
    nip_penguji?: StringWithAggregatesFilter<"Nilai"> | string
    nip_pembimbing?: StringWithAggregatesFilter<"Nilai"> | string
    nilai_pembimbing?: FloatWithAggregatesFilter<"Nilai"> | number
    nilai_penguji?: FloatWithAggregatesFilter<"Nilai"> | number
    note_pembimbing?: StringNullableWithAggregatesFilter<"Nilai"> | string | null
    note_penguji?: StringNullableWithAggregatesFilter<"Nilai"> | string | null
  }

  export type NilaiInstansiWhereInput = {
    AND?: NilaiInstansiWhereInput | NilaiInstansiWhereInput[]
    OR?: NilaiInstansiWhereInput[]
    NOT?: NilaiInstansiWhereInput | NilaiInstansiWhereInput[]
    id?: StringFilter<"NilaiInstansi"> | string
    tanggal?: DateTimeFilter<"NilaiInstansi"> | Date | string
    nilai_angka?: FloatFilter<"NilaiInstansi"> | number
    nilai_huruf?: StringFilter<"NilaiInstansi"> | string
    nim?: StringFilter<"NilaiInstansi"> | string
    id_pembimbing_instansi?: StringFilter<"NilaiInstansi"> | string
    PembimbingInstansi?: XOR<PembimbingInstansiScalarRelationFilter, PembimbingInstansiWhereInput>
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }

  export type NilaiInstansiOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
    PembimbingInstansi?: PembimbingInstansiOrderByWithRelationInput
    Mahasiswa?: MahasiswaOrderByWithRelationInput
  }

  export type NilaiInstansiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nim?: string
    AND?: NilaiInstansiWhereInput | NilaiInstansiWhereInput[]
    OR?: NilaiInstansiWhereInput[]
    NOT?: NilaiInstansiWhereInput | NilaiInstansiWhereInput[]
    tanggal?: DateTimeFilter<"NilaiInstansi"> | Date | string
    nilai_angka?: FloatFilter<"NilaiInstansi"> | number
    nilai_huruf?: StringFilter<"NilaiInstansi"> | string
    id_pembimbing_instansi?: StringFilter<"NilaiInstansi"> | string
    PembimbingInstansi?: XOR<PembimbingInstansiScalarRelationFilter, PembimbingInstansiWhereInput>
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }, "id" | "nim">

  export type NilaiInstansiOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
    _count?: NilaiInstansiCountOrderByAggregateInput
    _avg?: NilaiInstansiAvgOrderByAggregateInput
    _max?: NilaiInstansiMaxOrderByAggregateInput
    _min?: NilaiInstansiMinOrderByAggregateInput
    _sum?: NilaiInstansiSumOrderByAggregateInput
  }

  export type NilaiInstansiScalarWhereWithAggregatesInput = {
    AND?: NilaiInstansiScalarWhereWithAggregatesInput | NilaiInstansiScalarWhereWithAggregatesInput[]
    OR?: NilaiInstansiScalarWhereWithAggregatesInput[]
    NOT?: NilaiInstansiScalarWhereWithAggregatesInput | NilaiInstansiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NilaiInstansi"> | string
    tanggal?: DateTimeWithAggregatesFilter<"NilaiInstansi"> | Date | string
    nilai_angka?: FloatWithAggregatesFilter<"NilaiInstansi"> | number
    nilai_huruf?: StringWithAggregatesFilter<"NilaiInstansi"> | string
    nim?: StringWithAggregatesFilter<"NilaiInstansi"> | string
    id_pembimbing_instansi?: StringWithAggregatesFilter<"NilaiInstansi"> | string
  }

  export type PembimbingInstansiWhereInput = {
    AND?: PembimbingInstansiWhereInput | PembimbingInstansiWhereInput[]
    OR?: PembimbingInstansiWhereInput[]
    NOT?: PembimbingInstansiWhereInput | PembimbingInstansiWhereInput[]
    id?: StringFilter<"PembimbingInstansi"> | string
    nama?: StringFilter<"PembimbingInstansi"> | string
    email?: StringFilter<"PembimbingInstansi"> | string
    jabatan?: StringFilter<"PembimbingInstansi"> | string
    no_hp?: StringFilter<"PembimbingInstansi"> | string
    id_instansi?: IntFilter<"PembimbingInstansi"> | number
    NilaiInstansi?: NilaiInstansiListRelationFilter
    Instansi?: XOR<InstansiScalarRelationFilter, InstansiWhereInput>
    PendaftaranKP?: PendaftaranKPListRelationFilter
  }

  export type PembimbingInstansiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
    NilaiInstansi?: NilaiInstansiOrderByRelationAggregateInput
    Instansi?: InstansiOrderByWithRelationInput
    PendaftaranKP?: PendaftaranKPOrderByRelationAggregateInput
  }

  export type PembimbingInstansiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PembimbingInstansiWhereInput | PembimbingInstansiWhereInput[]
    OR?: PembimbingInstansiWhereInput[]
    NOT?: PembimbingInstansiWhereInput | PembimbingInstansiWhereInput[]
    nama?: StringFilter<"PembimbingInstansi"> | string
    jabatan?: StringFilter<"PembimbingInstansi"> | string
    no_hp?: StringFilter<"PembimbingInstansi"> | string
    id_instansi?: IntFilter<"PembimbingInstansi"> | number
    NilaiInstansi?: NilaiInstansiListRelationFilter
    Instansi?: XOR<InstansiScalarRelationFilter, InstansiWhereInput>
    PendaftaranKP?: PendaftaranKPListRelationFilter
  }, "id" | "email">

  export type PembimbingInstansiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
    _count?: PembimbingInstansiCountOrderByAggregateInput
    _avg?: PembimbingInstansiAvgOrderByAggregateInput
    _max?: PembimbingInstansiMaxOrderByAggregateInput
    _min?: PembimbingInstansiMinOrderByAggregateInput
    _sum?: PembimbingInstansiSumOrderByAggregateInput
  }

  export type PembimbingInstansiScalarWhereWithAggregatesInput = {
    AND?: PembimbingInstansiScalarWhereWithAggregatesInput | PembimbingInstansiScalarWhereWithAggregatesInput[]
    OR?: PembimbingInstansiScalarWhereWithAggregatesInput[]
    NOT?: PembimbingInstansiScalarWhereWithAggregatesInput | PembimbingInstansiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PembimbingInstansi"> | string
    nama?: StringWithAggregatesFilter<"PembimbingInstansi"> | string
    email?: StringWithAggregatesFilter<"PembimbingInstansi"> | string
    jabatan?: StringWithAggregatesFilter<"PembimbingInstansi"> | string
    no_hp?: StringWithAggregatesFilter<"PembimbingInstansi"> | string
    id_instansi?: IntWithAggregatesFilter<"PembimbingInstansi"> | number
  }

  export type PendaftaranKPWhereInput = {
    AND?: PendaftaranKPWhereInput | PendaftaranKPWhereInput[]
    OR?: PendaftaranKPWhereInput[]
    NOT?: PendaftaranKPWhereInput | PendaftaranKPWhereInput[]
    nim?: StringFilter<"PendaftaranKP"> | string
    semester?: IntFilter<"PendaftaranKP"> | number
    tanggalTerdaftar?: DateTimeFilter<"PendaftaranKP"> | Date | string
    tanggalMulai?: DateTimeNullableFilter<"PendaftaranKP"> | Date | string | null
    tenggatWaktu?: DateTimeFilter<"PendaftaranKP"> | Date | string
    gagal?: BoolFilter<"PendaftaranKP"> | boolean
    tanggalSelesai?: DateTimeNullableFilter<"PendaftaranKP"> | Date | string | null
    linkSuratPengantar?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratBalasan?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratPenunjukkanDospem?: StringNullableFilter<"PendaftaranKP"> | string | null
    alasanLanjutKP?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratPerpanjanganKP?: StringNullableFilter<"PendaftaranKP"> | string | null
    id_pembimbing_instansi?: StringFilter<"PendaftaranKP"> | string
    nip?: StringNullableFilter<"PendaftaranKP"> | string | null
    PembimbingInstansi?: XOR<PembimbingInstansiScalarRelationFilter, PembimbingInstansiWhereInput>
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    Dosen?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
  }

  export type PendaftaranKPOrderByWithRelationInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    linkSuratPengantar?: SortOrderInput | SortOrder
    linkSuratBalasan?: SortOrderInput | SortOrder
    linkSuratPenunjukkanDospem?: SortOrderInput | SortOrder
    alasanLanjutKP?: SortOrderInput | SortOrder
    linkSuratPerpanjanganKP?: SortOrderInput | SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrderInput | SortOrder
    PembimbingInstansi?: PembimbingInstansiOrderByWithRelationInput
    Mahasiswa?: MahasiswaOrderByWithRelationInput
    Dosen?: DosenOrderByWithRelationInput
  }

  export type PendaftaranKPWhereUniqueInput = Prisma.AtLeast<{
    nim_semester?: PendaftaranKPNimSemesterCompoundUniqueInput
    AND?: PendaftaranKPWhereInput | PendaftaranKPWhereInput[]
    OR?: PendaftaranKPWhereInput[]
    NOT?: PendaftaranKPWhereInput | PendaftaranKPWhereInput[]
    nim?: StringFilter<"PendaftaranKP"> | string
    semester?: IntFilter<"PendaftaranKP"> | number
    tanggalTerdaftar?: DateTimeFilter<"PendaftaranKP"> | Date | string
    tanggalMulai?: DateTimeNullableFilter<"PendaftaranKP"> | Date | string | null
    tenggatWaktu?: DateTimeFilter<"PendaftaranKP"> | Date | string
    gagal?: BoolFilter<"PendaftaranKP"> | boolean
    tanggalSelesai?: DateTimeNullableFilter<"PendaftaranKP"> | Date | string | null
    linkSuratPengantar?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratBalasan?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratPenunjukkanDospem?: StringNullableFilter<"PendaftaranKP"> | string | null
    alasanLanjutKP?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratPerpanjanganKP?: StringNullableFilter<"PendaftaranKP"> | string | null
    id_pembimbing_instansi?: StringFilter<"PendaftaranKP"> | string
    nip?: StringNullableFilter<"PendaftaranKP"> | string | null
    PembimbingInstansi?: XOR<PembimbingInstansiScalarRelationFilter, PembimbingInstansiWhereInput>
    Mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    Dosen?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
  }, "nim_semester">

  export type PendaftaranKPOrderByWithAggregationInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    linkSuratPengantar?: SortOrderInput | SortOrder
    linkSuratBalasan?: SortOrderInput | SortOrder
    linkSuratPenunjukkanDospem?: SortOrderInput | SortOrder
    alasanLanjutKP?: SortOrderInput | SortOrder
    linkSuratPerpanjanganKP?: SortOrderInput | SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrderInput | SortOrder
    _count?: PendaftaranKPCountOrderByAggregateInput
    _avg?: PendaftaranKPAvgOrderByAggregateInput
    _max?: PendaftaranKPMaxOrderByAggregateInput
    _min?: PendaftaranKPMinOrderByAggregateInput
    _sum?: PendaftaranKPSumOrderByAggregateInput
  }

  export type PendaftaranKPScalarWhereWithAggregatesInput = {
    AND?: PendaftaranKPScalarWhereWithAggregatesInput | PendaftaranKPScalarWhereWithAggregatesInput[]
    OR?: PendaftaranKPScalarWhereWithAggregatesInput[]
    NOT?: PendaftaranKPScalarWhereWithAggregatesInput | PendaftaranKPScalarWhereWithAggregatesInput[]
    nim?: StringWithAggregatesFilter<"PendaftaranKP"> | string
    semester?: IntWithAggregatesFilter<"PendaftaranKP"> | number
    tanggalTerdaftar?: DateTimeWithAggregatesFilter<"PendaftaranKP"> | Date | string
    tanggalMulai?: DateTimeNullableWithAggregatesFilter<"PendaftaranKP"> | Date | string | null
    tenggatWaktu?: DateTimeWithAggregatesFilter<"PendaftaranKP"> | Date | string
    gagal?: BoolWithAggregatesFilter<"PendaftaranKP"> | boolean
    tanggalSelesai?: DateTimeNullableWithAggregatesFilter<"PendaftaranKP"> | Date | string | null
    linkSuratPengantar?: StringNullableWithAggregatesFilter<"PendaftaranKP"> | string | null
    linkSuratBalasan?: StringNullableWithAggregatesFilter<"PendaftaranKP"> | string | null
    linkSuratPenunjukkanDospem?: StringNullableWithAggregatesFilter<"PendaftaranKP"> | string | null
    alasanLanjutKP?: StringNullableWithAggregatesFilter<"PendaftaranKP"> | string | null
    linkSuratPerpanjanganKP?: StringNullableWithAggregatesFilter<"PendaftaranKP"> | string | null
    id_pembimbing_instansi?: StringWithAggregatesFilter<"PendaftaranKP"> | string
    nip?: StringNullableWithAggregatesFilter<"PendaftaranKP"> | string | null
  }

  export type RuanganWhereInput = {
    AND?: RuanganWhereInput | RuanganWhereInput[]
    OR?: RuanganWhereInput[]
    NOT?: RuanganWhereInput | RuanganWhereInput[]
    nama?: StringFilter<"Ruangan"> | string
    Jadwal?: JadwalListRelationFilter
  }

  export type RuanganOrderByWithRelationInput = {
    nama?: SortOrder
    Jadwal?: JadwalOrderByRelationAggregateInput
  }

  export type RuanganWhereUniqueInput = Prisma.AtLeast<{
    nama?: string
    AND?: RuanganWhereInput | RuanganWhereInput[]
    OR?: RuanganWhereInput[]
    NOT?: RuanganWhereInput | RuanganWhereInput[]
    Jadwal?: JadwalListRelationFilter
  }, "nama" | "nama">

  export type RuanganOrderByWithAggregationInput = {
    nama?: SortOrder
    _count?: RuanganCountOrderByAggregateInput
    _max?: RuanganMaxOrderByAggregateInput
    _min?: RuanganMinOrderByAggregateInput
  }

  export type RuanganScalarWhereWithAggregatesInput = {
    AND?: RuanganScalarWhereWithAggregatesInput | RuanganScalarWhereWithAggregatesInput[]
    OR?: RuanganScalarWhereWithAggregatesInput[]
    NOT?: RuanganScalarWhereWithAggregatesInput | RuanganScalarWhereWithAggregatesInput[]
    nama?: StringWithAggregatesFilter<"Ruangan"> | string
  }

  export type BimbinganCreateInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    Mahasiswa: MahasiswaCreateNestedOneWithoutBimbinganInput
    Dosen: DosenCreateNestedOneWithoutBimbinganInput
  }

  export type BimbinganUncheckedCreateInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
    nip: string
  }

  export type BimbinganUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutBimbinganNestedInput
    Dosen?: DosenUpdateOneRequiredWithoutBimbinganNestedInput
  }

  export type BimbinganUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type BimbinganCreateManyInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
    nip: string
  }

  export type BimbinganUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
  }

  export type BimbinganUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type DailyReportCreateInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    Mahasiswa: MahasiswaCreateNestedOneWithoutDailyReportInput
    DetailDailyReport?: DetailDailyReportCreateNestedManyWithoutDailyReportInput
  }

  export type DailyReportUncheckedCreateInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    nim: string
    DetailDailyReport?: DetailDailyReportUncheckedCreateNestedManyWithoutDailyReportInput
  }

  export type DailyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutDailyReportNestedInput
    DetailDailyReport?: DetailDailyReportUpdateManyWithoutDailyReportNestedInput
  }

  export type DailyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
    DetailDailyReport?: DetailDailyReportUncheckedUpdateManyWithoutDailyReportNestedInput
  }

  export type DailyReportCreateManyInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    nim: string
  }

  export type DailyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type DetailDailyReportCreateInput = {
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
    DailyReport: DailyReportCreateNestedOneWithoutDetailDailyReportInput
  }

  export type DetailDailyReportUncheckedCreateInput = {
    id?: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
    id_daily_report: string
  }

  export type DetailDailyReportUpdateInput = {
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    DailyReport?: DailyReportUpdateOneRequiredWithoutDetailDailyReportNestedInput
  }

  export type DetailDailyReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    id_daily_report?: StringFieldUpdateOperationsInput | string
  }

  export type DetailDailyReportCreateManyInput = {
    id?: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
    id_daily_report: string
  }

  export type DetailDailyReportUpdateManyMutationInput = {
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailDailyReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
    id_daily_report?: StringFieldUpdateOperationsInput | string
  }

  export type DokumenCreateInput = {
    id: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
    Mahasiswa: MahasiswaCreateNestedOneWithoutDokumenInput
  }

  export type DokumenUncheckedCreateInput = {
    id: string
    nim: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type DokumenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutDokumenNestedInput
  }

  export type DokumenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DokumenCreateManyInput = {
    id: string
    nim: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type DokumenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DokumenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DosenCreateInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganCreateNestedManyWithoutDosenInput
    Jadwal?: JadwalCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiCreateNestedManyWithoutDosenPengujiInput
    NilaiPembimbing?: NilaiCreateNestedManyWithoutDosenPembimbingInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutDosenInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiUncheckedCreateNestedManyWithoutDosenPengujiInput
    NilaiPembimbing?: NilaiUncheckedCreateNestedManyWithoutDosenPembimbingInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutDosenNestedInput
    Jadwal?: JadwalUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUpdateManyWithoutDosenPengujiNestedInput
    NilaiPembimbing?: NilaiUpdateManyWithoutDosenPembimbingNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutDosenNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUncheckedUpdateManyWithoutDosenPengujiNestedInput
    NilaiPembimbing?: NilaiUncheckedUpdateManyWithoutDosenPembimbingNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type DosenCreateManyInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
  }

  export type DosenUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type DosenUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type InstansiCreateInput = {
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
    PembimbingInstansi?: PembimbingInstansiCreateNestedManyWithoutInstansiInput
  }

  export type InstansiUncheckedCreateInput = {
    id?: number
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
    PembimbingInstansi?: PembimbingInstansiUncheckedCreateNestedManyWithoutInstansiInput
  }

  export type InstansiUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
    PembimbingInstansi?: PembimbingInstansiUpdateManyWithoutInstansiNestedInput
  }

  export type InstansiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
    PembimbingInstansi?: PembimbingInstansiUncheckedUpdateManyWithoutInstansiNestedInput
  }

  export type InstansiCreateManyInput = {
    id?: number
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
  }

  export type InstansiUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
  }

  export type InstansiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
  }

  export type JadwalCreateInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    Mahasiswa: MahasiswaCreateNestedOneWithoutJadwalInput
    Dosen: DosenCreateNestedOneWithoutJadwalInput
    Ruangan: RuanganCreateNestedOneWithoutJadwalInput
    Nilai?: NilaiCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
    Nilai?: NilaiUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutJadwalNestedInput
    Dosen?: DosenUpdateOneRequiredWithoutJadwalNestedInput
    Ruangan?: RuanganUpdateOneRequiredWithoutJadwalNestedInput
    Nilai?: NilaiUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Nilai?: NilaiUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalCreateManyInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
  }

  export type JadwalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type JadwalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type LogJadwalCreateInput = {
    id: string
    jadwal_seminar_id: string
    log_type: $Enums.LogType
    nip: string
    tanggal_lama?: Date | string | null
    tanggal_baru?: Date | string | null
    ruangan_lama?: string | null
    ruangan_baru?: string | null
    keterangan?: string | null
    created_at?: Date | string
  }

  export type LogJadwalUncheckedCreateInput = {
    id: string
    jadwal_seminar_id: string
    log_type: $Enums.LogType
    nip: string
    tanggal_lama?: Date | string | null
    tanggal_baru?: Date | string | null
    ruangan_lama?: string | null
    ruangan_baru?: string | null
    keterangan?: string | null
    created_at?: Date | string
  }

  export type LogJadwalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    log_type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    nip?: StringFieldUpdateOperationsInput | string
    tanggal_lama?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_baru?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ruangan_lama?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan_baru?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogJadwalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    log_type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    nip?: StringFieldUpdateOperationsInput | string
    tanggal_lama?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_baru?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ruangan_lama?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan_baru?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogJadwalCreateManyInput = {
    id: string
    jadwal_seminar_id: string
    log_type: $Enums.LogType
    nip: string
    tanggal_lama?: Date | string | null
    tanggal_baru?: Date | string | null
    ruangan_lama?: string | null
    ruangan_baru?: string | null
    keterangan?: string | null
    created_at?: Date | string
  }

  export type LogJadwalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    log_type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    nip?: StringFieldUpdateOperationsInput | string
    tanggal_lama?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_baru?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ruangan_lama?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan_baru?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogJadwalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    log_type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    nip?: StringFieldUpdateOperationsInput | string
    tanggal_lama?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_baru?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ruangan_lama?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan_baru?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaCreateInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportUncheckedCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUncheckedUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaCreateManyInput = {
    nim: string
    nama: string
    email: string
  }

  export type MahasiswaUpdateManyMutationInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaUncheckedUpdateManyInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NilaiCreateInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    Jadwal: JadwalCreateNestedOneWithoutNilaiInput
    DosenPenguji?: DosenCreateNestedOneWithoutNilaiPengujiInput
    DosenPembimbing?: DosenCreateNestedOneWithoutNilaiPembimbingInput
    Mahasiswa?: MahasiswaCreateNestedManyWithoutNilaiInput
  }

  export type NilaiUncheckedCreateInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    Mahasiswa?: MahasiswaUncheckedCreateNestedManyWithoutNilaiInput
  }

  export type NilaiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    Jadwal?: JadwalUpdateOneRequiredWithoutNilaiNestedInput
    DosenPenguji?: DosenUpdateOneWithoutNilaiPengujiNestedInput
    DosenPembimbing?: DosenUpdateOneWithoutNilaiPembimbingNestedInput
    Mahasiswa?: MahasiswaUpdateManyWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    Mahasiswa?: MahasiswaUncheckedUpdateManyWithoutNilaiNestedInput
  }

  export type NilaiCreateManyInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
  }

  export type NilaiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NilaiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NilaiInstansiCreateInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    PembimbingInstansi: PembimbingInstansiCreateNestedOneWithoutNilaiInstansiInput
    Mahasiswa: MahasiswaCreateNestedOneWithoutNilaiInstansiInput
  }

  export type NilaiInstansiUncheckedCreateInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    nim: string
    id_pembimbing_instansi: string
  }

  export type NilaiInstansiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    PembimbingInstansi?: PembimbingInstansiUpdateOneRequiredWithoutNilaiInstansiNestedInput
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutNilaiInstansiNestedInput
  }

  export type NilaiInstansiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type NilaiInstansiCreateManyInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    nim: string
    id_pembimbing_instansi: string
  }

  export type NilaiInstansiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
  }

  export type NilaiInstansiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type PembimbingInstansiCreateInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    NilaiInstansi?: NilaiInstansiCreateNestedManyWithoutPembimbingInstansiInput
    Instansi: InstansiCreateNestedOneWithoutPembimbingInstansiInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutPembimbingInstansiInput
  }

  export type PembimbingInstansiUncheckedCreateInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedManyWithoutPembimbingInstansiInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutPembimbingInstansiInput
  }

  export type PembimbingInstansiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    NilaiInstansi?: NilaiInstansiUpdateManyWithoutPembimbingInstansiNestedInput
    Instansi?: InstansiUpdateOneRequiredWithoutPembimbingInstansiNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutPembimbingInstansiNestedInput
  }

  export type PembimbingInstansiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_instansi?: IntFieldUpdateOperationsInput | number
    NilaiInstansi?: NilaiInstansiUncheckedUpdateManyWithoutPembimbingInstansiNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutPembimbingInstansiNestedInput
  }

  export type PembimbingInstansiCreateManyInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
  }

  export type PembimbingInstansiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
  }

  export type PembimbingInstansiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_instansi?: IntFieldUpdateOperationsInput | number
  }

  export type PendaftaranKPCreateInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    PembimbingInstansi: PembimbingInstansiCreateNestedOneWithoutPendaftaranKPInput
    Mahasiswa: MahasiswaCreateNestedOneWithoutPendaftaranKPInput
    Dosen?: DosenCreateNestedOneWithoutPendaftaranKPInput
  }

  export type PendaftaranKPUncheckedCreateInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
    nip?: string | null
  }

  export type PendaftaranKPUpdateInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    PembimbingInstansi?: PembimbingInstansiUpdateOneRequiredWithoutPendaftaranKPNestedInput
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutPendaftaranKPNestedInput
    Dosen?: DosenUpdateOneWithoutPendaftaranKPNestedInput
  }

  export type PendaftaranKPUncheckedUpdateInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendaftaranKPCreateManyInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
    nip?: string | null
  }

  export type PendaftaranKPUpdateManyMutationInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendaftaranKPUncheckedUpdateManyInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuanganCreateInput = {
    nama: string
    Jadwal?: JadwalCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUncheckedCreateInput = {
    nama: string
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    Jadwal?: JadwalUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    Jadwal?: JadwalUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganCreateManyInput = {
    nama: string
  }

  export type RuanganUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type RuanganUncheckedUpdateManyInput = {
    nama?: StringFieldUpdateOperationsInput | string
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

  export type EnumStatusValidasiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusValidasi | EnumStatusValidasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusValidasiFilter<$PrismaModel> | $Enums.StatusValidasi
  }

  export type MahasiswaScalarRelationFilter = {
    is?: MahasiswaWhereInput
    isNot?: MahasiswaWhereInput
  }

  export type DosenScalarRelationFilter = {
    is?: DosenWhereInput
    isNot?: DosenWhereInput
  }

  export type BimbinganCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type BimbinganMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type BimbinganMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
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

  export type EnumStatusValidasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusValidasi | EnumStatusValidasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusValidasiWithAggregatesFilter<$PrismaModel> | $Enums.StatusValidasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusValidasiFilter<$PrismaModel>
    _max?: NestedEnumStatusValidasiFilter<$PrismaModel>
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

  export type DetailDailyReportListRelationFilter = {
    every?: DetailDailyReportWhereInput
    some?: DetailDailyReportWhereInput
    none?: DetailDailyReportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DetailDailyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyReportCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
  }

  export type DailyReportAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DailyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
  }

  export type DailyReportMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nim?: SortOrder
  }

  export type DailyReportSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type DailyReportScalarRelationFilter = {
    is?: DailyReportWhereInput
    isNot?: DailyReportWhereInput
  }

  export type DetailDailyReportCountOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
  }

  export type DetailDailyReportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetailDailyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
  }

  export type DetailDailyReportMinOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    deskripsi_kegiatan?: SortOrder
    waktu?: SortOrder
    id_daily_report?: SortOrder
  }

  export type DetailDailyReportSumOrderByAggregateInput = {
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

  export type EnumJenisDokumenFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisDokumenFilter<$PrismaModel> | $Enums.JenisDokumen
  }

  export type EnumDokumenStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DokumenStatus | EnumDokumenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDokumenStatusFilter<$PrismaModel> | $Enums.DokumenStatus
  }

  export type DokumenCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrder
  }

  export type DokumenMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrder
  }

  export type DokumenMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jenis_dokumen?: SortOrder
    file_path?: SortOrder
    tanggal_upload?: SortOrder
    status?: SortOrder
    komentar?: SortOrder
  }

  export type EnumJenisDokumenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel> | $Enums.JenisDokumen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisDokumenFilter<$PrismaModel>
    _max?: NestedEnumJenisDokumenFilter<$PrismaModel>
  }

  export type EnumDokumenStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DokumenStatus | EnumDokumenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDokumenStatusWithAggregatesFilter<$PrismaModel> | $Enums.DokumenStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDokumenStatusFilter<$PrismaModel>
    _max?: NestedEnumDokumenStatusFilter<$PrismaModel>
  }

  export type BimbinganListRelationFilter = {
    every?: BimbinganWhereInput
    some?: BimbinganWhereInput
    none?: BimbinganWhereInput
  }

  export type JadwalListRelationFilter = {
    every?: JadwalWhereInput
    some?: JadwalWhereInput
    none?: JadwalWhereInput
  }

  export type NilaiListRelationFilter = {
    every?: NilaiWhereInput
    some?: NilaiWhereInput
    none?: NilaiWhereInput
  }

  export type PendaftaranKPListRelationFilter = {
    every?: PendaftaranKPWhereInput
    some?: PendaftaranKPWhereInput
    none?: PendaftaranKPWhereInput
  }

  export type BimbinganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JadwalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NilaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PendaftaranKPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DosenCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    chat_id?: SortOrder
  }

  export type DosenMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    chat_id?: SortOrder
  }

  export type DosenMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_hp?: SortOrder
    chat_id?: SortOrder
  }

  export type EnumJenisInstansiFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisInstansi | EnumJenisInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisInstansiFilter<$PrismaModel> | $Enums.JenisInstansi
  }

  export type EnumStatusInstansiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInstansi | EnumStatusInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInstansiFilter<$PrismaModel> | $Enums.StatusInstansi
  }

  export type PembimbingInstansiListRelationFilter = {
    every?: PembimbingInstansiWhereInput
    some?: PembimbingInstansiWhereInput
    none?: PembimbingInstansiWhereInput
  }

  export type PembimbingInstansiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstansiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
  }

  export type InstansiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstansiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
  }

  export type InstansiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    jenis?: SortOrder
    profil_singkat?: SortOrder
    status?: SortOrder
  }

  export type InstansiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumJenisInstansiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisInstansi | EnumJenisInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisInstansiWithAggregatesFilter<$PrismaModel> | $Enums.JenisInstansi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisInstansiFilter<$PrismaModel>
    _max?: NestedEnumJenisInstansiFilter<$PrismaModel>
  }

  export type EnumStatusInstansiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInstansi | EnumStatusInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInstansiWithAggregatesFilter<$PrismaModel> | $Enums.StatusInstansi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusInstansiFilter<$PrismaModel>
    _max?: NestedEnumStatusInstansiFilter<$PrismaModel>
  }

  export type EnumStatusSeminarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSeminar | EnumStatusSeminarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSeminarFilter<$PrismaModel> | $Enums.StatusSeminar
  }

  export type RuanganScalarRelationFilter = {
    is?: RuanganWhereInput
    isNot?: RuanganWhereInput
  }

  export type NilaiNullableScalarRelationFilter = {
    is?: NilaiWhereInput | null
    isNot?: NilaiWhereInput | null
  }

  export type JadwalCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
  }

  export type JadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
  }

  export type JadwalMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
    tanggal?: SortOrder
    waktu_mulai?: SortOrder
    waktu_selesai?: SortOrder
    ruangan_nama?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusSeminarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSeminar | EnumStatusSeminarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSeminarWithAggregatesFilter<$PrismaModel> | $Enums.StatusSeminar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSeminarFilter<$PrismaModel>
    _max?: NestedEnumStatusSeminarFilter<$PrismaModel>
  }

  export type EnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
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

  export type LogJadwalCountOrderByAggregateInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrder
    tanggal_baru?: SortOrder
    ruangan_lama?: SortOrder
    ruangan_baru?: SortOrder
    keterangan?: SortOrder
    created_at?: SortOrder
  }

  export type LogJadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrder
    tanggal_baru?: SortOrder
    ruangan_lama?: SortOrder
    ruangan_baru?: SortOrder
    keterangan?: SortOrder
    created_at?: SortOrder
  }

  export type LogJadwalMinOrderByAggregateInput = {
    id?: SortOrder
    jadwal_seminar_id?: SortOrder
    log_type?: SortOrder
    nip?: SortOrder
    tanggal_lama?: SortOrder
    tanggal_baru?: SortOrder
    ruangan_lama?: SortOrder
    ruangan_baru?: SortOrder
    keterangan?: SortOrder
    created_at?: SortOrder
  }

  export type EnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
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

  export type DailyReportListRelationFilter = {
    every?: DailyReportWhereInput
    some?: DailyReportWhereInput
    none?: DailyReportWhereInput
  }

  export type DokumenListRelationFilter = {
    every?: DokumenWhereInput
    some?: DokumenWhereInput
    none?: DokumenWhereInput
  }

  export type NilaiInstansiNullableScalarRelationFilter = {
    is?: NilaiInstansiWhereInput | null
    isNot?: NilaiInstansiWhereInput | null
  }

  export type DailyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DokumenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MahasiswaCountOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type MahasiswaMaxOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type MahasiswaMinOrderByAggregateInput = {
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
  }

  export type JadwalScalarRelationFilter = {
    is?: JadwalWhereInput
    isNot?: JadwalWhereInput
  }

  export type DosenNullableScalarRelationFilter = {
    is?: DosenWhereInput | null
    isNot?: DosenWhereInput | null
  }

  export type MahasiswaListRelationFilter = {
    every?: MahasiswaWhereInput
    some?: MahasiswaWhereInput
    none?: MahasiswaWhereInput
  }

  export type MahasiswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NilaiCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrder
    note_penguji?: SortOrder
  }

  export type NilaiAvgOrderByAggregateInput = {
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
  }

  export type NilaiMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrder
    note_penguji?: SortOrder
  }

  export type NilaiMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    jadwal_seminar_id?: SortOrder
    nip_penguji?: SortOrder
    nip_pembimbing?: SortOrder
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
    note_pembimbing?: SortOrder
    note_penguji?: SortOrder
  }

  export type NilaiSumOrderByAggregateInput = {
    nilai_pembimbing?: SortOrder
    nilai_penguji?: SortOrder
  }

  export type PembimbingInstansiScalarRelationFilter = {
    is?: PembimbingInstansiWhereInput
    isNot?: PembimbingInstansiWhereInput
  }

  export type NilaiInstansiCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
  }

  export type NilaiInstansiAvgOrderByAggregateInput = {
    nilai_angka?: SortOrder
  }

  export type NilaiInstansiMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
  }

  export type NilaiInstansiMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    nilai_angka?: SortOrder
    nilai_huruf?: SortOrder
    nim?: SortOrder
    id_pembimbing_instansi?: SortOrder
  }

  export type NilaiInstansiSumOrderByAggregateInput = {
    nilai_angka?: SortOrder
  }

  export type NilaiInstansiListRelationFilter = {
    every?: NilaiInstansiWhereInput
    some?: NilaiInstansiWhereInput
    none?: NilaiInstansiWhereInput
  }

  export type InstansiScalarRelationFilter = {
    is?: InstansiWhereInput
    isNot?: InstansiWhereInput
  }

  export type NilaiInstansiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PembimbingInstansiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
  }

  export type PembimbingInstansiAvgOrderByAggregateInput = {
    id_instansi?: SortOrder
  }

  export type PembimbingInstansiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
  }

  export type PembimbingInstansiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    jabatan?: SortOrder
    no_hp?: SortOrder
    id_instansi?: SortOrder
  }

  export type PembimbingInstansiSumOrderByAggregateInput = {
    id_instansi?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PendaftaranKPNimSemesterCompoundUniqueInput = {
    nim: string
    semester: number
  }

  export type PendaftaranKPCountOrderByAggregateInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrder
    linkSuratPengantar?: SortOrder
    linkSuratBalasan?: SortOrder
    linkSuratPenunjukkanDospem?: SortOrder
    alasanLanjutKP?: SortOrder
    linkSuratPerpanjanganKP?: SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrder
  }

  export type PendaftaranKPAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type PendaftaranKPMaxOrderByAggregateInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrder
    linkSuratPengantar?: SortOrder
    linkSuratBalasan?: SortOrder
    linkSuratPenunjukkanDospem?: SortOrder
    alasanLanjutKP?: SortOrder
    linkSuratPerpanjanganKP?: SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrder
  }

  export type PendaftaranKPMinOrderByAggregateInput = {
    nim?: SortOrder
    semester?: SortOrder
    tanggalTerdaftar?: SortOrder
    tanggalMulai?: SortOrder
    tenggatWaktu?: SortOrder
    gagal?: SortOrder
    tanggalSelesai?: SortOrder
    linkSuratPengantar?: SortOrder
    linkSuratBalasan?: SortOrder
    linkSuratPenunjukkanDospem?: SortOrder
    alasanLanjutKP?: SortOrder
    linkSuratPerpanjanganKP?: SortOrder
    id_pembimbing_instansi?: SortOrder
    nip?: SortOrder
  }

  export type PendaftaranKPSumOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RuanganCountOrderByAggregateInput = {
    nama?: SortOrder
  }

  export type RuanganMaxOrderByAggregateInput = {
    nama?: SortOrder
  }

  export type RuanganMinOrderByAggregateInput = {
    nama?: SortOrder
  }

  export type MahasiswaCreateNestedOneWithoutBimbinganInput = {
    create?: XOR<MahasiswaCreateWithoutBimbinganInput, MahasiswaUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutBimbinganInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type DosenCreateNestedOneWithoutBimbinganInput = {
    create?: XOR<DosenCreateWithoutBimbinganInput, DosenUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: DosenCreateOrConnectWithoutBimbinganInput
    connect?: DosenWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusValidasiFieldUpdateOperationsInput = {
    set?: $Enums.StatusValidasi
  }

  export type MahasiswaUpdateOneRequiredWithoutBimbinganNestedInput = {
    create?: XOR<MahasiswaCreateWithoutBimbinganInput, MahasiswaUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutBimbinganInput
    upsert?: MahasiswaUpsertWithoutBimbinganInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutBimbinganInput, MahasiswaUpdateWithoutBimbinganInput>, MahasiswaUncheckedUpdateWithoutBimbinganInput>
  }

  export type DosenUpdateOneRequiredWithoutBimbinganNestedInput = {
    create?: XOR<DosenCreateWithoutBimbinganInput, DosenUncheckedCreateWithoutBimbinganInput>
    connectOrCreate?: DosenCreateOrConnectWithoutBimbinganInput
    upsert?: DosenUpsertWithoutBimbinganInput
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutBimbinganInput, DosenUpdateWithoutBimbinganInput>, DosenUncheckedUpdateWithoutBimbinganInput>
  }

  export type MahasiswaCreateNestedOneWithoutDailyReportInput = {
    create?: XOR<MahasiswaCreateWithoutDailyReportInput, MahasiswaUncheckedCreateWithoutDailyReportInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDailyReportInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type DetailDailyReportCreateNestedManyWithoutDailyReportInput = {
    create?: XOR<DetailDailyReportCreateWithoutDailyReportInput, DetailDailyReportUncheckedCreateWithoutDailyReportInput> | DetailDailyReportCreateWithoutDailyReportInput[] | DetailDailyReportUncheckedCreateWithoutDailyReportInput[]
    connectOrCreate?: DetailDailyReportCreateOrConnectWithoutDailyReportInput | DetailDailyReportCreateOrConnectWithoutDailyReportInput[]
    createMany?: DetailDailyReportCreateManyDailyReportInputEnvelope
    connect?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
  }

  export type DetailDailyReportUncheckedCreateNestedManyWithoutDailyReportInput = {
    create?: XOR<DetailDailyReportCreateWithoutDailyReportInput, DetailDailyReportUncheckedCreateWithoutDailyReportInput> | DetailDailyReportCreateWithoutDailyReportInput[] | DetailDailyReportUncheckedCreateWithoutDailyReportInput[]
    connectOrCreate?: DetailDailyReportCreateOrConnectWithoutDailyReportInput | DetailDailyReportCreateOrConnectWithoutDailyReportInput[]
    createMany?: DetailDailyReportCreateManyDailyReportInputEnvelope
    connect?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MahasiswaUpdateOneRequiredWithoutDailyReportNestedInput = {
    create?: XOR<MahasiswaCreateWithoutDailyReportInput, MahasiswaUncheckedCreateWithoutDailyReportInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDailyReportInput
    upsert?: MahasiswaUpsertWithoutDailyReportInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutDailyReportInput, MahasiswaUpdateWithoutDailyReportInput>, MahasiswaUncheckedUpdateWithoutDailyReportInput>
  }

  export type DetailDailyReportUpdateManyWithoutDailyReportNestedInput = {
    create?: XOR<DetailDailyReportCreateWithoutDailyReportInput, DetailDailyReportUncheckedCreateWithoutDailyReportInput> | DetailDailyReportCreateWithoutDailyReportInput[] | DetailDailyReportUncheckedCreateWithoutDailyReportInput[]
    connectOrCreate?: DetailDailyReportCreateOrConnectWithoutDailyReportInput | DetailDailyReportCreateOrConnectWithoutDailyReportInput[]
    upsert?: DetailDailyReportUpsertWithWhereUniqueWithoutDailyReportInput | DetailDailyReportUpsertWithWhereUniqueWithoutDailyReportInput[]
    createMany?: DetailDailyReportCreateManyDailyReportInputEnvelope
    set?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
    disconnect?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
    delete?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
    connect?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
    update?: DetailDailyReportUpdateWithWhereUniqueWithoutDailyReportInput | DetailDailyReportUpdateWithWhereUniqueWithoutDailyReportInput[]
    updateMany?: DetailDailyReportUpdateManyWithWhereWithoutDailyReportInput | DetailDailyReportUpdateManyWithWhereWithoutDailyReportInput[]
    deleteMany?: DetailDailyReportScalarWhereInput | DetailDailyReportScalarWhereInput[]
  }

  export type DetailDailyReportUncheckedUpdateManyWithoutDailyReportNestedInput = {
    create?: XOR<DetailDailyReportCreateWithoutDailyReportInput, DetailDailyReportUncheckedCreateWithoutDailyReportInput> | DetailDailyReportCreateWithoutDailyReportInput[] | DetailDailyReportUncheckedCreateWithoutDailyReportInput[]
    connectOrCreate?: DetailDailyReportCreateOrConnectWithoutDailyReportInput | DetailDailyReportCreateOrConnectWithoutDailyReportInput[]
    upsert?: DetailDailyReportUpsertWithWhereUniqueWithoutDailyReportInput | DetailDailyReportUpsertWithWhereUniqueWithoutDailyReportInput[]
    createMany?: DetailDailyReportCreateManyDailyReportInputEnvelope
    set?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
    disconnect?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
    delete?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
    connect?: DetailDailyReportWhereUniqueInput | DetailDailyReportWhereUniqueInput[]
    update?: DetailDailyReportUpdateWithWhereUniqueWithoutDailyReportInput | DetailDailyReportUpdateWithWhereUniqueWithoutDailyReportInput[]
    updateMany?: DetailDailyReportUpdateManyWithWhereWithoutDailyReportInput | DetailDailyReportUpdateManyWithWhereWithoutDailyReportInput[]
    deleteMany?: DetailDailyReportScalarWhereInput | DetailDailyReportScalarWhereInput[]
  }

  export type DailyReportCreateNestedOneWithoutDetailDailyReportInput = {
    create?: XOR<DailyReportCreateWithoutDetailDailyReportInput, DailyReportUncheckedCreateWithoutDetailDailyReportInput>
    connectOrCreate?: DailyReportCreateOrConnectWithoutDetailDailyReportInput
    connect?: DailyReportWhereUniqueInput
  }

  export type DailyReportUpdateOneRequiredWithoutDetailDailyReportNestedInput = {
    create?: XOR<DailyReportCreateWithoutDetailDailyReportInput, DailyReportUncheckedCreateWithoutDetailDailyReportInput>
    connectOrCreate?: DailyReportCreateOrConnectWithoutDetailDailyReportInput
    upsert?: DailyReportUpsertWithoutDetailDailyReportInput
    connect?: DailyReportWhereUniqueInput
    update?: XOR<XOR<DailyReportUpdateToOneWithWhereWithoutDetailDailyReportInput, DailyReportUpdateWithoutDetailDailyReportInput>, DailyReportUncheckedUpdateWithoutDetailDailyReportInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MahasiswaCreateNestedOneWithoutDokumenInput = {
    create?: XOR<MahasiswaCreateWithoutDokumenInput, MahasiswaUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDokumenInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type EnumJenisDokumenFieldUpdateOperationsInput = {
    set?: $Enums.JenisDokumen
  }

  export type EnumDokumenStatusFieldUpdateOperationsInput = {
    set?: $Enums.DokumenStatus
  }

  export type MahasiswaUpdateOneRequiredWithoutDokumenNestedInput = {
    create?: XOR<MahasiswaCreateWithoutDokumenInput, MahasiswaUncheckedCreateWithoutDokumenInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDokumenInput
    upsert?: MahasiswaUpsertWithoutDokumenInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutDokumenInput, MahasiswaUpdateWithoutDokumenInput>, MahasiswaUncheckedUpdateWithoutDokumenInput>
  }

  export type BimbinganCreateNestedManyWithoutDosenInput = {
    create?: XOR<BimbinganCreateWithoutDosenInput, BimbinganUncheckedCreateWithoutDosenInput> | BimbinganCreateWithoutDosenInput[] | BimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: BimbinganCreateOrConnectWithoutDosenInput | BimbinganCreateOrConnectWithoutDosenInput[]
    createMany?: BimbinganCreateManyDosenInputEnvelope
    connect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
  }

  export type JadwalCreateNestedManyWithoutDosenInput = {
    create?: XOR<JadwalCreateWithoutDosenInput, JadwalUncheckedCreateWithoutDosenInput> | JadwalCreateWithoutDosenInput[] | JadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutDosenInput | JadwalCreateOrConnectWithoutDosenInput[]
    createMany?: JadwalCreateManyDosenInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type NilaiCreateNestedManyWithoutDosenPengujiInput = {
    create?: XOR<NilaiCreateWithoutDosenPengujiInput, NilaiUncheckedCreateWithoutDosenPengujiInput> | NilaiCreateWithoutDosenPengujiInput[] | NilaiUncheckedCreateWithoutDosenPengujiInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutDosenPengujiInput | NilaiCreateOrConnectWithoutDosenPengujiInput[]
    createMany?: NilaiCreateManyDosenPengujiInputEnvelope
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type NilaiCreateNestedManyWithoutDosenPembimbingInput = {
    create?: XOR<NilaiCreateWithoutDosenPembimbingInput, NilaiUncheckedCreateWithoutDosenPembimbingInput> | NilaiCreateWithoutDosenPembimbingInput[] | NilaiUncheckedCreateWithoutDosenPembimbingInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutDosenPembimbingInput | NilaiCreateOrConnectWithoutDosenPembimbingInput[]
    createMany?: NilaiCreateManyDosenPembimbingInputEnvelope
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type PendaftaranKPCreateNestedManyWithoutDosenInput = {
    create?: XOR<PendaftaranKPCreateWithoutDosenInput, PendaftaranKPUncheckedCreateWithoutDosenInput> | PendaftaranKPCreateWithoutDosenInput[] | PendaftaranKPUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutDosenInput | PendaftaranKPCreateOrConnectWithoutDosenInput[]
    createMany?: PendaftaranKPCreateManyDosenInputEnvelope
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
  }

  export type BimbinganUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<BimbinganCreateWithoutDosenInput, BimbinganUncheckedCreateWithoutDosenInput> | BimbinganCreateWithoutDosenInput[] | BimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: BimbinganCreateOrConnectWithoutDosenInput | BimbinganCreateOrConnectWithoutDosenInput[]
    createMany?: BimbinganCreateManyDosenInputEnvelope
    connect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
  }

  export type JadwalUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<JadwalCreateWithoutDosenInput, JadwalUncheckedCreateWithoutDosenInput> | JadwalCreateWithoutDosenInput[] | JadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutDosenInput | JadwalCreateOrConnectWithoutDosenInput[]
    createMany?: JadwalCreateManyDosenInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type NilaiUncheckedCreateNestedManyWithoutDosenPengujiInput = {
    create?: XOR<NilaiCreateWithoutDosenPengujiInput, NilaiUncheckedCreateWithoutDosenPengujiInput> | NilaiCreateWithoutDosenPengujiInput[] | NilaiUncheckedCreateWithoutDosenPengujiInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutDosenPengujiInput | NilaiCreateOrConnectWithoutDosenPengujiInput[]
    createMany?: NilaiCreateManyDosenPengujiInputEnvelope
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type NilaiUncheckedCreateNestedManyWithoutDosenPembimbingInput = {
    create?: XOR<NilaiCreateWithoutDosenPembimbingInput, NilaiUncheckedCreateWithoutDosenPembimbingInput> | NilaiCreateWithoutDosenPembimbingInput[] | NilaiUncheckedCreateWithoutDosenPembimbingInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutDosenPembimbingInput | NilaiCreateOrConnectWithoutDosenPembimbingInput[]
    createMany?: NilaiCreateManyDosenPembimbingInputEnvelope
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type PendaftaranKPUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<PendaftaranKPCreateWithoutDosenInput, PendaftaranKPUncheckedCreateWithoutDosenInput> | PendaftaranKPCreateWithoutDosenInput[] | PendaftaranKPUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutDosenInput | PendaftaranKPCreateOrConnectWithoutDosenInput[]
    createMany?: PendaftaranKPCreateManyDosenInputEnvelope
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
  }

  export type BimbinganUpdateManyWithoutDosenNestedInput = {
    create?: XOR<BimbinganCreateWithoutDosenInput, BimbinganUncheckedCreateWithoutDosenInput> | BimbinganCreateWithoutDosenInput[] | BimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: BimbinganCreateOrConnectWithoutDosenInput | BimbinganCreateOrConnectWithoutDosenInput[]
    upsert?: BimbinganUpsertWithWhereUniqueWithoutDosenInput | BimbinganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: BimbinganCreateManyDosenInputEnvelope
    set?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    disconnect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    delete?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    connect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    update?: BimbinganUpdateWithWhereUniqueWithoutDosenInput | BimbinganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: BimbinganUpdateManyWithWhereWithoutDosenInput | BimbinganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: BimbinganScalarWhereInput | BimbinganScalarWhereInput[]
  }

  export type JadwalUpdateManyWithoutDosenNestedInput = {
    create?: XOR<JadwalCreateWithoutDosenInput, JadwalUncheckedCreateWithoutDosenInput> | JadwalCreateWithoutDosenInput[] | JadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutDosenInput | JadwalCreateOrConnectWithoutDosenInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutDosenInput | JadwalUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: JadwalCreateManyDosenInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutDosenInput | JadwalUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutDosenInput | JadwalUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type NilaiUpdateManyWithoutDosenPengujiNestedInput = {
    create?: XOR<NilaiCreateWithoutDosenPengujiInput, NilaiUncheckedCreateWithoutDosenPengujiInput> | NilaiCreateWithoutDosenPengujiInput[] | NilaiUncheckedCreateWithoutDosenPengujiInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutDosenPengujiInput | NilaiCreateOrConnectWithoutDosenPengujiInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutDosenPengujiInput | NilaiUpsertWithWhereUniqueWithoutDosenPengujiInput[]
    createMany?: NilaiCreateManyDosenPengujiInputEnvelope
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutDosenPengujiInput | NilaiUpdateWithWhereUniqueWithoutDosenPengujiInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutDosenPengujiInput | NilaiUpdateManyWithWhereWithoutDosenPengujiInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type NilaiUpdateManyWithoutDosenPembimbingNestedInput = {
    create?: XOR<NilaiCreateWithoutDosenPembimbingInput, NilaiUncheckedCreateWithoutDosenPembimbingInput> | NilaiCreateWithoutDosenPembimbingInput[] | NilaiUncheckedCreateWithoutDosenPembimbingInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutDosenPembimbingInput | NilaiCreateOrConnectWithoutDosenPembimbingInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutDosenPembimbingInput | NilaiUpsertWithWhereUniqueWithoutDosenPembimbingInput[]
    createMany?: NilaiCreateManyDosenPembimbingInputEnvelope
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutDosenPembimbingInput | NilaiUpdateWithWhereUniqueWithoutDosenPembimbingInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutDosenPembimbingInput | NilaiUpdateManyWithWhereWithoutDosenPembimbingInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type PendaftaranKPUpdateManyWithoutDosenNestedInput = {
    create?: XOR<PendaftaranKPCreateWithoutDosenInput, PendaftaranKPUncheckedCreateWithoutDosenInput> | PendaftaranKPCreateWithoutDosenInput[] | PendaftaranKPUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutDosenInput | PendaftaranKPCreateOrConnectWithoutDosenInput[]
    upsert?: PendaftaranKPUpsertWithWhereUniqueWithoutDosenInput | PendaftaranKPUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: PendaftaranKPCreateManyDosenInputEnvelope
    set?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    disconnect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    delete?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    update?: PendaftaranKPUpdateWithWhereUniqueWithoutDosenInput | PendaftaranKPUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: PendaftaranKPUpdateManyWithWhereWithoutDosenInput | PendaftaranKPUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: PendaftaranKPScalarWhereInput | PendaftaranKPScalarWhereInput[]
  }

  export type BimbinganUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<BimbinganCreateWithoutDosenInput, BimbinganUncheckedCreateWithoutDosenInput> | BimbinganCreateWithoutDosenInput[] | BimbinganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: BimbinganCreateOrConnectWithoutDosenInput | BimbinganCreateOrConnectWithoutDosenInput[]
    upsert?: BimbinganUpsertWithWhereUniqueWithoutDosenInput | BimbinganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: BimbinganCreateManyDosenInputEnvelope
    set?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    disconnect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    delete?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    connect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    update?: BimbinganUpdateWithWhereUniqueWithoutDosenInput | BimbinganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: BimbinganUpdateManyWithWhereWithoutDosenInput | BimbinganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: BimbinganScalarWhereInput | BimbinganScalarWhereInput[]
  }

  export type JadwalUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<JadwalCreateWithoutDosenInput, JadwalUncheckedCreateWithoutDosenInput> | JadwalCreateWithoutDosenInput[] | JadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutDosenInput | JadwalCreateOrConnectWithoutDosenInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutDosenInput | JadwalUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: JadwalCreateManyDosenInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutDosenInput | JadwalUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutDosenInput | JadwalUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type NilaiUncheckedUpdateManyWithoutDosenPengujiNestedInput = {
    create?: XOR<NilaiCreateWithoutDosenPengujiInput, NilaiUncheckedCreateWithoutDosenPengujiInput> | NilaiCreateWithoutDosenPengujiInput[] | NilaiUncheckedCreateWithoutDosenPengujiInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutDosenPengujiInput | NilaiCreateOrConnectWithoutDosenPengujiInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutDosenPengujiInput | NilaiUpsertWithWhereUniqueWithoutDosenPengujiInput[]
    createMany?: NilaiCreateManyDosenPengujiInputEnvelope
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutDosenPengujiInput | NilaiUpdateWithWhereUniqueWithoutDosenPengujiInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutDosenPengujiInput | NilaiUpdateManyWithWhereWithoutDosenPengujiInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type NilaiUncheckedUpdateManyWithoutDosenPembimbingNestedInput = {
    create?: XOR<NilaiCreateWithoutDosenPembimbingInput, NilaiUncheckedCreateWithoutDosenPembimbingInput> | NilaiCreateWithoutDosenPembimbingInput[] | NilaiUncheckedCreateWithoutDosenPembimbingInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutDosenPembimbingInput | NilaiCreateOrConnectWithoutDosenPembimbingInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutDosenPembimbingInput | NilaiUpsertWithWhereUniqueWithoutDosenPembimbingInput[]
    createMany?: NilaiCreateManyDosenPembimbingInputEnvelope
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutDosenPembimbingInput | NilaiUpdateWithWhereUniqueWithoutDosenPembimbingInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutDosenPembimbingInput | NilaiUpdateManyWithWhereWithoutDosenPembimbingInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type PendaftaranKPUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<PendaftaranKPCreateWithoutDosenInput, PendaftaranKPUncheckedCreateWithoutDosenInput> | PendaftaranKPCreateWithoutDosenInput[] | PendaftaranKPUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutDosenInput | PendaftaranKPCreateOrConnectWithoutDosenInput[]
    upsert?: PendaftaranKPUpsertWithWhereUniqueWithoutDosenInput | PendaftaranKPUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: PendaftaranKPCreateManyDosenInputEnvelope
    set?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    disconnect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    delete?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    update?: PendaftaranKPUpdateWithWhereUniqueWithoutDosenInput | PendaftaranKPUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: PendaftaranKPUpdateManyWithWhereWithoutDosenInput | PendaftaranKPUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: PendaftaranKPScalarWhereInput | PendaftaranKPScalarWhereInput[]
  }

  export type PembimbingInstansiCreateNestedManyWithoutInstansiInput = {
    create?: XOR<PembimbingInstansiCreateWithoutInstansiInput, PembimbingInstansiUncheckedCreateWithoutInstansiInput> | PembimbingInstansiCreateWithoutInstansiInput[] | PembimbingInstansiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: PembimbingInstansiCreateOrConnectWithoutInstansiInput | PembimbingInstansiCreateOrConnectWithoutInstansiInput[]
    createMany?: PembimbingInstansiCreateManyInstansiInputEnvelope
    connect?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
  }

  export type PembimbingInstansiUncheckedCreateNestedManyWithoutInstansiInput = {
    create?: XOR<PembimbingInstansiCreateWithoutInstansiInput, PembimbingInstansiUncheckedCreateWithoutInstansiInput> | PembimbingInstansiCreateWithoutInstansiInput[] | PembimbingInstansiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: PembimbingInstansiCreateOrConnectWithoutInstansiInput | PembimbingInstansiCreateOrConnectWithoutInstansiInput[]
    createMany?: PembimbingInstansiCreateManyInstansiInputEnvelope
    connect?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
  }

  export type EnumJenisInstansiFieldUpdateOperationsInput = {
    set?: $Enums.JenisInstansi
  }

  export type EnumStatusInstansiFieldUpdateOperationsInput = {
    set?: $Enums.StatusInstansi
  }

  export type PembimbingInstansiUpdateManyWithoutInstansiNestedInput = {
    create?: XOR<PembimbingInstansiCreateWithoutInstansiInput, PembimbingInstansiUncheckedCreateWithoutInstansiInput> | PembimbingInstansiCreateWithoutInstansiInput[] | PembimbingInstansiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: PembimbingInstansiCreateOrConnectWithoutInstansiInput | PembimbingInstansiCreateOrConnectWithoutInstansiInput[]
    upsert?: PembimbingInstansiUpsertWithWhereUniqueWithoutInstansiInput | PembimbingInstansiUpsertWithWhereUniqueWithoutInstansiInput[]
    createMany?: PembimbingInstansiCreateManyInstansiInputEnvelope
    set?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
    disconnect?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
    delete?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
    connect?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
    update?: PembimbingInstansiUpdateWithWhereUniqueWithoutInstansiInput | PembimbingInstansiUpdateWithWhereUniqueWithoutInstansiInput[]
    updateMany?: PembimbingInstansiUpdateManyWithWhereWithoutInstansiInput | PembimbingInstansiUpdateManyWithWhereWithoutInstansiInput[]
    deleteMany?: PembimbingInstansiScalarWhereInput | PembimbingInstansiScalarWhereInput[]
  }

  export type PembimbingInstansiUncheckedUpdateManyWithoutInstansiNestedInput = {
    create?: XOR<PembimbingInstansiCreateWithoutInstansiInput, PembimbingInstansiUncheckedCreateWithoutInstansiInput> | PembimbingInstansiCreateWithoutInstansiInput[] | PembimbingInstansiUncheckedCreateWithoutInstansiInput[]
    connectOrCreate?: PembimbingInstansiCreateOrConnectWithoutInstansiInput | PembimbingInstansiCreateOrConnectWithoutInstansiInput[]
    upsert?: PembimbingInstansiUpsertWithWhereUniqueWithoutInstansiInput | PembimbingInstansiUpsertWithWhereUniqueWithoutInstansiInput[]
    createMany?: PembimbingInstansiCreateManyInstansiInputEnvelope
    set?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
    disconnect?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
    delete?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
    connect?: PembimbingInstansiWhereUniqueInput | PembimbingInstansiWhereUniqueInput[]
    update?: PembimbingInstansiUpdateWithWhereUniqueWithoutInstansiInput | PembimbingInstansiUpdateWithWhereUniqueWithoutInstansiInput[]
    updateMany?: PembimbingInstansiUpdateManyWithWhereWithoutInstansiInput | PembimbingInstansiUpdateManyWithWhereWithoutInstansiInput[]
    deleteMany?: PembimbingInstansiScalarWhereInput | PembimbingInstansiScalarWhereInput[]
  }

  export type MahasiswaCreateNestedOneWithoutJadwalInput = {
    create?: XOR<MahasiswaCreateWithoutJadwalInput, MahasiswaUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutJadwalInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type DosenCreateNestedOneWithoutJadwalInput = {
    create?: XOR<DosenCreateWithoutJadwalInput, DosenUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: DosenCreateOrConnectWithoutJadwalInput
    connect?: DosenWhereUniqueInput
  }

  export type RuanganCreateNestedOneWithoutJadwalInput = {
    create?: XOR<RuanganCreateWithoutJadwalInput, RuanganUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: RuanganCreateOrConnectWithoutJadwalInput
    connect?: RuanganWhereUniqueInput
  }

  export type NilaiCreateNestedOneWithoutJadwalInput = {
    create?: XOR<NilaiCreateWithoutJadwalInput, NilaiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: NilaiCreateOrConnectWithoutJadwalInput
    connect?: NilaiWhereUniqueInput
  }

  export type NilaiUncheckedCreateNestedOneWithoutJadwalInput = {
    create?: XOR<NilaiCreateWithoutJadwalInput, NilaiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: NilaiCreateOrConnectWithoutJadwalInput
    connect?: NilaiWhereUniqueInput
  }

  export type EnumStatusSeminarFieldUpdateOperationsInput = {
    set?: $Enums.StatusSeminar
  }

  export type MahasiswaUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<MahasiswaCreateWithoutJadwalInput, MahasiswaUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutJadwalInput
    upsert?: MahasiswaUpsertWithoutJadwalInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutJadwalInput, MahasiswaUpdateWithoutJadwalInput>, MahasiswaUncheckedUpdateWithoutJadwalInput>
  }

  export type DosenUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<DosenCreateWithoutJadwalInput, DosenUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: DosenCreateOrConnectWithoutJadwalInput
    upsert?: DosenUpsertWithoutJadwalInput
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutJadwalInput, DosenUpdateWithoutJadwalInput>, DosenUncheckedUpdateWithoutJadwalInput>
  }

  export type RuanganUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<RuanganCreateWithoutJadwalInput, RuanganUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: RuanganCreateOrConnectWithoutJadwalInput
    upsert?: RuanganUpsertWithoutJadwalInput
    connect?: RuanganWhereUniqueInput
    update?: XOR<XOR<RuanganUpdateToOneWithWhereWithoutJadwalInput, RuanganUpdateWithoutJadwalInput>, RuanganUncheckedUpdateWithoutJadwalInput>
  }

  export type NilaiUpdateOneWithoutJadwalNestedInput = {
    create?: XOR<NilaiCreateWithoutJadwalInput, NilaiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: NilaiCreateOrConnectWithoutJadwalInput
    upsert?: NilaiUpsertWithoutJadwalInput
    disconnect?: NilaiWhereInput | boolean
    delete?: NilaiWhereInput | boolean
    connect?: NilaiWhereUniqueInput
    update?: XOR<XOR<NilaiUpdateToOneWithWhereWithoutJadwalInput, NilaiUpdateWithoutJadwalInput>, NilaiUncheckedUpdateWithoutJadwalInput>
  }

  export type NilaiUncheckedUpdateOneWithoutJadwalNestedInput = {
    create?: XOR<NilaiCreateWithoutJadwalInput, NilaiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: NilaiCreateOrConnectWithoutJadwalInput
    upsert?: NilaiUpsertWithoutJadwalInput
    disconnect?: NilaiWhereInput | boolean
    delete?: NilaiWhereInput | boolean
    connect?: NilaiWhereUniqueInput
    update?: XOR<XOR<NilaiUpdateToOneWithWhereWithoutJadwalInput, NilaiUpdateWithoutJadwalInput>, NilaiUncheckedUpdateWithoutJadwalInput>
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.LogType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BimbinganCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<BimbinganCreateWithoutMahasiswaInput, BimbinganUncheckedCreateWithoutMahasiswaInput> | BimbinganCreateWithoutMahasiswaInput[] | BimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: BimbinganCreateOrConnectWithoutMahasiswaInput | BimbinganCreateOrConnectWithoutMahasiswaInput[]
    createMany?: BimbinganCreateManyMahasiswaInputEnvelope
    connect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
  }

  export type DailyReportCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<DailyReportCreateWithoutMahasiswaInput, DailyReportUncheckedCreateWithoutMahasiswaInput> | DailyReportCreateWithoutMahasiswaInput[] | DailyReportUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutMahasiswaInput | DailyReportCreateOrConnectWithoutMahasiswaInput[]
    createMany?: DailyReportCreateManyMahasiswaInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type DokumenCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<DokumenCreateWithoutMahasiswaInput, DokumenUncheckedCreateWithoutMahasiswaInput> | DokumenCreateWithoutMahasiswaInput[] | DokumenUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: DokumenCreateOrConnectWithoutMahasiswaInput | DokumenCreateOrConnectWithoutMahasiswaInput[]
    createMany?: DokumenCreateManyMahasiswaInputEnvelope
    connect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
  }

  export type JadwalCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<JadwalCreateWithoutMahasiswaInput, JadwalUncheckedCreateWithoutMahasiswaInput> | JadwalCreateWithoutMahasiswaInput[] | JadwalUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutMahasiswaInput | JadwalCreateOrConnectWithoutMahasiswaInput[]
    createMany?: JadwalCreateManyMahasiswaInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type NilaiInstansiCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<NilaiInstansiCreateWithoutMahasiswaInput, NilaiInstansiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: NilaiInstansiCreateOrConnectWithoutMahasiswaInput
    connect?: NilaiInstansiWhereUniqueInput
  }

  export type PendaftaranKPCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<PendaftaranKPCreateWithoutMahasiswaInput, PendaftaranKPUncheckedCreateWithoutMahasiswaInput> | PendaftaranKPCreateWithoutMahasiswaInput[] | PendaftaranKPUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutMahasiswaInput | PendaftaranKPCreateOrConnectWithoutMahasiswaInput[]
    createMany?: PendaftaranKPCreateManyMahasiswaInputEnvelope
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
  }

  export type NilaiCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<NilaiCreateWithoutMahasiswaInput, NilaiUncheckedCreateWithoutMahasiswaInput> | NilaiCreateWithoutMahasiswaInput[] | NilaiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutMahasiswaInput | NilaiCreateOrConnectWithoutMahasiswaInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type BimbinganUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<BimbinganCreateWithoutMahasiswaInput, BimbinganUncheckedCreateWithoutMahasiswaInput> | BimbinganCreateWithoutMahasiswaInput[] | BimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: BimbinganCreateOrConnectWithoutMahasiswaInput | BimbinganCreateOrConnectWithoutMahasiswaInput[]
    createMany?: BimbinganCreateManyMahasiswaInputEnvelope
    connect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
  }

  export type DailyReportUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<DailyReportCreateWithoutMahasiswaInput, DailyReportUncheckedCreateWithoutMahasiswaInput> | DailyReportCreateWithoutMahasiswaInput[] | DailyReportUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutMahasiswaInput | DailyReportCreateOrConnectWithoutMahasiswaInput[]
    createMany?: DailyReportCreateManyMahasiswaInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type DokumenUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<DokumenCreateWithoutMahasiswaInput, DokumenUncheckedCreateWithoutMahasiswaInput> | DokumenCreateWithoutMahasiswaInput[] | DokumenUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: DokumenCreateOrConnectWithoutMahasiswaInput | DokumenCreateOrConnectWithoutMahasiswaInput[]
    createMany?: DokumenCreateManyMahasiswaInputEnvelope
    connect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
  }

  export type JadwalUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<JadwalCreateWithoutMahasiswaInput, JadwalUncheckedCreateWithoutMahasiswaInput> | JadwalCreateWithoutMahasiswaInput[] | JadwalUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutMahasiswaInput | JadwalCreateOrConnectWithoutMahasiswaInput[]
    createMany?: JadwalCreateManyMahasiswaInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type NilaiInstansiUncheckedCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<NilaiInstansiCreateWithoutMahasiswaInput, NilaiInstansiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: NilaiInstansiCreateOrConnectWithoutMahasiswaInput
    connect?: NilaiInstansiWhereUniqueInput
  }

  export type PendaftaranKPUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<PendaftaranKPCreateWithoutMahasiswaInput, PendaftaranKPUncheckedCreateWithoutMahasiswaInput> | PendaftaranKPCreateWithoutMahasiswaInput[] | PendaftaranKPUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutMahasiswaInput | PendaftaranKPCreateOrConnectWithoutMahasiswaInput[]
    createMany?: PendaftaranKPCreateManyMahasiswaInputEnvelope
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
  }

  export type NilaiUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<NilaiCreateWithoutMahasiswaInput, NilaiUncheckedCreateWithoutMahasiswaInput> | NilaiCreateWithoutMahasiswaInput[] | NilaiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutMahasiswaInput | NilaiCreateOrConnectWithoutMahasiswaInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type BimbinganUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<BimbinganCreateWithoutMahasiswaInput, BimbinganUncheckedCreateWithoutMahasiswaInput> | BimbinganCreateWithoutMahasiswaInput[] | BimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: BimbinganCreateOrConnectWithoutMahasiswaInput | BimbinganCreateOrConnectWithoutMahasiswaInput[]
    upsert?: BimbinganUpsertWithWhereUniqueWithoutMahasiswaInput | BimbinganUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: BimbinganCreateManyMahasiswaInputEnvelope
    set?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    disconnect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    delete?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    connect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    update?: BimbinganUpdateWithWhereUniqueWithoutMahasiswaInput | BimbinganUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: BimbinganUpdateManyWithWhereWithoutMahasiswaInput | BimbinganUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: BimbinganScalarWhereInput | BimbinganScalarWhereInput[]
  }

  export type DailyReportUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<DailyReportCreateWithoutMahasiswaInput, DailyReportUncheckedCreateWithoutMahasiswaInput> | DailyReportCreateWithoutMahasiswaInput[] | DailyReportUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutMahasiswaInput | DailyReportCreateOrConnectWithoutMahasiswaInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutMahasiswaInput | DailyReportUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: DailyReportCreateManyMahasiswaInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutMahasiswaInput | DailyReportUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutMahasiswaInput | DailyReportUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type DokumenUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<DokumenCreateWithoutMahasiswaInput, DokumenUncheckedCreateWithoutMahasiswaInput> | DokumenCreateWithoutMahasiswaInput[] | DokumenUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: DokumenCreateOrConnectWithoutMahasiswaInput | DokumenCreateOrConnectWithoutMahasiswaInput[]
    upsert?: DokumenUpsertWithWhereUniqueWithoutMahasiswaInput | DokumenUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: DokumenCreateManyMahasiswaInputEnvelope
    set?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    disconnect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    delete?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    connect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    update?: DokumenUpdateWithWhereUniqueWithoutMahasiswaInput | DokumenUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: DokumenUpdateManyWithWhereWithoutMahasiswaInput | DokumenUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: DokumenScalarWhereInput | DokumenScalarWhereInput[]
  }

  export type JadwalUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<JadwalCreateWithoutMahasiswaInput, JadwalUncheckedCreateWithoutMahasiswaInput> | JadwalCreateWithoutMahasiswaInput[] | JadwalUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutMahasiswaInput | JadwalCreateOrConnectWithoutMahasiswaInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutMahasiswaInput | JadwalUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: JadwalCreateManyMahasiswaInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutMahasiswaInput | JadwalUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutMahasiswaInput | JadwalUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type NilaiInstansiUpdateOneWithoutMahasiswaNestedInput = {
    create?: XOR<NilaiInstansiCreateWithoutMahasiswaInput, NilaiInstansiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: NilaiInstansiCreateOrConnectWithoutMahasiswaInput
    upsert?: NilaiInstansiUpsertWithoutMahasiswaInput
    disconnect?: NilaiInstansiWhereInput | boolean
    delete?: NilaiInstansiWhereInput | boolean
    connect?: NilaiInstansiWhereUniqueInput
    update?: XOR<XOR<NilaiInstansiUpdateToOneWithWhereWithoutMahasiswaInput, NilaiInstansiUpdateWithoutMahasiswaInput>, NilaiInstansiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type PendaftaranKPUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<PendaftaranKPCreateWithoutMahasiswaInput, PendaftaranKPUncheckedCreateWithoutMahasiswaInput> | PendaftaranKPCreateWithoutMahasiswaInput[] | PendaftaranKPUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutMahasiswaInput | PendaftaranKPCreateOrConnectWithoutMahasiswaInput[]
    upsert?: PendaftaranKPUpsertWithWhereUniqueWithoutMahasiswaInput | PendaftaranKPUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: PendaftaranKPCreateManyMahasiswaInputEnvelope
    set?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    disconnect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    delete?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    update?: PendaftaranKPUpdateWithWhereUniqueWithoutMahasiswaInput | PendaftaranKPUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: PendaftaranKPUpdateManyWithWhereWithoutMahasiswaInput | PendaftaranKPUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: PendaftaranKPScalarWhereInput | PendaftaranKPScalarWhereInput[]
  }

  export type NilaiUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<NilaiCreateWithoutMahasiswaInput, NilaiUncheckedCreateWithoutMahasiswaInput> | NilaiCreateWithoutMahasiswaInput[] | NilaiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutMahasiswaInput | NilaiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutMahasiswaInput | NilaiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutMahasiswaInput | NilaiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutMahasiswaInput | NilaiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type BimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<BimbinganCreateWithoutMahasiswaInput, BimbinganUncheckedCreateWithoutMahasiswaInput> | BimbinganCreateWithoutMahasiswaInput[] | BimbinganUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: BimbinganCreateOrConnectWithoutMahasiswaInput | BimbinganCreateOrConnectWithoutMahasiswaInput[]
    upsert?: BimbinganUpsertWithWhereUniqueWithoutMahasiswaInput | BimbinganUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: BimbinganCreateManyMahasiswaInputEnvelope
    set?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    disconnect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    delete?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    connect?: BimbinganWhereUniqueInput | BimbinganWhereUniqueInput[]
    update?: BimbinganUpdateWithWhereUniqueWithoutMahasiswaInput | BimbinganUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: BimbinganUpdateManyWithWhereWithoutMahasiswaInput | BimbinganUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: BimbinganScalarWhereInput | BimbinganScalarWhereInput[]
  }

  export type DailyReportUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<DailyReportCreateWithoutMahasiswaInput, DailyReportUncheckedCreateWithoutMahasiswaInput> | DailyReportCreateWithoutMahasiswaInput[] | DailyReportUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutMahasiswaInput | DailyReportCreateOrConnectWithoutMahasiswaInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutMahasiswaInput | DailyReportUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: DailyReportCreateManyMahasiswaInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutMahasiswaInput | DailyReportUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutMahasiswaInput | DailyReportUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type DokumenUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<DokumenCreateWithoutMahasiswaInput, DokumenUncheckedCreateWithoutMahasiswaInput> | DokumenCreateWithoutMahasiswaInput[] | DokumenUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: DokumenCreateOrConnectWithoutMahasiswaInput | DokumenCreateOrConnectWithoutMahasiswaInput[]
    upsert?: DokumenUpsertWithWhereUniqueWithoutMahasiswaInput | DokumenUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: DokumenCreateManyMahasiswaInputEnvelope
    set?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    disconnect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    delete?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    connect?: DokumenWhereUniqueInput | DokumenWhereUniqueInput[]
    update?: DokumenUpdateWithWhereUniqueWithoutMahasiswaInput | DokumenUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: DokumenUpdateManyWithWhereWithoutMahasiswaInput | DokumenUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: DokumenScalarWhereInput | DokumenScalarWhereInput[]
  }

  export type JadwalUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<JadwalCreateWithoutMahasiswaInput, JadwalUncheckedCreateWithoutMahasiswaInput> | JadwalCreateWithoutMahasiswaInput[] | JadwalUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutMahasiswaInput | JadwalCreateOrConnectWithoutMahasiswaInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutMahasiswaInput | JadwalUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: JadwalCreateManyMahasiswaInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutMahasiswaInput | JadwalUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutMahasiswaInput | JadwalUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type NilaiInstansiUncheckedUpdateOneWithoutMahasiswaNestedInput = {
    create?: XOR<NilaiInstansiCreateWithoutMahasiswaInput, NilaiInstansiUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: NilaiInstansiCreateOrConnectWithoutMahasiswaInput
    upsert?: NilaiInstansiUpsertWithoutMahasiswaInput
    disconnect?: NilaiInstansiWhereInput | boolean
    delete?: NilaiInstansiWhereInput | boolean
    connect?: NilaiInstansiWhereUniqueInput
    update?: XOR<XOR<NilaiInstansiUpdateToOneWithWhereWithoutMahasiswaInput, NilaiInstansiUpdateWithoutMahasiswaInput>, NilaiInstansiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type PendaftaranKPUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<PendaftaranKPCreateWithoutMahasiswaInput, PendaftaranKPUncheckedCreateWithoutMahasiswaInput> | PendaftaranKPCreateWithoutMahasiswaInput[] | PendaftaranKPUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutMahasiswaInput | PendaftaranKPCreateOrConnectWithoutMahasiswaInput[]
    upsert?: PendaftaranKPUpsertWithWhereUniqueWithoutMahasiswaInput | PendaftaranKPUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: PendaftaranKPCreateManyMahasiswaInputEnvelope
    set?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    disconnect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    delete?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    update?: PendaftaranKPUpdateWithWhereUniqueWithoutMahasiswaInput | PendaftaranKPUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: PendaftaranKPUpdateManyWithWhereWithoutMahasiswaInput | PendaftaranKPUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: PendaftaranKPScalarWhereInput | PendaftaranKPScalarWhereInput[]
  }

  export type NilaiUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<NilaiCreateWithoutMahasiswaInput, NilaiUncheckedCreateWithoutMahasiswaInput> | NilaiCreateWithoutMahasiswaInput[] | NilaiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutMahasiswaInput | NilaiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutMahasiswaInput | NilaiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutMahasiswaInput | NilaiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutMahasiswaInput | NilaiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type JadwalCreateNestedOneWithoutNilaiInput = {
    create?: XOR<JadwalCreateWithoutNilaiInput, JadwalUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: JadwalCreateOrConnectWithoutNilaiInput
    connect?: JadwalWhereUniqueInput
  }

  export type DosenCreateNestedOneWithoutNilaiPengujiInput = {
    create?: XOR<DosenCreateWithoutNilaiPengujiInput, DosenUncheckedCreateWithoutNilaiPengujiInput>
    connectOrCreate?: DosenCreateOrConnectWithoutNilaiPengujiInput
    connect?: DosenWhereUniqueInput
  }

  export type DosenCreateNestedOneWithoutNilaiPembimbingInput = {
    create?: XOR<DosenCreateWithoutNilaiPembimbingInput, DosenUncheckedCreateWithoutNilaiPembimbingInput>
    connectOrCreate?: DosenCreateOrConnectWithoutNilaiPembimbingInput
    connect?: DosenWhereUniqueInput
  }

  export type MahasiswaCreateNestedManyWithoutNilaiInput = {
    create?: XOR<MahasiswaCreateWithoutNilaiInput, MahasiswaUncheckedCreateWithoutNilaiInput> | MahasiswaCreateWithoutNilaiInput[] | MahasiswaUncheckedCreateWithoutNilaiInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutNilaiInput | MahasiswaCreateOrConnectWithoutNilaiInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
  }

  export type MahasiswaUncheckedCreateNestedManyWithoutNilaiInput = {
    create?: XOR<MahasiswaCreateWithoutNilaiInput, MahasiswaUncheckedCreateWithoutNilaiInput> | MahasiswaCreateWithoutNilaiInput[] | MahasiswaUncheckedCreateWithoutNilaiInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutNilaiInput | MahasiswaCreateOrConnectWithoutNilaiInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
  }

  export type JadwalUpdateOneRequiredWithoutNilaiNestedInput = {
    create?: XOR<JadwalCreateWithoutNilaiInput, JadwalUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: JadwalCreateOrConnectWithoutNilaiInput
    upsert?: JadwalUpsertWithoutNilaiInput
    connect?: JadwalWhereUniqueInput
    update?: XOR<XOR<JadwalUpdateToOneWithWhereWithoutNilaiInput, JadwalUpdateWithoutNilaiInput>, JadwalUncheckedUpdateWithoutNilaiInput>
  }

  export type DosenUpdateOneWithoutNilaiPengujiNestedInput = {
    create?: XOR<DosenCreateWithoutNilaiPengujiInput, DosenUncheckedCreateWithoutNilaiPengujiInput>
    connectOrCreate?: DosenCreateOrConnectWithoutNilaiPengujiInput
    upsert?: DosenUpsertWithoutNilaiPengujiInput
    disconnect?: DosenWhereInput | boolean
    delete?: DosenWhereInput | boolean
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutNilaiPengujiInput, DosenUpdateWithoutNilaiPengujiInput>, DosenUncheckedUpdateWithoutNilaiPengujiInput>
  }

  export type DosenUpdateOneWithoutNilaiPembimbingNestedInput = {
    create?: XOR<DosenCreateWithoutNilaiPembimbingInput, DosenUncheckedCreateWithoutNilaiPembimbingInput>
    connectOrCreate?: DosenCreateOrConnectWithoutNilaiPembimbingInput
    upsert?: DosenUpsertWithoutNilaiPembimbingInput
    disconnect?: DosenWhereInput | boolean
    delete?: DosenWhereInput | boolean
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutNilaiPembimbingInput, DosenUpdateWithoutNilaiPembimbingInput>, DosenUncheckedUpdateWithoutNilaiPembimbingInput>
  }

  export type MahasiswaUpdateManyWithoutNilaiNestedInput = {
    create?: XOR<MahasiswaCreateWithoutNilaiInput, MahasiswaUncheckedCreateWithoutNilaiInput> | MahasiswaCreateWithoutNilaiInput[] | MahasiswaUncheckedCreateWithoutNilaiInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutNilaiInput | MahasiswaCreateOrConnectWithoutNilaiInput[]
    upsert?: MahasiswaUpsertWithWhereUniqueWithoutNilaiInput | MahasiswaUpsertWithWhereUniqueWithoutNilaiInput[]
    set?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    disconnect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    delete?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    update?: MahasiswaUpdateWithWhereUniqueWithoutNilaiInput | MahasiswaUpdateWithWhereUniqueWithoutNilaiInput[]
    updateMany?: MahasiswaUpdateManyWithWhereWithoutNilaiInput | MahasiswaUpdateManyWithWhereWithoutNilaiInput[]
    deleteMany?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
  }

  export type MahasiswaUncheckedUpdateManyWithoutNilaiNestedInput = {
    create?: XOR<MahasiswaCreateWithoutNilaiInput, MahasiswaUncheckedCreateWithoutNilaiInput> | MahasiswaCreateWithoutNilaiInput[] | MahasiswaUncheckedCreateWithoutNilaiInput[]
    connectOrCreate?: MahasiswaCreateOrConnectWithoutNilaiInput | MahasiswaCreateOrConnectWithoutNilaiInput[]
    upsert?: MahasiswaUpsertWithWhereUniqueWithoutNilaiInput | MahasiswaUpsertWithWhereUniqueWithoutNilaiInput[]
    set?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    disconnect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    delete?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    connect?: MahasiswaWhereUniqueInput | MahasiswaWhereUniqueInput[]
    update?: MahasiswaUpdateWithWhereUniqueWithoutNilaiInput | MahasiswaUpdateWithWhereUniqueWithoutNilaiInput[]
    updateMany?: MahasiswaUpdateManyWithWhereWithoutNilaiInput | MahasiswaUpdateManyWithWhereWithoutNilaiInput[]
    deleteMany?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
  }

  export type PembimbingInstansiCreateNestedOneWithoutNilaiInstansiInput = {
    create?: XOR<PembimbingInstansiCreateWithoutNilaiInstansiInput, PembimbingInstansiUncheckedCreateWithoutNilaiInstansiInput>
    connectOrCreate?: PembimbingInstansiCreateOrConnectWithoutNilaiInstansiInput
    connect?: PembimbingInstansiWhereUniqueInput
  }

  export type MahasiswaCreateNestedOneWithoutNilaiInstansiInput = {
    create?: XOR<MahasiswaCreateWithoutNilaiInstansiInput, MahasiswaUncheckedCreateWithoutNilaiInstansiInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutNilaiInstansiInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type PembimbingInstansiUpdateOneRequiredWithoutNilaiInstansiNestedInput = {
    create?: XOR<PembimbingInstansiCreateWithoutNilaiInstansiInput, PembimbingInstansiUncheckedCreateWithoutNilaiInstansiInput>
    connectOrCreate?: PembimbingInstansiCreateOrConnectWithoutNilaiInstansiInput
    upsert?: PembimbingInstansiUpsertWithoutNilaiInstansiInput
    connect?: PembimbingInstansiWhereUniqueInput
    update?: XOR<XOR<PembimbingInstansiUpdateToOneWithWhereWithoutNilaiInstansiInput, PembimbingInstansiUpdateWithoutNilaiInstansiInput>, PembimbingInstansiUncheckedUpdateWithoutNilaiInstansiInput>
  }

  export type MahasiswaUpdateOneRequiredWithoutNilaiInstansiNestedInput = {
    create?: XOR<MahasiswaCreateWithoutNilaiInstansiInput, MahasiswaUncheckedCreateWithoutNilaiInstansiInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutNilaiInstansiInput
    upsert?: MahasiswaUpsertWithoutNilaiInstansiInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutNilaiInstansiInput, MahasiswaUpdateWithoutNilaiInstansiInput>, MahasiswaUncheckedUpdateWithoutNilaiInstansiInput>
  }

  export type NilaiInstansiCreateNestedManyWithoutPembimbingInstansiInput = {
    create?: XOR<NilaiInstansiCreateWithoutPembimbingInstansiInput, NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput> | NilaiInstansiCreateWithoutPembimbingInstansiInput[] | NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput[]
    connectOrCreate?: NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput | NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput[]
    createMany?: NilaiInstansiCreateManyPembimbingInstansiInputEnvelope
    connect?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
  }

  export type InstansiCreateNestedOneWithoutPembimbingInstansiInput = {
    create?: XOR<InstansiCreateWithoutPembimbingInstansiInput, InstansiUncheckedCreateWithoutPembimbingInstansiInput>
    connectOrCreate?: InstansiCreateOrConnectWithoutPembimbingInstansiInput
    connect?: InstansiWhereUniqueInput
  }

  export type PendaftaranKPCreateNestedManyWithoutPembimbingInstansiInput = {
    create?: XOR<PendaftaranKPCreateWithoutPembimbingInstansiInput, PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput> | PendaftaranKPCreateWithoutPembimbingInstansiInput[] | PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput | PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput[]
    createMany?: PendaftaranKPCreateManyPembimbingInstansiInputEnvelope
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
  }

  export type NilaiInstansiUncheckedCreateNestedManyWithoutPembimbingInstansiInput = {
    create?: XOR<NilaiInstansiCreateWithoutPembimbingInstansiInput, NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput> | NilaiInstansiCreateWithoutPembimbingInstansiInput[] | NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput[]
    connectOrCreate?: NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput | NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput[]
    createMany?: NilaiInstansiCreateManyPembimbingInstansiInputEnvelope
    connect?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
  }

  export type PendaftaranKPUncheckedCreateNestedManyWithoutPembimbingInstansiInput = {
    create?: XOR<PendaftaranKPCreateWithoutPembimbingInstansiInput, PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput> | PendaftaranKPCreateWithoutPembimbingInstansiInput[] | PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput | PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput[]
    createMany?: PendaftaranKPCreateManyPembimbingInstansiInputEnvelope
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
  }

  export type NilaiInstansiUpdateManyWithoutPembimbingInstansiNestedInput = {
    create?: XOR<NilaiInstansiCreateWithoutPembimbingInstansiInput, NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput> | NilaiInstansiCreateWithoutPembimbingInstansiInput[] | NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput[]
    connectOrCreate?: NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput | NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput[]
    upsert?: NilaiInstansiUpsertWithWhereUniqueWithoutPembimbingInstansiInput | NilaiInstansiUpsertWithWhereUniqueWithoutPembimbingInstansiInput[]
    createMany?: NilaiInstansiCreateManyPembimbingInstansiInputEnvelope
    set?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
    disconnect?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
    delete?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
    connect?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
    update?: NilaiInstansiUpdateWithWhereUniqueWithoutPembimbingInstansiInput | NilaiInstansiUpdateWithWhereUniqueWithoutPembimbingInstansiInput[]
    updateMany?: NilaiInstansiUpdateManyWithWhereWithoutPembimbingInstansiInput | NilaiInstansiUpdateManyWithWhereWithoutPembimbingInstansiInput[]
    deleteMany?: NilaiInstansiScalarWhereInput | NilaiInstansiScalarWhereInput[]
  }

  export type InstansiUpdateOneRequiredWithoutPembimbingInstansiNestedInput = {
    create?: XOR<InstansiCreateWithoutPembimbingInstansiInput, InstansiUncheckedCreateWithoutPembimbingInstansiInput>
    connectOrCreate?: InstansiCreateOrConnectWithoutPembimbingInstansiInput
    upsert?: InstansiUpsertWithoutPembimbingInstansiInput
    connect?: InstansiWhereUniqueInput
    update?: XOR<XOR<InstansiUpdateToOneWithWhereWithoutPembimbingInstansiInput, InstansiUpdateWithoutPembimbingInstansiInput>, InstansiUncheckedUpdateWithoutPembimbingInstansiInput>
  }

  export type PendaftaranKPUpdateManyWithoutPembimbingInstansiNestedInput = {
    create?: XOR<PendaftaranKPCreateWithoutPembimbingInstansiInput, PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput> | PendaftaranKPCreateWithoutPembimbingInstansiInput[] | PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput | PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput[]
    upsert?: PendaftaranKPUpsertWithWhereUniqueWithoutPembimbingInstansiInput | PendaftaranKPUpsertWithWhereUniqueWithoutPembimbingInstansiInput[]
    createMany?: PendaftaranKPCreateManyPembimbingInstansiInputEnvelope
    set?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    disconnect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    delete?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    update?: PendaftaranKPUpdateWithWhereUniqueWithoutPembimbingInstansiInput | PendaftaranKPUpdateWithWhereUniqueWithoutPembimbingInstansiInput[]
    updateMany?: PendaftaranKPUpdateManyWithWhereWithoutPembimbingInstansiInput | PendaftaranKPUpdateManyWithWhereWithoutPembimbingInstansiInput[]
    deleteMany?: PendaftaranKPScalarWhereInput | PendaftaranKPScalarWhereInput[]
  }

  export type NilaiInstansiUncheckedUpdateManyWithoutPembimbingInstansiNestedInput = {
    create?: XOR<NilaiInstansiCreateWithoutPembimbingInstansiInput, NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput> | NilaiInstansiCreateWithoutPembimbingInstansiInput[] | NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput[]
    connectOrCreate?: NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput | NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput[]
    upsert?: NilaiInstansiUpsertWithWhereUniqueWithoutPembimbingInstansiInput | NilaiInstansiUpsertWithWhereUniqueWithoutPembimbingInstansiInput[]
    createMany?: NilaiInstansiCreateManyPembimbingInstansiInputEnvelope
    set?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
    disconnect?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
    delete?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
    connect?: NilaiInstansiWhereUniqueInput | NilaiInstansiWhereUniqueInput[]
    update?: NilaiInstansiUpdateWithWhereUniqueWithoutPembimbingInstansiInput | NilaiInstansiUpdateWithWhereUniqueWithoutPembimbingInstansiInput[]
    updateMany?: NilaiInstansiUpdateManyWithWhereWithoutPembimbingInstansiInput | NilaiInstansiUpdateManyWithWhereWithoutPembimbingInstansiInput[]
    deleteMany?: NilaiInstansiScalarWhereInput | NilaiInstansiScalarWhereInput[]
  }

  export type PendaftaranKPUncheckedUpdateManyWithoutPembimbingInstansiNestedInput = {
    create?: XOR<PendaftaranKPCreateWithoutPembimbingInstansiInput, PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput> | PendaftaranKPCreateWithoutPembimbingInstansiInput[] | PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput[]
    connectOrCreate?: PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput | PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput[]
    upsert?: PendaftaranKPUpsertWithWhereUniqueWithoutPembimbingInstansiInput | PendaftaranKPUpsertWithWhereUniqueWithoutPembimbingInstansiInput[]
    createMany?: PendaftaranKPCreateManyPembimbingInstansiInputEnvelope
    set?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    disconnect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    delete?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    connect?: PendaftaranKPWhereUniqueInput | PendaftaranKPWhereUniqueInput[]
    update?: PendaftaranKPUpdateWithWhereUniqueWithoutPembimbingInstansiInput | PendaftaranKPUpdateWithWhereUniqueWithoutPembimbingInstansiInput[]
    updateMany?: PendaftaranKPUpdateManyWithWhereWithoutPembimbingInstansiInput | PendaftaranKPUpdateManyWithWhereWithoutPembimbingInstansiInput[]
    deleteMany?: PendaftaranKPScalarWhereInput | PendaftaranKPScalarWhereInput[]
  }

  export type PembimbingInstansiCreateNestedOneWithoutPendaftaranKPInput = {
    create?: XOR<PembimbingInstansiCreateWithoutPendaftaranKPInput, PembimbingInstansiUncheckedCreateWithoutPendaftaranKPInput>
    connectOrCreate?: PembimbingInstansiCreateOrConnectWithoutPendaftaranKPInput
    connect?: PembimbingInstansiWhereUniqueInput
  }

  export type MahasiswaCreateNestedOneWithoutPendaftaranKPInput = {
    create?: XOR<MahasiswaCreateWithoutPendaftaranKPInput, MahasiswaUncheckedCreateWithoutPendaftaranKPInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPendaftaranKPInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type DosenCreateNestedOneWithoutPendaftaranKPInput = {
    create?: XOR<DosenCreateWithoutPendaftaranKPInput, DosenUncheckedCreateWithoutPendaftaranKPInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPendaftaranKPInput
    connect?: DosenWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PembimbingInstansiUpdateOneRequiredWithoutPendaftaranKPNestedInput = {
    create?: XOR<PembimbingInstansiCreateWithoutPendaftaranKPInput, PembimbingInstansiUncheckedCreateWithoutPendaftaranKPInput>
    connectOrCreate?: PembimbingInstansiCreateOrConnectWithoutPendaftaranKPInput
    upsert?: PembimbingInstansiUpsertWithoutPendaftaranKPInput
    connect?: PembimbingInstansiWhereUniqueInput
    update?: XOR<XOR<PembimbingInstansiUpdateToOneWithWhereWithoutPendaftaranKPInput, PembimbingInstansiUpdateWithoutPendaftaranKPInput>, PembimbingInstansiUncheckedUpdateWithoutPendaftaranKPInput>
  }

  export type MahasiswaUpdateOneRequiredWithoutPendaftaranKPNestedInput = {
    create?: XOR<MahasiswaCreateWithoutPendaftaranKPInput, MahasiswaUncheckedCreateWithoutPendaftaranKPInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPendaftaranKPInput
    upsert?: MahasiswaUpsertWithoutPendaftaranKPInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutPendaftaranKPInput, MahasiswaUpdateWithoutPendaftaranKPInput>, MahasiswaUncheckedUpdateWithoutPendaftaranKPInput>
  }

  export type DosenUpdateOneWithoutPendaftaranKPNestedInput = {
    create?: XOR<DosenCreateWithoutPendaftaranKPInput, DosenUncheckedCreateWithoutPendaftaranKPInput>
    connectOrCreate?: DosenCreateOrConnectWithoutPendaftaranKPInput
    upsert?: DosenUpsertWithoutPendaftaranKPInput
    disconnect?: DosenWhereInput | boolean
    delete?: DosenWhereInput | boolean
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutPendaftaranKPInput, DosenUpdateWithoutPendaftaranKPInput>, DosenUncheckedUpdateWithoutPendaftaranKPInput>
  }

  export type JadwalCreateNestedManyWithoutRuanganInput = {
    create?: XOR<JadwalCreateWithoutRuanganInput, JadwalUncheckedCreateWithoutRuanganInput> | JadwalCreateWithoutRuanganInput[] | JadwalUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutRuanganInput | JadwalCreateOrConnectWithoutRuanganInput[]
    createMany?: JadwalCreateManyRuanganInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type JadwalUncheckedCreateNestedManyWithoutRuanganInput = {
    create?: XOR<JadwalCreateWithoutRuanganInput, JadwalUncheckedCreateWithoutRuanganInput> | JadwalCreateWithoutRuanganInput[] | JadwalUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutRuanganInput | JadwalCreateOrConnectWithoutRuanganInput[]
    createMany?: JadwalCreateManyRuanganInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type JadwalUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<JadwalCreateWithoutRuanganInput, JadwalUncheckedCreateWithoutRuanganInput> | JadwalCreateWithoutRuanganInput[] | JadwalUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutRuanganInput | JadwalCreateOrConnectWithoutRuanganInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutRuanganInput | JadwalUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: JadwalCreateManyRuanganInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutRuanganInput | JadwalUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutRuanganInput | JadwalUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type JadwalUncheckedUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<JadwalCreateWithoutRuanganInput, JadwalUncheckedCreateWithoutRuanganInput> | JadwalCreateWithoutRuanganInput[] | JadwalUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutRuanganInput | JadwalCreateOrConnectWithoutRuanganInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutRuanganInput | JadwalUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: JadwalCreateManyRuanganInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutRuanganInput | JadwalUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutRuanganInput | JadwalUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
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

  export type NestedEnumStatusValidasiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusValidasi | EnumStatusValidasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusValidasiFilter<$PrismaModel> | $Enums.StatusValidasi
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

  export type NestedEnumStatusValidasiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusValidasi | EnumStatusValidasiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusValidasi[] | ListEnumStatusValidasiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusValidasiWithAggregatesFilter<$PrismaModel> | $Enums.StatusValidasi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusValidasiFilter<$PrismaModel>
    _max?: NestedEnumStatusValidasiFilter<$PrismaModel>
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

  export type NestedEnumJenisDokumenFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisDokumenFilter<$PrismaModel> | $Enums.JenisDokumen
  }

  export type NestedEnumDokumenStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DokumenStatus | EnumDokumenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDokumenStatusFilter<$PrismaModel> | $Enums.DokumenStatus
  }

  export type NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisDokumen | EnumJenisDokumenFieldRefInput<$PrismaModel>
    in?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisDokumen[] | ListEnumJenisDokumenFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisDokumenWithAggregatesFilter<$PrismaModel> | $Enums.JenisDokumen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisDokumenFilter<$PrismaModel>
    _max?: NestedEnumJenisDokumenFilter<$PrismaModel>
  }

  export type NestedEnumDokumenStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DokumenStatus | EnumDokumenStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DokumenStatus[] | ListEnumDokumenStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDokumenStatusWithAggregatesFilter<$PrismaModel> | $Enums.DokumenStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDokumenStatusFilter<$PrismaModel>
    _max?: NestedEnumDokumenStatusFilter<$PrismaModel>
  }

  export type NestedEnumJenisInstansiFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisInstansi | EnumJenisInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisInstansiFilter<$PrismaModel> | $Enums.JenisInstansi
  }

  export type NestedEnumStatusInstansiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInstansi | EnumStatusInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInstansiFilter<$PrismaModel> | $Enums.StatusInstansi
  }

  export type NestedEnumJenisInstansiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisInstansi | EnumJenisInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisInstansi[] | ListEnumJenisInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisInstansiWithAggregatesFilter<$PrismaModel> | $Enums.JenisInstansi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisInstansiFilter<$PrismaModel>
    _max?: NestedEnumJenisInstansiFilter<$PrismaModel>
  }

  export type NestedEnumStatusInstansiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInstansi | EnumStatusInstansiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusInstansi[] | ListEnumStatusInstansiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusInstansiWithAggregatesFilter<$PrismaModel> | $Enums.StatusInstansi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusInstansiFilter<$PrismaModel>
    _max?: NestedEnumStatusInstansiFilter<$PrismaModel>
  }

  export type NestedEnumStatusSeminarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSeminar | EnumStatusSeminarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSeminarFilter<$PrismaModel> | $Enums.StatusSeminar
  }

  export type NestedEnumStatusSeminarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSeminar | EnumStatusSeminarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSeminar[] | ListEnumStatusSeminarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSeminarWithAggregatesFilter<$PrismaModel> | $Enums.StatusSeminar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSeminarFilter<$PrismaModel>
    _max?: NestedEnumStatusSeminarFilter<$PrismaModel>
  }

  export type NestedEnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
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

  export type NestedEnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
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

  export type MahasiswaCreateWithoutBimbinganInput = {
    nim: string
    nama: string
    email: string
    DailyReport?: DailyReportCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutBimbinganInput = {
    nim: string
    nama: string
    email: string
    DailyReport?: DailyReportUncheckedCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutBimbinganInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutBimbinganInput, MahasiswaUncheckedCreateWithoutBimbinganInput>
  }

  export type DosenCreateWithoutBimbinganInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Jadwal?: JadwalCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiCreateNestedManyWithoutDosenPengujiInput
    NilaiPembimbing?: NilaiCreateNestedManyWithoutDosenPembimbingInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutBimbinganInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiUncheckedCreateNestedManyWithoutDosenPengujiInput
    NilaiPembimbing?: NilaiUncheckedCreateNestedManyWithoutDosenPembimbingInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutBimbinganInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutBimbinganInput, DosenUncheckedCreateWithoutBimbinganInput>
  }

  export type MahasiswaUpsertWithoutBimbinganInput = {
    update: XOR<MahasiswaUpdateWithoutBimbinganInput, MahasiswaUncheckedUpdateWithoutBimbinganInput>
    create: XOR<MahasiswaCreateWithoutBimbinganInput, MahasiswaUncheckedCreateWithoutBimbinganInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutBimbinganInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutBimbinganInput, MahasiswaUncheckedUpdateWithoutBimbinganInput>
  }

  export type MahasiswaUpdateWithoutBimbinganInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    DailyReport?: DailyReportUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutBimbinganInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    DailyReport?: DailyReportUncheckedUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type DosenUpsertWithoutBimbinganInput = {
    update: XOR<DosenUpdateWithoutBimbinganInput, DosenUncheckedUpdateWithoutBimbinganInput>
    create: XOR<DosenCreateWithoutBimbinganInput, DosenUncheckedCreateWithoutBimbinganInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutBimbinganInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutBimbinganInput, DosenUncheckedUpdateWithoutBimbinganInput>
  }

  export type DosenUpdateWithoutBimbinganInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Jadwal?: JadwalUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUpdateManyWithoutDosenPengujiNestedInput
    NilaiPembimbing?: NilaiUpdateManyWithoutDosenPembimbingNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutBimbinganInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Jadwal?: JadwalUncheckedUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUncheckedUpdateManyWithoutDosenPengujiNestedInput
    NilaiPembimbing?: NilaiUncheckedUpdateManyWithoutDosenPembimbingNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type MahasiswaCreateWithoutDailyReportInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutDailyReportInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutDailyReportInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutDailyReportInput, MahasiswaUncheckedCreateWithoutDailyReportInput>
  }

  export type DetailDailyReportCreateWithoutDailyReportInput = {
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
  }

  export type DetailDailyReportUncheckedCreateWithoutDailyReportInput = {
    id?: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
  }

  export type DetailDailyReportCreateOrConnectWithoutDailyReportInput = {
    where: DetailDailyReportWhereUniqueInput
    create: XOR<DetailDailyReportCreateWithoutDailyReportInput, DetailDailyReportUncheckedCreateWithoutDailyReportInput>
  }

  export type DetailDailyReportCreateManyDailyReportInputEnvelope = {
    data: DetailDailyReportCreateManyDailyReportInput | DetailDailyReportCreateManyDailyReportInput[]
    skipDuplicates?: boolean
  }

  export type MahasiswaUpsertWithoutDailyReportInput = {
    update: XOR<MahasiswaUpdateWithoutDailyReportInput, MahasiswaUncheckedUpdateWithoutDailyReportInput>
    create: XOR<MahasiswaCreateWithoutDailyReportInput, MahasiswaUncheckedCreateWithoutDailyReportInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutDailyReportInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutDailyReportInput, MahasiswaUncheckedUpdateWithoutDailyReportInput>
  }

  export type MahasiswaUpdateWithoutDailyReportInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutDailyReportInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type DetailDailyReportUpsertWithWhereUniqueWithoutDailyReportInput = {
    where: DetailDailyReportWhereUniqueInput
    update: XOR<DetailDailyReportUpdateWithoutDailyReportInput, DetailDailyReportUncheckedUpdateWithoutDailyReportInput>
    create: XOR<DetailDailyReportCreateWithoutDailyReportInput, DetailDailyReportUncheckedCreateWithoutDailyReportInput>
  }

  export type DetailDailyReportUpdateWithWhereUniqueWithoutDailyReportInput = {
    where: DetailDailyReportWhereUniqueInput
    data: XOR<DetailDailyReportUpdateWithoutDailyReportInput, DetailDailyReportUncheckedUpdateWithoutDailyReportInput>
  }

  export type DetailDailyReportUpdateManyWithWhereWithoutDailyReportInput = {
    where: DetailDailyReportScalarWhereInput
    data: XOR<DetailDailyReportUpdateManyMutationInput, DetailDailyReportUncheckedUpdateManyWithoutDailyReportInput>
  }

  export type DetailDailyReportScalarWhereInput = {
    AND?: DetailDailyReportScalarWhereInput | DetailDailyReportScalarWhereInput[]
    OR?: DetailDailyReportScalarWhereInput[]
    NOT?: DetailDailyReportScalarWhereInput | DetailDailyReportScalarWhereInput[]
    id?: IntFilter<"DetailDailyReport"> | number
    judul_kegiatan?: StringFilter<"DetailDailyReport"> | string
    deskripsi_kegiatan?: StringFilter<"DetailDailyReport"> | string
    waktu?: DateTimeFilter<"DetailDailyReport"> | Date | string
    id_daily_report?: StringFilter<"DetailDailyReport"> | string
  }

  export type DailyReportCreateWithoutDetailDailyReportInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    Mahasiswa: MahasiswaCreateNestedOneWithoutDailyReportInput
  }

  export type DailyReportUncheckedCreateWithoutDetailDailyReportInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    nim: string
  }

  export type DailyReportCreateOrConnectWithoutDetailDailyReportInput = {
    where: DailyReportWhereUniqueInput
    create: XOR<DailyReportCreateWithoutDetailDailyReportInput, DailyReportUncheckedCreateWithoutDetailDailyReportInput>
  }

  export type DailyReportUpsertWithoutDetailDailyReportInput = {
    update: XOR<DailyReportUpdateWithoutDetailDailyReportInput, DailyReportUncheckedUpdateWithoutDetailDailyReportInput>
    create: XOR<DailyReportCreateWithoutDetailDailyReportInput, DailyReportUncheckedCreateWithoutDetailDailyReportInput>
    where?: DailyReportWhereInput
  }

  export type DailyReportUpdateToOneWithWhereWithoutDetailDailyReportInput = {
    where?: DailyReportWhereInput
    data: XOR<DailyReportUpdateWithoutDetailDailyReportInput, DailyReportUncheckedUpdateWithoutDetailDailyReportInput>
  }

  export type DailyReportUpdateWithoutDetailDailyReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutDailyReportNestedInput
  }

  export type DailyReportUncheckedUpdateWithoutDetailDailyReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaCreateWithoutDokumenInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutDokumenInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportUncheckedCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutDokumenInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutDokumenInput, MahasiswaUncheckedCreateWithoutDokumenInput>
  }

  export type MahasiswaUpsertWithoutDokumenInput = {
    update: XOR<MahasiswaUpdateWithoutDokumenInput, MahasiswaUncheckedUpdateWithoutDokumenInput>
    create: XOR<MahasiswaCreateWithoutDokumenInput, MahasiswaUncheckedCreateWithoutDokumenInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutDokumenInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutDokumenInput, MahasiswaUncheckedUpdateWithoutDokumenInput>
  }

  export type MahasiswaUpdateWithoutDokumenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutDokumenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUncheckedUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type BimbinganCreateWithoutDosenInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    Mahasiswa: MahasiswaCreateNestedOneWithoutBimbinganInput
  }

  export type BimbinganUncheckedCreateWithoutDosenInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
  }

  export type BimbinganCreateOrConnectWithoutDosenInput = {
    where: BimbinganWhereUniqueInput
    create: XOR<BimbinganCreateWithoutDosenInput, BimbinganUncheckedCreateWithoutDosenInput>
  }

  export type BimbinganCreateManyDosenInputEnvelope = {
    data: BimbinganCreateManyDosenInput | BimbinganCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type JadwalCreateWithoutDosenInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    Mahasiswa: MahasiswaCreateNestedOneWithoutJadwalInput
    Ruangan: RuanganCreateNestedOneWithoutJadwalInput
    Nilai?: NilaiCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutDosenInput = {
    id: string
    nim: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
    Nilai?: NilaiUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type JadwalCreateOrConnectWithoutDosenInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutDosenInput, JadwalUncheckedCreateWithoutDosenInput>
  }

  export type JadwalCreateManyDosenInputEnvelope = {
    data: JadwalCreateManyDosenInput | JadwalCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type NilaiCreateWithoutDosenPengujiInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    Jadwal: JadwalCreateNestedOneWithoutNilaiInput
    DosenPembimbing?: DosenCreateNestedOneWithoutNilaiPembimbingInput
    Mahasiswa?: MahasiswaCreateNestedManyWithoutNilaiInput
  }

  export type NilaiUncheckedCreateWithoutDosenPengujiInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    Mahasiswa?: MahasiswaUncheckedCreateNestedManyWithoutNilaiInput
  }

  export type NilaiCreateOrConnectWithoutDosenPengujiInput = {
    where: NilaiWhereUniqueInput
    create: XOR<NilaiCreateWithoutDosenPengujiInput, NilaiUncheckedCreateWithoutDosenPengujiInput>
  }

  export type NilaiCreateManyDosenPengujiInputEnvelope = {
    data: NilaiCreateManyDosenPengujiInput | NilaiCreateManyDosenPengujiInput[]
    skipDuplicates?: boolean
  }

  export type NilaiCreateWithoutDosenPembimbingInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    Jadwal: JadwalCreateNestedOneWithoutNilaiInput
    DosenPenguji?: DosenCreateNestedOneWithoutNilaiPengujiInput
    Mahasiswa?: MahasiswaCreateNestedManyWithoutNilaiInput
  }

  export type NilaiUncheckedCreateWithoutDosenPembimbingInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    Mahasiswa?: MahasiswaUncheckedCreateNestedManyWithoutNilaiInput
  }

  export type NilaiCreateOrConnectWithoutDosenPembimbingInput = {
    where: NilaiWhereUniqueInput
    create: XOR<NilaiCreateWithoutDosenPembimbingInput, NilaiUncheckedCreateWithoutDosenPembimbingInput>
  }

  export type NilaiCreateManyDosenPembimbingInputEnvelope = {
    data: NilaiCreateManyDosenPembimbingInput | NilaiCreateManyDosenPembimbingInput[]
    skipDuplicates?: boolean
  }

  export type PendaftaranKPCreateWithoutDosenInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    PembimbingInstansi: PembimbingInstansiCreateNestedOneWithoutPendaftaranKPInput
    Mahasiswa: MahasiswaCreateNestedOneWithoutPendaftaranKPInput
  }

  export type PendaftaranKPUncheckedCreateWithoutDosenInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
  }

  export type PendaftaranKPCreateOrConnectWithoutDosenInput = {
    where: PendaftaranKPWhereUniqueInput
    create: XOR<PendaftaranKPCreateWithoutDosenInput, PendaftaranKPUncheckedCreateWithoutDosenInput>
  }

  export type PendaftaranKPCreateManyDosenInputEnvelope = {
    data: PendaftaranKPCreateManyDosenInput | PendaftaranKPCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type BimbinganUpsertWithWhereUniqueWithoutDosenInput = {
    where: BimbinganWhereUniqueInput
    update: XOR<BimbinganUpdateWithoutDosenInput, BimbinganUncheckedUpdateWithoutDosenInput>
    create: XOR<BimbinganCreateWithoutDosenInput, BimbinganUncheckedCreateWithoutDosenInput>
  }

  export type BimbinganUpdateWithWhereUniqueWithoutDosenInput = {
    where: BimbinganWhereUniqueInput
    data: XOR<BimbinganUpdateWithoutDosenInput, BimbinganUncheckedUpdateWithoutDosenInput>
  }

  export type BimbinganUpdateManyWithWhereWithoutDosenInput = {
    where: BimbinganScalarWhereInput
    data: XOR<BimbinganUpdateManyMutationInput, BimbinganUncheckedUpdateManyWithoutDosenInput>
  }

  export type BimbinganScalarWhereInput = {
    AND?: BimbinganScalarWhereInput | BimbinganScalarWhereInput[]
    OR?: BimbinganScalarWhereInput[]
    NOT?: BimbinganScalarWhereInput | BimbinganScalarWhereInput[]
    id?: StringFilter<"Bimbingan"> | string
    tanggal?: DateTimeFilter<"Bimbingan"> | Date | string
    catatan?: StringFilter<"Bimbingan"> | string
    status?: EnumStatusValidasiFilter<"Bimbingan"> | $Enums.StatusValidasi
    nim?: StringFilter<"Bimbingan"> | string
    nip?: StringFilter<"Bimbingan"> | string
  }

  export type JadwalUpsertWithWhereUniqueWithoutDosenInput = {
    where: JadwalWhereUniqueInput
    update: XOR<JadwalUpdateWithoutDosenInput, JadwalUncheckedUpdateWithoutDosenInput>
    create: XOR<JadwalCreateWithoutDosenInput, JadwalUncheckedCreateWithoutDosenInput>
  }

  export type JadwalUpdateWithWhereUniqueWithoutDosenInput = {
    where: JadwalWhereUniqueInput
    data: XOR<JadwalUpdateWithoutDosenInput, JadwalUncheckedUpdateWithoutDosenInput>
  }

  export type JadwalUpdateManyWithWhereWithoutDosenInput = {
    where: JadwalScalarWhereInput
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyWithoutDosenInput>
  }

  export type JadwalScalarWhereInput = {
    AND?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
    OR?: JadwalScalarWhereInput[]
    NOT?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
    id?: StringFilter<"Jadwal"> | string
    nim?: StringFilter<"Jadwal"> | string
    nip?: StringFilter<"Jadwal"> | string
    tanggal?: DateTimeFilter<"Jadwal"> | Date | string
    waktu_mulai?: DateTimeFilter<"Jadwal"> | Date | string
    waktu_selesai?: DateTimeFilter<"Jadwal"> | Date | string
    ruangan_nama?: StringFilter<"Jadwal"> | string
    status?: EnumStatusSeminarFilter<"Jadwal"> | $Enums.StatusSeminar
  }

  export type NilaiUpsertWithWhereUniqueWithoutDosenPengujiInput = {
    where: NilaiWhereUniqueInput
    update: XOR<NilaiUpdateWithoutDosenPengujiInput, NilaiUncheckedUpdateWithoutDosenPengujiInput>
    create: XOR<NilaiCreateWithoutDosenPengujiInput, NilaiUncheckedCreateWithoutDosenPengujiInput>
  }

  export type NilaiUpdateWithWhereUniqueWithoutDosenPengujiInput = {
    where: NilaiWhereUniqueInput
    data: XOR<NilaiUpdateWithoutDosenPengujiInput, NilaiUncheckedUpdateWithoutDosenPengujiInput>
  }

  export type NilaiUpdateManyWithWhereWithoutDosenPengujiInput = {
    where: NilaiScalarWhereInput
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyWithoutDosenPengujiInput>
  }

  export type NilaiScalarWhereInput = {
    AND?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
    OR?: NilaiScalarWhereInput[]
    NOT?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
    id?: StringFilter<"Nilai"> | string
    nim?: StringFilter<"Nilai"> | string
    jadwal_seminar_id?: StringFilter<"Nilai"> | string
    nip_penguji?: StringFilter<"Nilai"> | string
    nip_pembimbing?: StringFilter<"Nilai"> | string
    nilai_pembimbing?: FloatFilter<"Nilai"> | number
    nilai_penguji?: FloatFilter<"Nilai"> | number
    note_pembimbing?: StringNullableFilter<"Nilai"> | string | null
    note_penguji?: StringNullableFilter<"Nilai"> | string | null
  }

  export type NilaiUpsertWithWhereUniqueWithoutDosenPembimbingInput = {
    where: NilaiWhereUniqueInput
    update: XOR<NilaiUpdateWithoutDosenPembimbingInput, NilaiUncheckedUpdateWithoutDosenPembimbingInput>
    create: XOR<NilaiCreateWithoutDosenPembimbingInput, NilaiUncheckedCreateWithoutDosenPembimbingInput>
  }

  export type NilaiUpdateWithWhereUniqueWithoutDosenPembimbingInput = {
    where: NilaiWhereUniqueInput
    data: XOR<NilaiUpdateWithoutDosenPembimbingInput, NilaiUncheckedUpdateWithoutDosenPembimbingInput>
  }

  export type NilaiUpdateManyWithWhereWithoutDosenPembimbingInput = {
    where: NilaiScalarWhereInput
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyWithoutDosenPembimbingInput>
  }

  export type PendaftaranKPUpsertWithWhereUniqueWithoutDosenInput = {
    where: PendaftaranKPWhereUniqueInput
    update: XOR<PendaftaranKPUpdateWithoutDosenInput, PendaftaranKPUncheckedUpdateWithoutDosenInput>
    create: XOR<PendaftaranKPCreateWithoutDosenInput, PendaftaranKPUncheckedCreateWithoutDosenInput>
  }

  export type PendaftaranKPUpdateWithWhereUniqueWithoutDosenInput = {
    where: PendaftaranKPWhereUniqueInput
    data: XOR<PendaftaranKPUpdateWithoutDosenInput, PendaftaranKPUncheckedUpdateWithoutDosenInput>
  }

  export type PendaftaranKPUpdateManyWithWhereWithoutDosenInput = {
    where: PendaftaranKPScalarWhereInput
    data: XOR<PendaftaranKPUpdateManyMutationInput, PendaftaranKPUncheckedUpdateManyWithoutDosenInput>
  }

  export type PendaftaranKPScalarWhereInput = {
    AND?: PendaftaranKPScalarWhereInput | PendaftaranKPScalarWhereInput[]
    OR?: PendaftaranKPScalarWhereInput[]
    NOT?: PendaftaranKPScalarWhereInput | PendaftaranKPScalarWhereInput[]
    nim?: StringFilter<"PendaftaranKP"> | string
    semester?: IntFilter<"PendaftaranKP"> | number
    tanggalTerdaftar?: DateTimeFilter<"PendaftaranKP"> | Date | string
    tanggalMulai?: DateTimeNullableFilter<"PendaftaranKP"> | Date | string | null
    tenggatWaktu?: DateTimeFilter<"PendaftaranKP"> | Date | string
    gagal?: BoolFilter<"PendaftaranKP"> | boolean
    tanggalSelesai?: DateTimeNullableFilter<"PendaftaranKP"> | Date | string | null
    linkSuratPengantar?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratBalasan?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratPenunjukkanDospem?: StringNullableFilter<"PendaftaranKP"> | string | null
    alasanLanjutKP?: StringNullableFilter<"PendaftaranKP"> | string | null
    linkSuratPerpanjanganKP?: StringNullableFilter<"PendaftaranKP"> | string | null
    id_pembimbing_instansi?: StringFilter<"PendaftaranKP"> | string
    nip?: StringNullableFilter<"PendaftaranKP"> | string | null
  }

  export type PembimbingInstansiCreateWithoutInstansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    NilaiInstansi?: NilaiInstansiCreateNestedManyWithoutPembimbingInstansiInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutPembimbingInstansiInput
  }

  export type PembimbingInstansiUncheckedCreateWithoutInstansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedManyWithoutPembimbingInstansiInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutPembimbingInstansiInput
  }

  export type PembimbingInstansiCreateOrConnectWithoutInstansiInput = {
    where: PembimbingInstansiWhereUniqueInput
    create: XOR<PembimbingInstansiCreateWithoutInstansiInput, PembimbingInstansiUncheckedCreateWithoutInstansiInput>
  }

  export type PembimbingInstansiCreateManyInstansiInputEnvelope = {
    data: PembimbingInstansiCreateManyInstansiInput | PembimbingInstansiCreateManyInstansiInput[]
    skipDuplicates?: boolean
  }

  export type PembimbingInstansiUpsertWithWhereUniqueWithoutInstansiInput = {
    where: PembimbingInstansiWhereUniqueInput
    update: XOR<PembimbingInstansiUpdateWithoutInstansiInput, PembimbingInstansiUncheckedUpdateWithoutInstansiInput>
    create: XOR<PembimbingInstansiCreateWithoutInstansiInput, PembimbingInstansiUncheckedCreateWithoutInstansiInput>
  }

  export type PembimbingInstansiUpdateWithWhereUniqueWithoutInstansiInput = {
    where: PembimbingInstansiWhereUniqueInput
    data: XOR<PembimbingInstansiUpdateWithoutInstansiInput, PembimbingInstansiUncheckedUpdateWithoutInstansiInput>
  }

  export type PembimbingInstansiUpdateManyWithWhereWithoutInstansiInput = {
    where: PembimbingInstansiScalarWhereInput
    data: XOR<PembimbingInstansiUpdateManyMutationInput, PembimbingInstansiUncheckedUpdateManyWithoutInstansiInput>
  }

  export type PembimbingInstansiScalarWhereInput = {
    AND?: PembimbingInstansiScalarWhereInput | PembimbingInstansiScalarWhereInput[]
    OR?: PembimbingInstansiScalarWhereInput[]
    NOT?: PembimbingInstansiScalarWhereInput | PembimbingInstansiScalarWhereInput[]
    id?: StringFilter<"PembimbingInstansi"> | string
    nama?: StringFilter<"PembimbingInstansi"> | string
    email?: StringFilter<"PembimbingInstansi"> | string
    jabatan?: StringFilter<"PembimbingInstansi"> | string
    no_hp?: StringFilter<"PembimbingInstansi"> | string
    id_instansi?: IntFilter<"PembimbingInstansi"> | number
  }

  export type MahasiswaCreateWithoutJadwalInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutJadwalInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportUncheckedCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutJadwalInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutJadwalInput, MahasiswaUncheckedCreateWithoutJadwalInput>
  }

  export type DosenCreateWithoutJadwalInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiCreateNestedManyWithoutDosenPengujiInput
    NilaiPembimbing?: NilaiCreateNestedManyWithoutDosenPembimbingInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutJadwalInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiUncheckedCreateNestedManyWithoutDosenPengujiInput
    NilaiPembimbing?: NilaiUncheckedCreateNestedManyWithoutDosenPembimbingInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutJadwalInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutJadwalInput, DosenUncheckedCreateWithoutJadwalInput>
  }

  export type RuanganCreateWithoutJadwalInput = {
    nama: string
  }

  export type RuanganUncheckedCreateWithoutJadwalInput = {
    nama: string
  }

  export type RuanganCreateOrConnectWithoutJadwalInput = {
    where: RuanganWhereUniqueInput
    create: XOR<RuanganCreateWithoutJadwalInput, RuanganUncheckedCreateWithoutJadwalInput>
  }

  export type NilaiCreateWithoutJadwalInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    DosenPenguji?: DosenCreateNestedOneWithoutNilaiPengujiInput
    DosenPembimbing?: DosenCreateNestedOneWithoutNilaiPembimbingInput
    Mahasiswa?: MahasiswaCreateNestedManyWithoutNilaiInput
  }

  export type NilaiUncheckedCreateWithoutJadwalInput = {
    id: string
    nim: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    Mahasiswa?: MahasiswaUncheckedCreateNestedManyWithoutNilaiInput
  }

  export type NilaiCreateOrConnectWithoutJadwalInput = {
    where: NilaiWhereUniqueInput
    create: XOR<NilaiCreateWithoutJadwalInput, NilaiUncheckedCreateWithoutJadwalInput>
  }

  export type MahasiswaUpsertWithoutJadwalInput = {
    update: XOR<MahasiswaUpdateWithoutJadwalInput, MahasiswaUncheckedUpdateWithoutJadwalInput>
    create: XOR<MahasiswaCreateWithoutJadwalInput, MahasiswaUncheckedCreateWithoutJadwalInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutJadwalInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutJadwalInput, MahasiswaUncheckedUpdateWithoutJadwalInput>
  }

  export type MahasiswaUpdateWithoutJadwalInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutJadwalInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUncheckedUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type DosenUpsertWithoutJadwalInput = {
    update: XOR<DosenUpdateWithoutJadwalInput, DosenUncheckedUpdateWithoutJadwalInput>
    create: XOR<DosenCreateWithoutJadwalInput, DosenUncheckedCreateWithoutJadwalInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutJadwalInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutJadwalInput, DosenUncheckedUpdateWithoutJadwalInput>
  }

  export type DosenUpdateWithoutJadwalInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUpdateManyWithoutDosenPengujiNestedInput
    NilaiPembimbing?: NilaiUpdateManyWithoutDosenPembimbingNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutJadwalInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUncheckedUpdateManyWithoutDosenPengujiNestedInput
    NilaiPembimbing?: NilaiUncheckedUpdateManyWithoutDosenPembimbingNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type RuanganUpsertWithoutJadwalInput = {
    update: XOR<RuanganUpdateWithoutJadwalInput, RuanganUncheckedUpdateWithoutJadwalInput>
    create: XOR<RuanganCreateWithoutJadwalInput, RuanganUncheckedCreateWithoutJadwalInput>
    where?: RuanganWhereInput
  }

  export type RuanganUpdateToOneWithWhereWithoutJadwalInput = {
    where?: RuanganWhereInput
    data: XOR<RuanganUpdateWithoutJadwalInput, RuanganUncheckedUpdateWithoutJadwalInput>
  }

  export type RuanganUpdateWithoutJadwalInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type RuanganUncheckedUpdateWithoutJadwalInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type NilaiUpsertWithoutJadwalInput = {
    update: XOR<NilaiUpdateWithoutJadwalInput, NilaiUncheckedUpdateWithoutJadwalInput>
    create: XOR<NilaiCreateWithoutJadwalInput, NilaiUncheckedCreateWithoutJadwalInput>
    where?: NilaiWhereInput
  }

  export type NilaiUpdateToOneWithWhereWithoutJadwalInput = {
    where?: NilaiWhereInput
    data: XOR<NilaiUpdateWithoutJadwalInput, NilaiUncheckedUpdateWithoutJadwalInput>
  }

  export type NilaiUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    DosenPenguji?: DosenUpdateOneWithoutNilaiPengujiNestedInput
    DosenPembimbing?: DosenUpdateOneWithoutNilaiPembimbingNestedInput
    Mahasiswa?: MahasiswaUpdateManyWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    Mahasiswa?: MahasiswaUncheckedUpdateManyWithoutNilaiNestedInput
  }

  export type BimbinganCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    Dosen: DosenCreateNestedOneWithoutBimbinganInput
  }

  export type BimbinganUncheckedCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nip: string
  }

  export type BimbinganCreateOrConnectWithoutMahasiswaInput = {
    where: BimbinganWhereUniqueInput
    create: XOR<BimbinganCreateWithoutMahasiswaInput, BimbinganUncheckedCreateWithoutMahasiswaInput>
  }

  export type BimbinganCreateManyMahasiswaInputEnvelope = {
    data: BimbinganCreateManyMahasiswaInput | BimbinganCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type DailyReportCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    DetailDailyReport?: DetailDailyReportCreateNestedManyWithoutDailyReportInput
  }

  export type DailyReportUncheckedCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
    DetailDailyReport?: DetailDailyReportUncheckedCreateNestedManyWithoutDailyReportInput
  }

  export type DailyReportCreateOrConnectWithoutMahasiswaInput = {
    where: DailyReportWhereUniqueInput
    create: XOR<DailyReportCreateWithoutMahasiswaInput, DailyReportUncheckedCreateWithoutMahasiswaInput>
  }

  export type DailyReportCreateManyMahasiswaInputEnvelope = {
    data: DailyReportCreateManyMahasiswaInput | DailyReportCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type DokumenCreateWithoutMahasiswaInput = {
    id: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type DokumenUncheckedCreateWithoutMahasiswaInput = {
    id: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type DokumenCreateOrConnectWithoutMahasiswaInput = {
    where: DokumenWhereUniqueInput
    create: XOR<DokumenCreateWithoutMahasiswaInput, DokumenUncheckedCreateWithoutMahasiswaInput>
  }

  export type DokumenCreateManyMahasiswaInputEnvelope = {
    data: DokumenCreateManyMahasiswaInput | DokumenCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type JadwalCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    Dosen: DosenCreateNestedOneWithoutJadwalInput
    Ruangan: RuanganCreateNestedOneWithoutJadwalInput
    Nilai?: NilaiCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutMahasiswaInput = {
    id: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
    Nilai?: NilaiUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type JadwalCreateOrConnectWithoutMahasiswaInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutMahasiswaInput, JadwalUncheckedCreateWithoutMahasiswaInput>
  }

  export type JadwalCreateManyMahasiswaInputEnvelope = {
    data: JadwalCreateManyMahasiswaInput | JadwalCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type NilaiInstansiCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    PembimbingInstansi: PembimbingInstansiCreateNestedOneWithoutNilaiInstansiInput
  }

  export type NilaiInstansiUncheckedCreateWithoutMahasiswaInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    id_pembimbing_instansi: string
  }

  export type NilaiInstansiCreateOrConnectWithoutMahasiswaInput = {
    where: NilaiInstansiWhereUniqueInput
    create: XOR<NilaiInstansiCreateWithoutMahasiswaInput, NilaiInstansiUncheckedCreateWithoutMahasiswaInput>
  }

  export type PendaftaranKPCreateWithoutMahasiswaInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    PembimbingInstansi: PembimbingInstansiCreateNestedOneWithoutPendaftaranKPInput
    Dosen?: DosenCreateNestedOneWithoutPendaftaranKPInput
  }

  export type PendaftaranKPUncheckedCreateWithoutMahasiswaInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
    nip?: string | null
  }

  export type PendaftaranKPCreateOrConnectWithoutMahasiswaInput = {
    where: PendaftaranKPWhereUniqueInput
    create: XOR<PendaftaranKPCreateWithoutMahasiswaInput, PendaftaranKPUncheckedCreateWithoutMahasiswaInput>
  }

  export type PendaftaranKPCreateManyMahasiswaInputEnvelope = {
    data: PendaftaranKPCreateManyMahasiswaInput | PendaftaranKPCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type NilaiCreateWithoutMahasiswaInput = {
    id: string
    nim: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
    Jadwal: JadwalCreateNestedOneWithoutNilaiInput
    DosenPenguji?: DosenCreateNestedOneWithoutNilaiPengujiInput
    DosenPembimbing?: DosenCreateNestedOneWithoutNilaiPembimbingInput
  }

  export type NilaiUncheckedCreateWithoutMahasiswaInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
  }

  export type NilaiCreateOrConnectWithoutMahasiswaInput = {
    where: NilaiWhereUniqueInput
    create: XOR<NilaiCreateWithoutMahasiswaInput, NilaiUncheckedCreateWithoutMahasiswaInput>
  }

  export type BimbinganUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: BimbinganWhereUniqueInput
    update: XOR<BimbinganUpdateWithoutMahasiswaInput, BimbinganUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<BimbinganCreateWithoutMahasiswaInput, BimbinganUncheckedCreateWithoutMahasiswaInput>
  }

  export type BimbinganUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: BimbinganWhereUniqueInput
    data: XOR<BimbinganUpdateWithoutMahasiswaInput, BimbinganUncheckedUpdateWithoutMahasiswaInput>
  }

  export type BimbinganUpdateManyWithWhereWithoutMahasiswaInput = {
    where: BimbinganScalarWhereInput
    data: XOR<BimbinganUpdateManyMutationInput, BimbinganUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type DailyReportUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: DailyReportWhereUniqueInput
    update: XOR<DailyReportUpdateWithoutMahasiswaInput, DailyReportUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<DailyReportCreateWithoutMahasiswaInput, DailyReportUncheckedCreateWithoutMahasiswaInput>
  }

  export type DailyReportUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: DailyReportWhereUniqueInput
    data: XOR<DailyReportUpdateWithoutMahasiswaInput, DailyReportUncheckedUpdateWithoutMahasiswaInput>
  }

  export type DailyReportUpdateManyWithWhereWithoutMahasiswaInput = {
    where: DailyReportScalarWhereInput
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type DailyReportScalarWhereInput = {
    AND?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    OR?: DailyReportScalarWhereInput[]
    NOT?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    id?: StringFilter<"DailyReport"> | string
    tanggal?: DateTimeFilter<"DailyReport"> | Date | string
    status?: EnumStatusValidasiFilter<"DailyReport"> | $Enums.StatusValidasi
    catatan?: StringNullableFilter<"DailyReport"> | string | null
    latitude?: FloatFilter<"DailyReport"> | number
    longitude?: FloatFilter<"DailyReport"> | number
    nim?: StringFilter<"DailyReport"> | string
  }

  export type DokumenUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: DokumenWhereUniqueInput
    update: XOR<DokumenUpdateWithoutMahasiswaInput, DokumenUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<DokumenCreateWithoutMahasiswaInput, DokumenUncheckedCreateWithoutMahasiswaInput>
  }

  export type DokumenUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: DokumenWhereUniqueInput
    data: XOR<DokumenUpdateWithoutMahasiswaInput, DokumenUncheckedUpdateWithoutMahasiswaInput>
  }

  export type DokumenUpdateManyWithWhereWithoutMahasiswaInput = {
    where: DokumenScalarWhereInput
    data: XOR<DokumenUpdateManyMutationInput, DokumenUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type DokumenScalarWhereInput = {
    AND?: DokumenScalarWhereInput | DokumenScalarWhereInput[]
    OR?: DokumenScalarWhereInput[]
    NOT?: DokumenScalarWhereInput | DokumenScalarWhereInput[]
    id?: StringFilter<"Dokumen"> | string
    nim?: StringFilter<"Dokumen"> | string
    jenis_dokumen?: EnumJenisDokumenFilter<"Dokumen"> | $Enums.JenisDokumen
    file_path?: StringFilter<"Dokumen"> | string
    tanggal_upload?: DateTimeFilter<"Dokumen"> | Date | string
    status?: EnumDokumenStatusFilter<"Dokumen"> | $Enums.DokumenStatus
    komentar?: StringNullableFilter<"Dokumen"> | string | null
  }

  export type JadwalUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: JadwalWhereUniqueInput
    update: XOR<JadwalUpdateWithoutMahasiswaInput, JadwalUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<JadwalCreateWithoutMahasiswaInput, JadwalUncheckedCreateWithoutMahasiswaInput>
  }

  export type JadwalUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: JadwalWhereUniqueInput
    data: XOR<JadwalUpdateWithoutMahasiswaInput, JadwalUncheckedUpdateWithoutMahasiswaInput>
  }

  export type JadwalUpdateManyWithWhereWithoutMahasiswaInput = {
    where: JadwalScalarWhereInput
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type NilaiInstansiUpsertWithoutMahasiswaInput = {
    update: XOR<NilaiInstansiUpdateWithoutMahasiswaInput, NilaiInstansiUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<NilaiInstansiCreateWithoutMahasiswaInput, NilaiInstansiUncheckedCreateWithoutMahasiswaInput>
    where?: NilaiInstansiWhereInput
  }

  export type NilaiInstansiUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: NilaiInstansiWhereInput
    data: XOR<NilaiInstansiUpdateWithoutMahasiswaInput, NilaiInstansiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type NilaiInstansiUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    PembimbingInstansi?: PembimbingInstansiUpdateOneRequiredWithoutNilaiInstansiNestedInput
  }

  export type NilaiInstansiUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type PendaftaranKPUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: PendaftaranKPWhereUniqueInput
    update: XOR<PendaftaranKPUpdateWithoutMahasiswaInput, PendaftaranKPUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<PendaftaranKPCreateWithoutMahasiswaInput, PendaftaranKPUncheckedCreateWithoutMahasiswaInput>
  }

  export type PendaftaranKPUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: PendaftaranKPWhereUniqueInput
    data: XOR<PendaftaranKPUpdateWithoutMahasiswaInput, PendaftaranKPUncheckedUpdateWithoutMahasiswaInput>
  }

  export type PendaftaranKPUpdateManyWithWhereWithoutMahasiswaInput = {
    where: PendaftaranKPScalarWhereInput
    data: XOR<PendaftaranKPUpdateManyMutationInput, PendaftaranKPUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type NilaiUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: NilaiWhereUniqueInput
    update: XOR<NilaiUpdateWithoutMahasiswaInput, NilaiUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<NilaiCreateWithoutMahasiswaInput, NilaiUncheckedCreateWithoutMahasiswaInput>
  }

  export type NilaiUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: NilaiWhereUniqueInput
    data: XOR<NilaiUpdateWithoutMahasiswaInput, NilaiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type NilaiUpdateManyWithWhereWithoutMahasiswaInput = {
    where: NilaiScalarWhereInput
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type JadwalCreateWithoutNilaiInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    Mahasiswa: MahasiswaCreateNestedOneWithoutJadwalInput
    Dosen: DosenCreateNestedOneWithoutJadwalInput
    Ruangan: RuanganCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutNilaiInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
  }

  export type JadwalCreateOrConnectWithoutNilaiInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutNilaiInput, JadwalUncheckedCreateWithoutNilaiInput>
  }

  export type DosenCreateWithoutNilaiPengujiInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganCreateNestedManyWithoutDosenInput
    Jadwal?: JadwalCreateNestedManyWithoutDosenInput
    NilaiPembimbing?: NilaiCreateNestedManyWithoutDosenPembimbingInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutNilaiPengujiInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutDosenInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutDosenInput
    NilaiPembimbing?: NilaiUncheckedCreateNestedManyWithoutDosenPembimbingInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutNilaiPengujiInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutNilaiPengujiInput, DosenUncheckedCreateWithoutNilaiPengujiInput>
  }

  export type DosenCreateWithoutNilaiPembimbingInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganCreateNestedManyWithoutDosenInput
    Jadwal?: JadwalCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiCreateNestedManyWithoutDosenPengujiInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutDosenInput
  }

  export type DosenUncheckedCreateWithoutNilaiPembimbingInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutDosenInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiUncheckedCreateNestedManyWithoutDosenPengujiInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutDosenInput
  }

  export type DosenCreateOrConnectWithoutNilaiPembimbingInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutNilaiPembimbingInput, DosenUncheckedCreateWithoutNilaiPembimbingInput>
  }

  export type MahasiswaCreateWithoutNilaiInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutNilaiInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportUncheckedCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedOneWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutNilaiInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutNilaiInput, MahasiswaUncheckedCreateWithoutNilaiInput>
  }

  export type JadwalUpsertWithoutNilaiInput = {
    update: XOR<JadwalUpdateWithoutNilaiInput, JadwalUncheckedUpdateWithoutNilaiInput>
    create: XOR<JadwalCreateWithoutNilaiInput, JadwalUncheckedCreateWithoutNilaiInput>
    where?: JadwalWhereInput
  }

  export type JadwalUpdateToOneWithWhereWithoutNilaiInput = {
    where?: JadwalWhereInput
    data: XOR<JadwalUpdateWithoutNilaiInput, JadwalUncheckedUpdateWithoutNilaiInput>
  }

  export type JadwalUpdateWithoutNilaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutJadwalNestedInput
    Dosen?: DosenUpdateOneRequiredWithoutJadwalNestedInput
    Ruangan?: RuanganUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutNilaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type DosenUpsertWithoutNilaiPengujiInput = {
    update: XOR<DosenUpdateWithoutNilaiPengujiInput, DosenUncheckedUpdateWithoutNilaiPengujiInput>
    create: XOR<DosenCreateWithoutNilaiPengujiInput, DosenUncheckedCreateWithoutNilaiPengujiInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutNilaiPengujiInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutNilaiPengujiInput, DosenUncheckedUpdateWithoutNilaiPengujiInput>
  }

  export type DosenUpdateWithoutNilaiPengujiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutDosenNestedInput
    Jadwal?: JadwalUpdateManyWithoutDosenNestedInput
    NilaiPembimbing?: NilaiUpdateManyWithoutDosenPembimbingNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutNilaiPengujiInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutDosenNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutDosenNestedInput
    NilaiPembimbing?: NilaiUncheckedUpdateManyWithoutDosenPembimbingNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type DosenUpsertWithoutNilaiPembimbingInput = {
    update: XOR<DosenUpdateWithoutNilaiPembimbingInput, DosenUncheckedUpdateWithoutNilaiPembimbingInput>
    create: XOR<DosenCreateWithoutNilaiPembimbingInput, DosenUncheckedCreateWithoutNilaiPembimbingInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutNilaiPembimbingInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutNilaiPembimbingInput, DosenUncheckedUpdateWithoutNilaiPembimbingInput>
  }

  export type DosenUpdateWithoutNilaiPembimbingInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutDosenNestedInput
    Jadwal?: JadwalUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUpdateManyWithoutDosenPengujiNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutDosenNestedInput
  }

  export type DosenUncheckedUpdateWithoutNilaiPembimbingInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutDosenNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUncheckedUpdateManyWithoutDosenPengujiNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type MahasiswaUpsertWithWhereUniqueWithoutNilaiInput = {
    where: MahasiswaWhereUniqueInput
    update: XOR<MahasiswaUpdateWithoutNilaiInput, MahasiswaUncheckedUpdateWithoutNilaiInput>
    create: XOR<MahasiswaCreateWithoutNilaiInput, MahasiswaUncheckedCreateWithoutNilaiInput>
  }

  export type MahasiswaUpdateWithWhereUniqueWithoutNilaiInput = {
    where: MahasiswaWhereUniqueInput
    data: XOR<MahasiswaUpdateWithoutNilaiInput, MahasiswaUncheckedUpdateWithoutNilaiInput>
  }

  export type MahasiswaUpdateManyWithWhereWithoutNilaiInput = {
    where: MahasiswaScalarWhereInput
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyWithoutNilaiInput>
  }

  export type MahasiswaScalarWhereInput = {
    AND?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
    OR?: MahasiswaScalarWhereInput[]
    NOT?: MahasiswaScalarWhereInput | MahasiswaScalarWhereInput[]
    nim?: StringFilter<"Mahasiswa"> | string
    nama?: StringFilter<"Mahasiswa"> | string
    email?: StringFilter<"Mahasiswa"> | string
  }

  export type PembimbingInstansiCreateWithoutNilaiInstansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    Instansi: InstansiCreateNestedOneWithoutPembimbingInstansiInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutPembimbingInstansiInput
  }

  export type PembimbingInstansiUncheckedCreateWithoutNilaiInstansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutPembimbingInstansiInput
  }

  export type PembimbingInstansiCreateOrConnectWithoutNilaiInstansiInput = {
    where: PembimbingInstansiWhereUniqueInput
    create: XOR<PembimbingInstansiCreateWithoutNilaiInstansiInput, PembimbingInstansiUncheckedCreateWithoutNilaiInstansiInput>
  }

  export type MahasiswaCreateWithoutNilaiInstansiInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalCreateNestedManyWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutNilaiInstansiInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportUncheckedCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    PendaftaranKP?: PendaftaranKPUncheckedCreateNestedManyWithoutMahasiswaInput
    Nilai?: NilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutNilaiInstansiInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutNilaiInstansiInput, MahasiswaUncheckedCreateWithoutNilaiInstansiInput>
  }

  export type PembimbingInstansiUpsertWithoutNilaiInstansiInput = {
    update: XOR<PembimbingInstansiUpdateWithoutNilaiInstansiInput, PembimbingInstansiUncheckedUpdateWithoutNilaiInstansiInput>
    create: XOR<PembimbingInstansiCreateWithoutNilaiInstansiInput, PembimbingInstansiUncheckedCreateWithoutNilaiInstansiInput>
    where?: PembimbingInstansiWhereInput
  }

  export type PembimbingInstansiUpdateToOneWithWhereWithoutNilaiInstansiInput = {
    where?: PembimbingInstansiWhereInput
    data: XOR<PembimbingInstansiUpdateWithoutNilaiInstansiInput, PembimbingInstansiUncheckedUpdateWithoutNilaiInstansiInput>
  }

  export type PembimbingInstansiUpdateWithoutNilaiInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    Instansi?: InstansiUpdateOneRequiredWithoutPembimbingInstansiNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutPembimbingInstansiNestedInput
  }

  export type PembimbingInstansiUncheckedUpdateWithoutNilaiInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_instansi?: IntFieldUpdateOperationsInput | number
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutPembimbingInstansiNestedInput
  }

  export type MahasiswaUpsertWithoutNilaiInstansiInput = {
    update: XOR<MahasiswaUpdateWithoutNilaiInstansiInput, MahasiswaUncheckedUpdateWithoutNilaiInstansiInput>
    create: XOR<MahasiswaCreateWithoutNilaiInstansiInput, MahasiswaUncheckedCreateWithoutNilaiInstansiInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutNilaiInstansiInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutNilaiInstansiInput, MahasiswaUncheckedUpdateWithoutNilaiInstansiInput>
  }

  export type MahasiswaUpdateWithoutNilaiInstansiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUpdateManyWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutNilaiInstansiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUncheckedUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutMahasiswaNestedInput
    Nilai?: NilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type NilaiInstansiCreateWithoutPembimbingInstansiInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    Mahasiswa: MahasiswaCreateNestedOneWithoutNilaiInstansiInput
  }

  export type NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    nim: string
  }

  export type NilaiInstansiCreateOrConnectWithoutPembimbingInstansiInput = {
    where: NilaiInstansiWhereUniqueInput
    create: XOR<NilaiInstansiCreateWithoutPembimbingInstansiInput, NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput>
  }

  export type NilaiInstansiCreateManyPembimbingInstansiInputEnvelope = {
    data: NilaiInstansiCreateManyPembimbingInstansiInput | NilaiInstansiCreateManyPembimbingInstansiInput[]
    skipDuplicates?: boolean
  }

  export type InstansiCreateWithoutPembimbingInstansiInput = {
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
  }

  export type InstansiUncheckedCreateWithoutPembimbingInstansiInput = {
    id?: number
    nama: string
    alamat: string
    jenis: $Enums.JenisInstansi
    profil_singkat: string
    status?: $Enums.StatusInstansi
  }

  export type InstansiCreateOrConnectWithoutPembimbingInstansiInput = {
    where: InstansiWhereUniqueInput
    create: XOR<InstansiCreateWithoutPembimbingInstansiInput, InstansiUncheckedCreateWithoutPembimbingInstansiInput>
  }

  export type PendaftaranKPCreateWithoutPembimbingInstansiInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    Mahasiswa: MahasiswaCreateNestedOneWithoutPendaftaranKPInput
    Dosen?: DosenCreateNestedOneWithoutPendaftaranKPInput
  }

  export type PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    nip?: string | null
  }

  export type PendaftaranKPCreateOrConnectWithoutPembimbingInstansiInput = {
    where: PendaftaranKPWhereUniqueInput
    create: XOR<PendaftaranKPCreateWithoutPembimbingInstansiInput, PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput>
  }

  export type PendaftaranKPCreateManyPembimbingInstansiInputEnvelope = {
    data: PendaftaranKPCreateManyPembimbingInstansiInput | PendaftaranKPCreateManyPembimbingInstansiInput[]
    skipDuplicates?: boolean
  }

  export type NilaiInstansiUpsertWithWhereUniqueWithoutPembimbingInstansiInput = {
    where: NilaiInstansiWhereUniqueInput
    update: XOR<NilaiInstansiUpdateWithoutPembimbingInstansiInput, NilaiInstansiUncheckedUpdateWithoutPembimbingInstansiInput>
    create: XOR<NilaiInstansiCreateWithoutPembimbingInstansiInput, NilaiInstansiUncheckedCreateWithoutPembimbingInstansiInput>
  }

  export type NilaiInstansiUpdateWithWhereUniqueWithoutPembimbingInstansiInput = {
    where: NilaiInstansiWhereUniqueInput
    data: XOR<NilaiInstansiUpdateWithoutPembimbingInstansiInput, NilaiInstansiUncheckedUpdateWithoutPembimbingInstansiInput>
  }

  export type NilaiInstansiUpdateManyWithWhereWithoutPembimbingInstansiInput = {
    where: NilaiInstansiScalarWhereInput
    data: XOR<NilaiInstansiUpdateManyMutationInput, NilaiInstansiUncheckedUpdateManyWithoutPembimbingInstansiInput>
  }

  export type NilaiInstansiScalarWhereInput = {
    AND?: NilaiInstansiScalarWhereInput | NilaiInstansiScalarWhereInput[]
    OR?: NilaiInstansiScalarWhereInput[]
    NOT?: NilaiInstansiScalarWhereInput | NilaiInstansiScalarWhereInput[]
    id?: StringFilter<"NilaiInstansi"> | string
    tanggal?: DateTimeFilter<"NilaiInstansi"> | Date | string
    nilai_angka?: FloatFilter<"NilaiInstansi"> | number
    nilai_huruf?: StringFilter<"NilaiInstansi"> | string
    nim?: StringFilter<"NilaiInstansi"> | string
    id_pembimbing_instansi?: StringFilter<"NilaiInstansi"> | string
  }

  export type InstansiUpsertWithoutPembimbingInstansiInput = {
    update: XOR<InstansiUpdateWithoutPembimbingInstansiInput, InstansiUncheckedUpdateWithoutPembimbingInstansiInput>
    create: XOR<InstansiCreateWithoutPembimbingInstansiInput, InstansiUncheckedCreateWithoutPembimbingInstansiInput>
    where?: InstansiWhereInput
  }

  export type InstansiUpdateToOneWithWhereWithoutPembimbingInstansiInput = {
    where?: InstansiWhereInput
    data: XOR<InstansiUpdateWithoutPembimbingInstansiInput, InstansiUncheckedUpdateWithoutPembimbingInstansiInput>
  }

  export type InstansiUpdateWithoutPembimbingInstansiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
  }

  export type InstansiUncheckedUpdateWithoutPembimbingInstansiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisInstansiFieldUpdateOperationsInput | $Enums.JenisInstansi
    profil_singkat?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusInstansiFieldUpdateOperationsInput | $Enums.StatusInstansi
  }

  export type PendaftaranKPUpsertWithWhereUniqueWithoutPembimbingInstansiInput = {
    where: PendaftaranKPWhereUniqueInput
    update: XOR<PendaftaranKPUpdateWithoutPembimbingInstansiInput, PendaftaranKPUncheckedUpdateWithoutPembimbingInstansiInput>
    create: XOR<PendaftaranKPCreateWithoutPembimbingInstansiInput, PendaftaranKPUncheckedCreateWithoutPembimbingInstansiInput>
  }

  export type PendaftaranKPUpdateWithWhereUniqueWithoutPembimbingInstansiInput = {
    where: PendaftaranKPWhereUniqueInput
    data: XOR<PendaftaranKPUpdateWithoutPembimbingInstansiInput, PendaftaranKPUncheckedUpdateWithoutPembimbingInstansiInput>
  }

  export type PendaftaranKPUpdateManyWithWhereWithoutPembimbingInstansiInput = {
    where: PendaftaranKPScalarWhereInput
    data: XOR<PendaftaranKPUpdateManyMutationInput, PendaftaranKPUncheckedUpdateManyWithoutPembimbingInstansiInput>
  }

  export type PembimbingInstansiCreateWithoutPendaftaranKPInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    NilaiInstansi?: NilaiInstansiCreateNestedManyWithoutPembimbingInstansiInput
    Instansi: InstansiCreateNestedOneWithoutPembimbingInstansiInput
  }

  export type PembimbingInstansiUncheckedCreateWithoutPendaftaranKPInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
    id_instansi: number
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedManyWithoutPembimbingInstansiInput
  }

  export type PembimbingInstansiCreateOrConnectWithoutPendaftaranKPInput = {
    where: PembimbingInstansiWhereUniqueInput
    create: XOR<PembimbingInstansiCreateWithoutPendaftaranKPInput, PembimbingInstansiUncheckedCreateWithoutPendaftaranKPInput>
  }

  export type MahasiswaCreateWithoutPendaftaranKPInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiCreateNestedOneWithoutMahasiswaInput
    Nilai?: NilaiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutPendaftaranKPInput = {
    nim: string
    nama: string
    email: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutMahasiswaInput
    DailyReport?: DailyReportUncheckedCreateNestedManyWithoutMahasiswaInput
    Dokumen?: DokumenUncheckedCreateNestedManyWithoutMahasiswaInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutMahasiswaInput
    NilaiInstansi?: NilaiInstansiUncheckedCreateNestedOneWithoutMahasiswaInput
    Nilai?: NilaiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutPendaftaranKPInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutPendaftaranKPInput, MahasiswaUncheckedCreateWithoutPendaftaranKPInput>
  }

  export type DosenCreateWithoutPendaftaranKPInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganCreateNestedManyWithoutDosenInput
    Jadwal?: JadwalCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiCreateNestedManyWithoutDosenPengujiInput
    NilaiPembimbing?: NilaiCreateNestedManyWithoutDosenPembimbingInput
  }

  export type DosenUncheckedCreateWithoutPendaftaranKPInput = {
    nip: string
    nama: string
    email: string
    no_hp: string
    chat_id: string
    Bimbingan?: BimbinganUncheckedCreateNestedManyWithoutDosenInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutDosenInput
    NilaiPenguji?: NilaiUncheckedCreateNestedManyWithoutDosenPengujiInput
    NilaiPembimbing?: NilaiUncheckedCreateNestedManyWithoutDosenPembimbingInput
  }

  export type DosenCreateOrConnectWithoutPendaftaranKPInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutPendaftaranKPInput, DosenUncheckedCreateWithoutPendaftaranKPInput>
  }

  export type PembimbingInstansiUpsertWithoutPendaftaranKPInput = {
    update: XOR<PembimbingInstansiUpdateWithoutPendaftaranKPInput, PembimbingInstansiUncheckedUpdateWithoutPendaftaranKPInput>
    create: XOR<PembimbingInstansiCreateWithoutPendaftaranKPInput, PembimbingInstansiUncheckedCreateWithoutPendaftaranKPInput>
    where?: PembimbingInstansiWhereInput
  }

  export type PembimbingInstansiUpdateToOneWithWhereWithoutPendaftaranKPInput = {
    where?: PembimbingInstansiWhereInput
    data: XOR<PembimbingInstansiUpdateWithoutPendaftaranKPInput, PembimbingInstansiUncheckedUpdateWithoutPendaftaranKPInput>
  }

  export type PembimbingInstansiUpdateWithoutPendaftaranKPInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    NilaiInstansi?: NilaiInstansiUpdateManyWithoutPembimbingInstansiNestedInput
    Instansi?: InstansiUpdateOneRequiredWithoutPembimbingInstansiNestedInput
  }

  export type PembimbingInstansiUncheckedUpdateWithoutPendaftaranKPInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    id_instansi?: IntFieldUpdateOperationsInput | number
    NilaiInstansi?: NilaiInstansiUncheckedUpdateManyWithoutPembimbingInstansiNestedInput
  }

  export type MahasiswaUpsertWithoutPendaftaranKPInput = {
    update: XOR<MahasiswaUpdateWithoutPendaftaranKPInput, MahasiswaUncheckedUpdateWithoutPendaftaranKPInput>
    create: XOR<MahasiswaCreateWithoutPendaftaranKPInput, MahasiswaUncheckedCreateWithoutPendaftaranKPInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutPendaftaranKPInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutPendaftaranKPInput, MahasiswaUncheckedUpdateWithoutPendaftaranKPInput>
  }

  export type MahasiswaUpdateWithoutPendaftaranKPInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUpdateOneWithoutMahasiswaNestedInput
    Nilai?: NilaiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutPendaftaranKPInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUncheckedUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    Nilai?: NilaiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type DosenUpsertWithoutPendaftaranKPInput = {
    update: XOR<DosenUpdateWithoutPendaftaranKPInput, DosenUncheckedUpdateWithoutPendaftaranKPInput>
    create: XOR<DosenCreateWithoutPendaftaranKPInput, DosenUncheckedCreateWithoutPendaftaranKPInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutPendaftaranKPInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutPendaftaranKPInput, DosenUncheckedUpdateWithoutPendaftaranKPInput>
  }

  export type DosenUpdateWithoutPendaftaranKPInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutDosenNestedInput
    Jadwal?: JadwalUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUpdateManyWithoutDosenPengujiNestedInput
    NilaiPembimbing?: NilaiUpdateManyWithoutDosenPembimbingNestedInput
  }

  export type DosenUncheckedUpdateWithoutPendaftaranKPInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    chat_id?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutDosenNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutDosenNestedInput
    NilaiPenguji?: NilaiUncheckedUpdateManyWithoutDosenPengujiNestedInput
    NilaiPembimbing?: NilaiUncheckedUpdateManyWithoutDosenPembimbingNestedInput
  }

  export type JadwalCreateWithoutRuanganInput = {
    id: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    Mahasiswa: MahasiswaCreateNestedOneWithoutJadwalInput
    Dosen: DosenCreateNestedOneWithoutJadwalInput
    Nilai?: NilaiCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutRuanganInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
    Nilai?: NilaiUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type JadwalCreateOrConnectWithoutRuanganInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutRuanganInput, JadwalUncheckedCreateWithoutRuanganInput>
  }

  export type JadwalCreateManyRuanganInputEnvelope = {
    data: JadwalCreateManyRuanganInput | JadwalCreateManyRuanganInput[]
    skipDuplicates?: boolean
  }

  export type JadwalUpsertWithWhereUniqueWithoutRuanganInput = {
    where: JadwalWhereUniqueInput
    update: XOR<JadwalUpdateWithoutRuanganInput, JadwalUncheckedUpdateWithoutRuanganInput>
    create: XOR<JadwalCreateWithoutRuanganInput, JadwalUncheckedCreateWithoutRuanganInput>
  }

  export type JadwalUpdateWithWhereUniqueWithoutRuanganInput = {
    where: JadwalWhereUniqueInput
    data: XOR<JadwalUpdateWithoutRuanganInput, JadwalUncheckedUpdateWithoutRuanganInput>
  }

  export type JadwalUpdateManyWithWhereWithoutRuanganInput = {
    where: JadwalScalarWhereInput
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyWithoutRuanganInput>
  }

  export type DetailDailyReportCreateManyDailyReportInput = {
    id?: number
    judul_kegiatan: string
    deskripsi_kegiatan: string
    waktu: Date | string
  }

  export type DetailDailyReportUpdateWithoutDailyReportInput = {
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailDailyReportUncheckedUpdateWithoutDailyReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailDailyReportUncheckedUpdateManyWithoutDailyReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi_kegiatan?: StringFieldUpdateOperationsInput | string
    waktu?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BimbinganCreateManyDosenInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nim: string
  }

  export type JadwalCreateManyDosenInput = {
    id: string
    nim: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
  }

  export type NilaiCreateManyDosenPengujiInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_pembimbing: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
  }

  export type NilaiCreateManyDosenPembimbingInput = {
    id: string
    nim: string
    jadwal_seminar_id: string
    nip_penguji: string
    nilai_pembimbing: number
    nilai_penguji: number
    note_pembimbing?: string | null
    note_penguji?: string | null
  }

  export type PendaftaranKPCreateManyDosenInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
  }

  export type BimbinganUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutBimbinganNestedInput
  }

  export type BimbinganUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type BimbinganUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type JadwalUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutJadwalNestedInput
    Ruangan?: RuanganUpdateOneRequiredWithoutJadwalNestedInput
    Nilai?: NilaiUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Nilai?: NilaiUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type NilaiUpdateWithoutDosenPengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    Jadwal?: JadwalUpdateOneRequiredWithoutNilaiNestedInput
    DosenPembimbing?: DosenUpdateOneWithoutNilaiPembimbingNestedInput
    Mahasiswa?: MahasiswaUpdateManyWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateWithoutDosenPengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    Mahasiswa?: MahasiswaUncheckedUpdateManyWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateManyWithoutDosenPengujiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NilaiUpdateWithoutDosenPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    Jadwal?: JadwalUpdateOneRequiredWithoutNilaiNestedInput
    DosenPenguji?: DosenUpdateOneWithoutNilaiPengujiNestedInput
    Mahasiswa?: MahasiswaUpdateManyWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateWithoutDosenPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    Mahasiswa?: MahasiswaUncheckedUpdateManyWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateManyWithoutDosenPembimbingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendaftaranKPUpdateWithoutDosenInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    PembimbingInstansi?: PembimbingInstansiUpdateOneRequiredWithoutPendaftaranKPNestedInput
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutPendaftaranKPNestedInput
  }

  export type PendaftaranKPUncheckedUpdateWithoutDosenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type PendaftaranKPUncheckedUpdateManyWithoutDosenInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
  }

  export type PembimbingInstansiCreateManyInstansiInput = {
    id: string
    nama: string
    email: string
    jabatan: string
    no_hp: string
  }

  export type PembimbingInstansiUpdateWithoutInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    NilaiInstansi?: NilaiInstansiUpdateManyWithoutPembimbingInstansiNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutPembimbingInstansiNestedInput
  }

  export type PembimbingInstansiUncheckedUpdateWithoutInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    NilaiInstansi?: NilaiInstansiUncheckedUpdateManyWithoutPembimbingInstansiNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutPembimbingInstansiNestedInput
  }

  export type PembimbingInstansiUncheckedUpdateManyWithoutInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
  }

  export type BimbinganCreateManyMahasiswaInput = {
    id: string
    tanggal: Date | string
    catatan: string
    status: $Enums.StatusValidasi
    nip: string
  }

  export type DailyReportCreateManyMahasiswaInput = {
    id: string
    tanggal: Date | string
    status: $Enums.StatusValidasi
    catatan?: string | null
    latitude: number
    longitude: number
  }

  export type DokumenCreateManyMahasiswaInput = {
    id: string
    jenis_dokumen: $Enums.JenisDokumen
    file_path: string
    tanggal_upload?: Date | string
    status?: $Enums.DokumenStatus
    komentar?: string | null
  }

  export type JadwalCreateManyMahasiswaInput = {
    id: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    ruangan_nama: string
    status?: $Enums.StatusSeminar
  }

  export type PendaftaranKPCreateManyMahasiswaInput = {
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    id_pembimbing_instansi: string
    nip?: string | null
  }

  export type BimbinganUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    Dosen?: DosenUpdateOneRequiredWithoutBimbinganNestedInput
  }

  export type BimbinganUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type BimbinganUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    nip?: StringFieldUpdateOperationsInput | string
  }

  export type DailyReportUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    DetailDailyReport?: DetailDailyReportUpdateManyWithoutDailyReportNestedInput
  }

  export type DailyReportUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    DetailDailyReport?: DetailDailyReportUncheckedUpdateManyWithoutDailyReportNestedInput
  }

  export type DailyReportUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusValidasiFieldUpdateOperationsInput | $Enums.StatusValidasi
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type DokumenUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DokumenUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DokumenUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis_dokumen?: EnumJenisDokumenFieldUpdateOperationsInput | $Enums.JenisDokumen
    file_path?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDokumenStatusFieldUpdateOperationsInput | $Enums.DokumenStatus
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Dosen?: DosenUpdateOneRequiredWithoutJadwalNestedInput
    Ruangan?: RuanganUpdateOneRequiredWithoutJadwalNestedInput
    Nilai?: NilaiUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Nilai?: NilaiUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan_nama?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
  }

  export type PendaftaranKPUpdateWithoutMahasiswaInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    PembimbingInstansi?: PembimbingInstansiUpdateOneRequiredWithoutPendaftaranKPNestedInput
    Dosen?: DosenUpdateOneWithoutPendaftaranKPNestedInput
  }

  export type PendaftaranKPUncheckedUpdateWithoutMahasiswaInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendaftaranKPUncheckedUpdateManyWithoutMahasiswaInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    id_pembimbing_instansi?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NilaiUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
    Jadwal?: JadwalUpdateOneRequiredWithoutNilaiNestedInput
    DosenPenguji?: DosenUpdateOneWithoutNilaiPengujiNestedInput
    DosenPembimbing?: DosenUpdateOneWithoutNilaiPembimbingNestedInput
  }

  export type NilaiUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NilaiUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    jadwal_seminar_id?: StringFieldUpdateOperationsInput | string
    nip_penguji?: StringFieldUpdateOperationsInput | string
    nip_pembimbing?: StringFieldUpdateOperationsInput | string
    nilai_pembimbing?: FloatFieldUpdateOperationsInput | number
    nilai_penguji?: FloatFieldUpdateOperationsInput | number
    note_pembimbing?: NullableStringFieldUpdateOperationsInput | string | null
    note_penguji?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MahasiswaUpdateWithoutNilaiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutNilaiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Bimbingan?: BimbinganUncheckedUpdateManyWithoutMahasiswaNestedInput
    DailyReport?: DailyReportUncheckedUpdateManyWithoutMahasiswaNestedInput
    Dokumen?: DokumenUncheckedUpdateManyWithoutMahasiswaNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutMahasiswaNestedInput
    NilaiInstansi?: NilaiInstansiUncheckedUpdateOneWithoutMahasiswaNestedInput
    PendaftaranKP?: PendaftaranKPUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateManyWithoutNilaiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NilaiInstansiCreateManyPembimbingInstansiInput = {
    id: string
    tanggal: Date | string
    nilai_angka: number
    nilai_huruf: string
    nim: string
  }

  export type PendaftaranKPCreateManyPembimbingInstansiInput = {
    nim: string
    semester: number
    tanggalTerdaftar?: Date | string
    tanggalMulai?: Date | string | null
    tenggatWaktu: Date | string
    gagal?: boolean
    tanggalSelesai?: Date | string | null
    linkSuratPengantar?: string | null
    linkSuratBalasan?: string | null
    linkSuratPenunjukkanDospem?: string | null
    alasanLanjutKP?: string | null
    linkSuratPerpanjanganKP?: string | null
    nip?: string | null
  }

  export type NilaiInstansiUpdateWithoutPembimbingInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutNilaiInstansiNestedInput
  }

  export type NilaiInstansiUncheckedUpdateWithoutPembimbingInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type NilaiInstansiUncheckedUpdateManyWithoutPembimbingInstansiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilai_angka?: FloatFieldUpdateOperationsInput | number
    nilai_huruf?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
  }

  export type PendaftaranKPUpdateWithoutPembimbingInstansiInput = {
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutPendaftaranKPNestedInput
    Dosen?: DosenUpdateOneWithoutPendaftaranKPNestedInput
  }

  export type PendaftaranKPUncheckedUpdateWithoutPembimbingInstansiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendaftaranKPUncheckedUpdateManyWithoutPembimbingInstansiInput = {
    nim?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    tanggalTerdaftar?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenggatWaktu?: DateTimeFieldUpdateOperationsInput | Date | string
    gagal?: BoolFieldUpdateOperationsInput | boolean
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    linkSuratPengantar?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratBalasan?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPenunjukkanDospem?: NullableStringFieldUpdateOperationsInput | string | null
    alasanLanjutKP?: NullableStringFieldUpdateOperationsInput | string | null
    linkSuratPerpanjanganKP?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JadwalCreateManyRuanganInput = {
    id: string
    nim: string
    nip: string
    tanggal: Date | string
    waktu_mulai: Date | string
    waktu_selesai: Date | string
    status?: $Enums.StatusSeminar
  }

  export type JadwalUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Mahasiswa?: MahasiswaUpdateOneRequiredWithoutJadwalNestedInput
    Dosen?: DosenUpdateOneRequiredWithoutJadwalNestedInput
    Nilai?: NilaiUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
    Nilai?: NilaiUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateManyWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    waktu_selesai?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSeminarFieldUpdateOperationsInput | $Enums.StatusSeminar
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