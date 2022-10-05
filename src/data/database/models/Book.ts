import type { Optional, Sequelize } from "sequelize"
import { DataTypes, Model } from "sequelize"

type BookAttributes = {
  id: number
  name: string
}

type BookCreationAttributes = Optional<BookAttributes, "id">

export class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
{
  public id!: number

  public name!: string

  public readonly createdAt!: Date

  public readonly updatedAt!: Date

  public static associate(): void {
    // NOP
  }

  public static attach = (sequelize: Sequelize): void => {
    this.init(
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED,
        },
        name: {
          allowNull: false,
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          type: new DataTypes.STRING(128),
        },
      },
      {
        sequelize,
        tableName: "books",
      }
    )
  }
}
