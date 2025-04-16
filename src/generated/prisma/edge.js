
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

exports.Prisma.BimbinganScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  catatan: 'catatan',
  status: 'status',
  nim: 'nim',
  nip: 'nip'
};

exports.Prisma.DailyReportScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  status: 'status',
  catatan: 'catatan',
  latitude: 'latitude',
  longitude: 'longitude',
  nim: 'nim'
};

exports.Prisma.DetailDailyReportScalarFieldEnum = {
  id: 'id',
  judul_kegiatan: 'judul_kegiatan',
  deskripsi_kegiatan: 'deskripsi_kegiatan',
  waktu: 'waktu',
  id_daily_report: 'id_daily_report'
};

exports.Prisma.DokumenScalarFieldEnum = {
  id: 'id',
  nim: 'nim',
  jenis_dokumen: 'jenis_dokumen',
  file_path: 'file_path',
  tanggal_upload: 'tanggal_upload',
  status: 'status',
  komentar: 'komentar'
};

exports.Prisma.DosenScalarFieldEnum = {
  nip: 'nip',
  nama: 'nama',
  email: 'email',
  no_hp: 'no_hp',
  chat_id: 'chat_id'
};

exports.Prisma.InstansiScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  alamat: 'alamat',
  jenis: 'jenis',
  profil_singkat: 'profil_singkat',
  status: 'status'
};

exports.Prisma.JadwalScalarFieldEnum = {
  id: 'id',
  nim: 'nim',
  nip: 'nip',
  tanggal: 'tanggal',
  waktu_mulai: 'waktu_mulai',
  waktu_selesai: 'waktu_selesai',
  ruangan_nama: 'ruangan_nama',
  status: 'status'
};

