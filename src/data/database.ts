import { Sequelize } from "sequelize"
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "src/constants/env"

export const connectDB = async (): Promise<Sequelize> => {
  const sequelize = new Sequelize({
    database: DB_DATABASE,
    dialect: "mysql",
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT,
    username: DB_USER,
  })

  // Testing the connection
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }

  return sequelize
}
