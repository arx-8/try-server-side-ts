import { Sequelize } from "sequelize"
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "src/constants/env"
import { Book } from "src/data/database/models/Book"
import { Organization } from "src/data/database/models/Organization"
import { User } from "src/data/database/models/User"

export const connectDB = async (): Promise<Sequelize> => {
  const sequelize = new Sequelize({
    database: DB_DATABASE,
    dialect: "mysql",
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT,
    username: DB_USER,
  })

  // testing the connection
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
    throw error
  }

  // init tables
  const schemas = [Book, Organization, User]
  schemas.forEach((schema) => {
    // should attach before associate
    schema.attach(sequelize)
  })
  schemas.forEach((schema) => {
    schema.associate()
  })

  return sequelize
}