exports.Prisma.LogJadwalScalarFieldEnum = {
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

exports.Prisma.MahasiswaScalarFieldEnum = {
  nim: 'nim',
  nama: 'nama',
  email: 'email'
};

exports.Prisma.NilaiScalarFieldEnum = {
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

exports.Prisma.NilaiInstansiScalarFieldEnum = {
  id: 'id',
  tanggal: 'tanggal',
  nilai_angka: 'nilai_angka',
  nilai_huruf: 'nilai_huruf',
  nim: 'nim',
  id_pembimbing_instansi: 'id_pembimbing_instansi'
};

exports.Prisma.PembimbingInstansiScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  email: 'email',
  jabatan: 'jabatan',
  no_hp: 'no_hp',
  id_instansi: 'id_instansi'
};

exports.Prisma.PendaftaranKPScalarFieldEnum = {
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

exports.Prisma.RuanganScalarFieldEnum = {
  nama: 'nama'
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
exports.DokumenStatus = exports.$Enums.DokumenStatus = {
  submitted: 'submitted',
  verified: 'verified',
  rejected: 'rejected'
};

exports.JenisDokumen = exports.$Enums.JenisDokumen = {
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

exports.JenisInstansi = exports.$Enums.JenisInstansi = {
  SWASTA: 'SWASTA',
  PEMERINTAHAN: 'PEMERINTAHAN',
  PENDIDIKAN: 'PENDIDIKAN',
  UMKM: 'UMKM'
};

exports.LogType = exports.$Enums.LogType = {
  created: 'created',
  updated: 'updated',
  cancelled: 'cancelled',
  rescheduled: 'rescheduled'
};

exports.StatusInstansi = exports.$Enums.StatusInstansi = {
  PENDING: 'PENDING',
  AKTIF: 'AKTIF',
  TIDAK_AKTIF: 'TIDAK_AKTIF'
};

exports.StatusSeminar = exports.$Enums.StatusSeminar = {
  pending: 'pending',
  scheduled: 'scheduled',
  completed: 'completed',
  cancelled: 'cancelled'
};

exports.StatusValidasi = exports.$Enums.StatusValidasi = {
  MENUNGGU: 'MENUNGGU',
  VALID: 'VALID',
  REVISI: 'REVISI'
};

exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\LENOVO\\Downloads\\HONO\\api-kerja-praktik\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\LENOVO\\Downloads\\HONO\\api-kerja-praktik\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Bimbingan {\n  id        String         @id\n  tanggal   DateTime\n  catatan   String\n  status    StatusValidasi\n  nim       String\n  nip       String\n  Mahasiswa Mahasiswa      @relation(fields: [nim], references: [nim])\n  Dosen     Dosen          @relation(fields: [nip], references: [nip])\n\n  @@index([id])\n}\n\nmodel DailyReport {\n  id                String              @id\n  tanggal           DateTime\n  status            StatusValidasi\n  catatan           String?\n  latitude          Float\n  longitude         Float\n  nim               String\n  Mahasiswa         Mahasiswa           @relation(fields: [nim], references: [nim])\n  DetailDailyReport DetailDailyReport[]\n\n  @@index([id])\n}\n\nmodel DetailDailyReport {\n  id                 Int         @id @default(autoincrement())\n  judul_kegiatan     String\n  deskripsi_kegiatan String\n  waktu              DateTime\n  id_daily_report    String\n  DailyReport        DailyReport @relation(fields: [id_daily_report], references: [id])\n\n  @@index([id])\n}\n\nmodel Dokumen {\n  id             String        @id\n  nim            String\n  jenis_dokumen  JenisDokumen\n  file_path      String\n  tanggal_upload DateTime      @default(now())\n  status         DokumenStatus @default(submitted)\n  komentar       String?\n  Mahasiswa      Mahasiswa     @relation(fields: [nim], references: [nim])\n\n  @@index([nim])\n}\n\nmodel Dosen {\n  nip             String          @id\n  nama            String\n  email           String          @unique\n  no_hp           String\n  chat_id         String          @unique\n  Bimbingan       Bimbingan[]\n  Jadwal          Jadwal[]\n  NilaiPenguji    Nilai[]         @relation(\"NilaiToPenguji\")\n  NilaiPembimbing Nilai[]         @relation(\"NilaiToPembimbing\")\n  PendaftaranKP   PendaftaranKP[]\n\n  @@index([nip])\n}\n\nmodel Instansi {\n  id                 Int                  @id @default(autoincrement())\n  nama               String\n  alamat             String\n  jenis              JenisInstansi\n  profil_singkat     String\n  status             StatusInstansi       @default(PENDING)\n  PembimbingInstansi PembimbingInstansi[]\n\n  @@index([id])\n}\n\nmodel Jadwal {\n  id            String        @id\n  nim           String\n  nip           String\n  tanggal       DateTime\n  waktu_mulai   DateTime\n  waktu_selesai DateTime\n  ruangan_nama  String\n  status        StatusSeminar @default(pending)\n  Mahasiswa     Mahasiswa     @relation(fields: [nim], references: [nim])\n  Dosen         Dosen         @relation(fields: [nip], references: [nip])\n  Ruangan       Ruangan       @relation(fields: [ruangan_nama], references: [nama])\n  Nilai         Nilai?\n\n  @@index([nim])\n  @@index([nip])\n  @@index([ruangan_nama])\n}\n\nmodel LogJadwal {\n  id                String    @id\n  jadwal_seminar_id String\n  log_type          LogType\n  nip               String\n  tanggal_lama      DateTime?\n  tanggal_baru      DateTime?\n  ruangan_lama      String?\n  ruangan_baru      String?\n  keterangan        String?\n  created_at        DateTime  @default(now())\n\n  @@index([jadwal_seminar_id])\n}\n\nmodel Mahasiswa {\n  nim           String          @id\n  nama          String\n  email         String          @unique\n  Bimbingan     Bimbingan[]\n  DailyReport   DailyReport[]\n  Dokumen       Dokumen[]\n  Jadwal        Jadwal[]\n  NilaiInstansi NilaiInstansi?\n  PendaftaranKP PendaftaranKP[]\n  Nilai         Nilai[]\n\n  @@index([nim])\n}\n\nmodel Nilai {\n  id                String      @id\n  nim               String\n  jadwal_seminar_id String      @unique\n  nip_penguji       String\n  nip_pembimbing    String\n  nilai_pembimbing  Float\n  nilai_penguji     Float\n  note_pembimbing   String?\n  note_penguji      String?\n  Jadwal            Jadwal      @relation(fields: [jadwal_seminar_id], references: [id])\n  DosenPenguji      Dosen?      @relation(\"NilaiToPenguji\", fields: [nip_penguji], references: [nip])\n  DosenPembimbing   Dosen?      @relation(\"NilaiToPembimbing\", fields: [nip_pembimbing], references: [nip])\n  Mahasiswa         Mahasiswa[]\n\n  @@index([jadwal_seminar_id])\n}\n\nmodel NilaiInstansi {\n  id                     String             @id\n  tanggal                DateTime\n  nilai_angka            Float\n  nilai_huruf            String\n  nim                    String             @unique\n  id_pembimbing_instansi String\n  PembimbingInstansi     PembimbingInstansi @relation(fields: [id_pembimbing_instansi], references: [id])\n  Mahasiswa              Mahasiswa          @relation(fields: [nim], references: [nim])\n\n  @@index([id])\n}\n\nmodel PembimbingInstansi {\n  id            String          @id\n  nama          String\n  email         String          @unique\n  jabatan       String\n  no_hp         String\n  id_instansi   Int\n  NilaiInstansi NilaiInstansi[]\n  Instansi      Instansi        @relation(fields: [id_instansi], references: [id])\n  PendaftaranKP PendaftaranKP[]\n\n  @@index([id])\n}\n\nmodel PendaftaranKP {\n  nim                        String\n  semester                   Int\n  tanggalTerdaftar           DateTime           @default(now())\n  tanggalMulai               DateTime?\n  tenggatWaktu               DateTime\n  gagal                      Boolean            @default(false)\n  tanggalSelesai             DateTime?\n  linkSuratPengantar         String?\n  linkSuratBalasan           String?\n  linkSuratPenunjukkanDospem String?\n  alasanLanjutKP             String?\n  linkSuratPerpanjanganKP    String?\n  id_pembimbing_instansi     String\n  nip                        String?\n  PembimbingInstansi         PembimbingInstansi @relation(fields: [id_pembimbing_instansi], references: [id])\n  Mahasiswa                  Mahasiswa          @relation(fields: [nim], references: [nim])\n  Dosen                      Dosen?             @relation(fields: [nip], references: [nip])\n\n  @@id([nim, semester])\n  @@index([nim, semester])\n}\n\nmodel Ruangan {\n  nama   String   @id @unique\n  Jadwal Jadwal[]\n}\n\nenum DokumenStatus {\n  submitted\n  verified\n  rejected\n}\n\nenum JenisDokumen {\n  SURAT_KETERANGAN_SELESAI_KP\n  LAPORAN_TAMBAHAN_KP\n  ID_SURAT_UNDANGAN\n  FORM_KEHADIRAN_SEMINAR\n  SURAT_UNDANGAN_SEMINAR_HASIL\n  BERITA_ACARA_SEMINAR\n  DAFTAR_HADIR_SEMINAR\n  LEMBAR_PENGESAHAN_KP\n  REVISI_DAILY_REPORT\n  REVISI_LAPORAN_TAMBAHAN\n  SISTEM_KP_FINAL\n}\n\nenum JenisInstansi {\n  SWASTA\n  PEMERINTAHAN\n  PENDIDIKAN\n  UMKM\n}\n\nenum LogType {\n  created\n  updated\n  cancelled\n  rescheduled\n}\n\nenum StatusInstansi {\n  PENDING\n  AKTIF\n  TIDAK_AKTIF\n}\n\nenum StatusSeminar {\n  pending\n  scheduled\n  completed\n  cancelled\n}\n\nenum StatusValidasi {\n  MENUNGGU\n  VALID\n  REVISI\n}\n",
  "inlineSchemaHash": "9c188dd83c9e04684331f9c6d90d2bec1971209cc24786daba1b10131889fdc9",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Bimbingan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusValidasi\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"nativeType\":null,\"relationName\":\"BimbinganToMahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dosen\",\"nativeType\":null,\"relationName\":\"BimbinganToDosen\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DailyReport\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StatusValidasi\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"nativeType\":null,\"relationName\":\"DailyReportToMahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DetailDailyReport\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DetailDailyReport\",\"nativeType\":null,\"relationName\":\"DailyReportToDetailDailyReport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DetailDailyReport\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"judul_kegiatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi_kegiatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_daily_report\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DailyReport\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DailyReport\",\"nativeType\":null,\"relationName\":\"DailyReportToDetailDailyReport\",\"relationFromFields\":[\"id_daily_report\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Dokumen\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis_dokumen\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisDokumen\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_upload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DokumenStatus\",\"nativeType\":null,\"default\":\"submitted\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"komentar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"nativeType\":null,\"relationName\":\"DokumenToMahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Dosen\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chat_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bimbingan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bimbingan\",\"nativeType\":null,\"relationName\":\"BimbinganToDosen\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Jadwal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Jadwal\",\"nativeType\":null,\"relationName\":\"DosenToJadwal\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NilaiPenguji\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Nilai\",\"nativeType\":null,\"relationName\":\"NilaiToPenguji\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NilaiPembimbing\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Nilai\",\"nativeType\":null,\"relationName\":\"NilaiToPembimbing\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PendaftaranKP\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PendaftaranKP\",\"nativeType\":null,\"relationName\":\"DosenToPendaftaranKP\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Instansi\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jenis\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"JenisInstansi\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profil_singkat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusInstansi\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PembimbingInstansi\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PembimbingInstansi\",\"nativeType\":null,\"relationName\":\"InstansiToPembimbingInstansi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Jadwal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu_mulai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu_selesai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruangan_nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusSeminar\",\"nativeType\":null,\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"nativeType\":null,\"relationName\":\"JadwalToMahasiswa\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dosen\",\"nativeType\":null,\"relationName\":\"DosenToJadwal\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ruangan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ruangan\",\"nativeType\":null,\"relationName\":\"JadwalToRuangan\",\"relationFromFields\":[\"ruangan_nama\"],\"relationToFields\":[\"nama\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nilai\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Nilai\",\"nativeType\":null,\"relationName\":\"JadwalToNilai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogJadwal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jadwal_seminar_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"log_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_lama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal_baru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruangan_lama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruangan_baru\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keterangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Mahasiswa\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bimbingan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bimbingan\",\"nativeType\":null,\"relationName\":\"BimbinganToMahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DailyReport\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DailyReport\",\"nativeType\":null,\"relationName\":\"DailyReportToMahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dokumen\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dokumen\",\"nativeType\":null,\"relationName\":\"DokumenToMahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Jadwal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Jadwal\",\"nativeType\":null,\"relationName\":\"JadwalToMahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NilaiInstansi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NilaiInstansi\",\"nativeType\":null,\"relationName\":\"MahasiswaToNilaiInstansi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PendaftaranKP\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PendaftaranKP\",\"nativeType\":null,\"relationName\":\"MahasiswaToPendaftaranKP\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nilai\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Nilai\",\"nativeType\":null,\"relationName\":\"MahasiswaToNilai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Nilai\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jadwal_seminar_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip_penguji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip_pembimbing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai_pembimbing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai_penguji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note_pembimbing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note_penguji\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Jadwal\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Jadwal\",\"nativeType\":null,\"relationName\":\"JadwalToNilai\",\"relationFromFields\":[\"jadwal_seminar_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DosenPenguji\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dosen\",\"nativeType\":null,\"relationName\":\"NilaiToPenguji\",\"relationFromFields\":[\"nip_penguji\"],\"relationToFields\":[\"nip\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DosenPembimbing\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dosen\",\"nativeType\":null,\"relationName\":\"NilaiToPembimbing\",\"relationFromFields\":[\"nip_pembimbing\"],\"relationToFields\":[\"nip\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mahasiswa\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"nativeType\":null,\"relationName\":\"MahasiswaToNilai\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NilaiInstansi\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai_angka\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai_huruf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pembimbing_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PembimbingInstansi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PembimbingInstansi\",\"nativeType\":null,\"relationName\":\"NilaiInstansiToPembimbingInstansi\",\"relationFromFields\":[\"id_pembimbing_instansi\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"nativeType\":null,\"relationName\":\"MahasiswaToNilaiInstansi\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PembimbingInstansi\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jabatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NilaiInstansi\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NilaiInstansi\",\"nativeType\":null,\"relationName\":\"NilaiInstansiToPembimbingInstansi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Instansi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Instansi\",\"nativeType\":null,\"relationName\":\"InstansiToPembimbingInstansi\",\"relationFromFields\":[\"id_instansi\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PendaftaranKP\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PendaftaranKP\",\"nativeType\":null,\"relationName\":\"PembimbingInstansiToPendaftaranKP\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PendaftaranKP\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nim\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggalTerdaftar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggalMulai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tenggatWaktu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gagal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tanggalSelesai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkSuratPengantar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkSuratBalasan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkSuratPenunjukkanDospem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alasanLanjutKP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"linkSuratPerpanjanganKP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_pembimbing_instansi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PembimbingInstansi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PembimbingInstansi\",\"nativeType\":null,\"relationName\":\"PembimbingInstansiToPendaftaranKP\",\"relationFromFields\":[\"id_pembimbing_instansi\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"nativeType\":null,\"relationName\":\"MahasiswaToPendaftaranKP\",\"relationFromFields\":[\"nim\"],\"relationToFields\":[\"nim\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Dosen\",\"nativeType\":null,\"relationName\":\"DosenToPendaftaranKP\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"nim\",\"semester\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ruangan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Jadwal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Jadwal\",\"nativeType\":null,\"relationName\":\"JadwalToRuangan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"DokumenStatus\":{\"values\":[{\"name\":\"submitted\",\"dbName\":null},{\"name\":\"verified\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null}],\"dbName\":null},\"JenisDokumen\":{\"values\":[{\"name\":\"SURAT_KETERANGAN_SELESAI_KP\",\"dbName\":null},{\"name\":\"LAPORAN_TAMBAHAN_KP\",\"dbName\":null},{\"name\":\"ID_SURAT_UNDANGAN\",\"dbName\":null},{\"name\":\"FORM_KEHADIRAN_SEMINAR\",\"dbName\":null},{\"name\":\"SURAT_UNDANGAN_SEMINAR_HASIL\",\"dbName\":null},{\"name\":\"BERITA_ACARA_SEMINAR\",\"dbName\":null},{\"name\":\"DAFTAR_HADIR_SEMINAR\",\"dbName\":null},{\"name\":\"LEMBAR_PENGESAHAN_KP\",\"dbName\":null},{\"name\":\"REVISI_DAILY_REPORT\",\"dbName\":null},{\"name\":\"REVISI_LAPORAN_TAMBAHAN\",\"dbName\":null},{\"name\":\"SISTEM_KP_FINAL\",\"dbName\":null}],\"dbName\":null},\"JenisInstansi\":{\"values\":[{\"name\":\"SWASTA\",\"dbName\":null},{\"name\":\"PEMERINTAHAN\",\"dbName\":null},{\"name\":\"PENDIDIKAN\",\"dbName\":null},{\"name\":\"UMKM\",\"dbName\":null}],\"dbName\":null},\"LogType\":{\"values\":[{\"name\":\"created\",\"dbName\":null},{\"name\":\"updated\",\"dbName\":null},{\"name\":\"cancelled\",\"dbName\":null},{\"name\":\"rescheduled\",\"dbName\":null}],\"dbName\":null},\"StatusInstansi\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"AKTIF\",\"dbName\":null},{\"name\":\"TIDAK_AKTIF\",\"dbName\":null}],\"dbName\":null},\"StatusSeminar\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"scheduled\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"cancelled\",\"dbName\":null}],\"dbName\":null},\"StatusValidasi\":{\"values\":[{\"name\":\"MENUNGGU\",\"dbName\":null},{\"name\":\"VALID\",\"dbName\":null},{\"name\":\"REVISI\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

