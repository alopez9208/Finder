
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
} = require('./runtime/library.js')


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




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Tbl_campaniasScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  presupuesto_gastado: 'presupuesto_gastado',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  fkid_tbl_comercios: 'fkid_tbl_comercios'
};

exports.Prisma.Tbl_clientesScalarFieldEnum = {
  pkid: 'pkid',
  telefono: 'telefono',
  nombres: 'nombres',
  apellidos: 'apellidos',
  correo: 'correo',
  direccion: 'direccion',
  fkid_tbl_municipios: 'fkid_tbl_municipios',
  fkid_tbl_comercios: 'fkid_tbl_comercios'
};

exports.Prisma.Tbl_departamentosScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  nomenclatura: 'nomenclatura'
};

exports.Prisma.Tbl_det_productosScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  fkid_tbl_productos: 'fkid_tbl_productos'
};

exports.Prisma.Tbl_estados_usuarioScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  nomenclatura: 'nomenclatura'
};

exports.Prisma.Tbl_municipiosScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  nomenclatura: 'nomenclatura',
  fkid_tbl_departamentos: 'fkid_tbl_departamentos'
};

exports.Prisma.Tbl_pedidosScalarFieldEnum = {
  pkid: 'pkid',
  fkid_tbl_clientes: 'fkid_tbl_clientes',
  fkid_tbl_det_productos: 'fkid_tbl_det_productos',
  fkid_tbl_transportadoras: 'fkid_tbl_transportadoras',
  valor: 'valor',
  fecha: 'fecha'
};

exports.Prisma.Tbl_personasScalarFieldEnum = {
  pkid: 'pkid',
  nombres: 'nombres',
  apellidos: 'apellidos',
  correo: 'correo'
};

exports.Prisma.Tbl_productosScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  costo: 'costo',
  valor: 'valor',
  fkid_tbl_empresas: 'fkid_tbl_empresas'
};

exports.Prisma.Tbl_empresasScalarFieldEnum = {
  pkid: 'pkid',
  nit: 'nit',
  nombre: 'nombre',
  telefono: 'telefono',
  correo: 'correo'
};

exports.Prisma.Tbl_rolesScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  nomenclatura: 'nomenclatura'
};

exports.Prisma.Tbl_comerciosScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  telefono: 'telefono',
  correo: 'correo',
  fkusuario_tbl_usuarios: 'fkusuario_tbl_usuarios'
};

exports.Prisma.Tbl_transportadorasScalarFieldEnum = {
  pkid: 'pkid',
  nombre: 'nombre',
  nomenclatura: 'nomenclatura'
};

