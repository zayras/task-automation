module.exports = {
  api: {
    port: process.env.API_PORT || 3600,
    jwt: {
      secret: process.env.API_JWT_SECRET || 'secret1234567890',
      expiration: process.env.API_JWT_TTL || 3600,
    },
    permissionLevels: {
      USER: 1,
      ADMIN: 2048
    }
  },
  database: {
    database: process.env.DB || 'testdb',
    username: process.env.BD_USERNAME || 'root',
    password: process.env.BD_PASSWORD || null,
    options: {
      dialect: process.env.BD_DIALECT || 'sqlite',
      host: process.env.BD_HOST || 'localhost',
      port: process.env.BD_PORT || 3306,
      storage: process.env.BD_PATH || 'src/storage/dev.sqlite3'
    }
  }
}