exports.Prisma.Tbl_usuariosScalarFieldEnum = {
  pkusuario: 'pkusuario',
  contrase_a: 'contrase_a',
  fkid_tbl_roles: 'fkid_tbl_roles',
  fkid_tbl_estados_usuario: 'fkid_tbl_estados_usuario',
  fkid_tbl_personas: 'fkid_tbl_personas'
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
      "value": "D:\\Andrés\\Poli\\Construccion software\\Proyecto 1\\finder-app\\src\\generated\\prisma",
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
    "sourceFilePath": "D:\\Andrés\\Poli\\Construccion software\\Proyecto 1\\finder-app\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
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
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel tbl_campanias {\n  pkid                BigInt         @id @default(autoincrement())\n  nombre              String         @db.VarChar(255)\n  presupuesto_gastado Float\n  fecha_inicio        DateTime       @db.Date\n  fecha_fin           DateTime       @db.Date\n  fkid_tbl_comercios  BigInt?\n  comercio            tbl_comercios? @relation(fields: [fkid_tbl_comercios], references: [pkid])\n}\n\nmodel tbl_clientes {\n  pkid                BigInt          @id @default(autoincrement())\n  telefono            String          @unique @db.VarChar(255)\n  nombres             String          @db.VarChar(255)\n  apellidos           String          @db.VarChar(255)\n  correo              String          @db.VarChar(255)\n  direccion           String          @db.VarChar(255)\n  fkid_tbl_municipios BigInt?\n  fkid_tbl_comercios  BigInt?\n  municipios          tbl_municipios? @relation(fields: [fkid_tbl_municipios], references: [pkid])\n  comercios           tbl_comercios?  @relation(fields: [fkid_tbl_comercios], references: [pkid])\n  pedidos             tbl_pedidos[]\n}\n\nmodel tbl_departamentos {\n  pkid         BigInt           @id @default(autoincrement())\n  nombre       String           @db.VarChar(255)\n  nomenclatura String           @db.VarChar(255)\n  municipios   tbl_municipios[]\n}\n\nmodel tbl_det_productos {\n  pkid               BigInt         @id @default(autoincrement())\n  nombre             String         @db.VarChar(255)\n  fkid_tbl_productos BigInt?\n  productos          tbl_productos? @relation(fields: [fkid_tbl_productos], references: [pkid])\n  pedidos            tbl_pedidos[]\n}\n\nmodel tbl_estados_usuario {\n  pkid         BigInt         @id @default(autoincrement())\n  nombre       String         @db.VarChar(255)\n  nomenclatura String         @db.VarChar(255)\n  usuarios     tbl_usuarios[]\n}\n\nmodel tbl_municipios {\n  pkid                   BigInt             @id @default(autoincrement())\n  nombre                 String             @db.VarChar(255)\n  nomenclatura           String             @db.VarChar(255)\n  fkid_tbl_departamentos BigInt?\n  departamento           tbl_departamentos? @relation(fields: [fkid_tbl_departamentos], references: [pkid])\n  clientes               tbl_clientes[]\n}\n\nmodel tbl_pedidos {\n  pkid                     BigInt               @id @default(autoincrement())\n  fkid_tbl_clientes        BigInt?\n  fkid_tbl_det_productos   BigInt?\n  fkid_tbl_transportadoras BigInt?\n  valor                    Float\n  fecha                    DateTime             @db.Date\n  clientes                 tbl_clientes?        @relation(fields: [fkid_tbl_clientes], references: [pkid])\n  det_productos            tbl_det_productos?   @relation(fields: [fkid_tbl_det_productos], references: [pkid])\n  transportadoras          tbl_transportadoras? @relation(fields: [fkid_tbl_transportadoras], references: [pkid])\n}\n\nmodel tbl_personas {\n  pkid      BigInt         @id @default(autoincrement())\n  nombres   String         @db.VarChar(255)\n  apellidos String         @db.VarChar(255)\n  correo    String         @db.VarChar(255)\n  usuarios  tbl_usuarios[]\n}\n\nmodel tbl_productos {\n  pkid              BigInt              @id @default(autoincrement())\n  nombre            String              @db.VarChar(255)\n  costo             Float\n  valor             Float\n  fkid_tbl_empresas BigInt?\n  empresas          tbl_empresas?       @relation(fields: [fkid_tbl_empresas], references: [pkid])\n  det_productos     tbl_det_productos[]\n}\n\nmodel tbl_empresas {\n  pkid      BigInt          @id @default(autoincrement())\n  nit       String          @db.VarChar(255)\n  nombre    String          @db.VarChar(255)\n  telefono  String          @db.VarChar(255)\n  correo    String          @db.VarChar(255)\n  productos tbl_productos[]\n}\n\nmodel tbl_roles {\n  pkid         BigInt         @id @default(autoincrement())\n  nombre       String         @db.VarChar(255)\n  nomenclatura String         @db.VarChar(255)\n  usuarios     tbl_usuarios[]\n}\n\nmodel tbl_comercios {\n  pkid                   BigInt          @id @default(autoincrement())\n  nombre                 String          @db.VarChar(255)\n  telefono               String          @db.VarChar(255)\n  correo                 String          @db.VarChar(255)\n  fkusuario_tbl_usuarios String?\n  usuarios               tbl_usuarios?   @relation(fields: [fkusuario_tbl_usuarios], references: [pkusuario])\n  campanias              tbl_campanias[]\n  clientes               tbl_clientes[]\n}\n\nmodel tbl_transportadoras {\n  pkid         BigInt        @id @default(autoincrement())\n  nombre       String        @db.VarChar(255)\n  nomenclatura String        @db.VarChar(255)\n  pedidos      tbl_pedidos[]\n}\n\nmodel tbl_usuarios {\n  pkusuario                String              @id @db.VarChar(255)\n  contrase_a               String              @map(\"contraseña\") @db.VarChar(255)\n  fkid_tbl_roles           BigInt\n  fkid_tbl_estados_usuario BigInt\n  fkid_tbl_personas        BigInt\n  persona                  tbl_personas        @relation(fields: [fkid_tbl_personas], references: [pkid])\n  rol                      tbl_roles           @relation(fields: [fkid_tbl_roles], references: [pkid])\n  estado                   tbl_estados_usuario @relation(fields: [fkid_tbl_estados_usuario], references: [pkid])\n  comercios                tbl_comercios[]\n}\n",
  "inlineSchemaHash": "5b811e33cf11c88f989fd5467086366b62f014124e5757b556086e7cc87e4bde",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"tbl_campanias\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presupuesto_gastado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_inicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_fin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_comercios\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comercio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_comercios\",\"nativeType\":null,\"relationName\":\"tbl_campaniasTotbl_comercios\",\"relationFromFields\":[\"fkid_tbl_comercios\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_clientes\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombres\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellidos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"direccion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_municipios\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_comercios\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"municipios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_municipios\",\"nativeType\":null,\"relationName\":\"tbl_clientesTotbl_municipios\",\"relationFromFields\":[\"fkid_tbl_municipios\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comercios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_comercios\",\"nativeType\":null,\"relationName\":\"tbl_clientesTotbl_comercios\",\"relationFromFields\":[\"fkid_tbl_comercios\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedidos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_pedidos\",\"nativeType\":null,\"relationName\":\"tbl_clientesTotbl_pedidos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_departamentos\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomenclatura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"municipios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_municipios\",\"nativeType\":null,\"relationName\":\"tbl_departamentosTotbl_municipios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_det_productos\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_productos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_productos\",\"nativeType\":null,\"relationName\":\"tbl_det_productosTotbl_productos\",\"relationFromFields\":[\"fkid_tbl_productos\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedidos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_pedidos\",\"nativeType\":null,\"relationName\":\"tbl_det_productosTotbl_pedidos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_estados_usuario\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomenclatura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_usuarios\",\"nativeType\":null,\"relationName\":\"tbl_estados_usuarioTotbl_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_municipios\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomenclatura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_departamentos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departamento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_departamentos\",\"nativeType\":null,\"relationName\":\"tbl_departamentosTotbl_municipios\",\"relationFromFields\":[\"fkid_tbl_departamentos\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_clientes\",\"nativeType\":null,\"relationName\":\"tbl_clientesTotbl_municipios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_pedidos\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_clientes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_det_productos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_transportadoras\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_clientes\",\"nativeType\":null,\"relationName\":\"tbl_clientesTotbl_pedidos\",\"relationFromFields\":[\"fkid_tbl_clientes\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"det_productos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_det_productos\",\"nativeType\":null,\"relationName\":\"tbl_det_productosTotbl_pedidos\",\"relationFromFields\":[\"fkid_tbl_det_productos\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transportadoras\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_transportadoras\",\"nativeType\":null,\"relationName\":\"tbl_pedidosTotbl_transportadoras\",\"relationFromFields\":[\"fkid_tbl_transportadoras\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_personas\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombres\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellidos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_usuarios\",\"nativeType\":null,\"relationName\":\"tbl_personasTotbl_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_productos\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_empresas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_empresas\",\"nativeType\":null,\"relationName\":\"tbl_empresasTotbl_productos\",\"relationFromFields\":[\"fkid_tbl_empresas\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"det_productos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_det_productos\",\"nativeType\":null,\"relationName\":\"tbl_det_productosTotbl_productos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_empresas\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_productos\",\"nativeType\":null,\"relationName\":\"tbl_empresasTotbl_productos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_roles\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomenclatura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_usuarios\",\"nativeType\":null,\"relationName\":\"tbl_rolesTotbl_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_comercios\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkusuario_tbl_usuarios\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_usuarios\",\"nativeType\":null,\"relationName\":\"tbl_comerciosTotbl_usuarios\",\"relationFromFields\":[\"fkusuario_tbl_usuarios\"],\"relationToFields\":[\"pkusuario\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campanias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_campanias\",\"nativeType\":null,\"relationName\":\"tbl_campaniasTotbl_comercios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_clientes\",\"nativeType\":null,\"relationName\":\"tbl_clientesTotbl_comercios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_transportadoras\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomenclatura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedidos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_pedidos\",\"nativeType\":null,\"relationName\":\"tbl_pedidosTotbl_transportadoras\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tbl_usuarios\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"pkusuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrase_a\",\"dbName\":\"contraseña\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_roles\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_estados_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fkid_tbl_personas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"persona\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_personas\",\"nativeType\":null,\"relationName\":\"tbl_personasTotbl_usuarios\",\"relationFromFields\":[\"fkid_tbl_personas\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_roles\",\"nativeType\":null,\"relationName\":\"tbl_rolesTotbl_usuarios\",\"relationFromFields\":[\"fkid_tbl_roles\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_estados_usuario\",\"nativeType\":null,\"relationName\":\"tbl_estados_usuarioTotbl_usuarios\",\"relationFromFields\":[\"fkid_tbl_estados_usuario\"],\"relationToFields\":[\"pkid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comercios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tbl_comercios\",\"nativeType\":null,\"relationName\":\"tbl_comerciosTotbl_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
