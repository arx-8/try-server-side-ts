import type { HasOneGetAssociationMixin, Optional, Sequelize } from "sequelize"
import { DataTypes, Model } from "sequelize"
import { Book } from "src/data/database/models/Book"
import { Organization } from "src/data/database/models/Organization"

type UserAttributes = {
  favorite_book_id?: number
  id: number
  name: string
  organization_id: number
}

const userAttributeNames: (keyof UserAttributes)[] = [
  "favorite_book_id",
  "id",
  "name",
  "organization_id",
]

export const userAttributeName = userAttributeNames.reduce((acc, curr) => {
  return {
    ...acc,
    [curr]: curr,
  }
  // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
}, {} as Record<keyof UserAttributes, keyof UserAttributes>)

type UserCreationAttributes = Optional<UserAttributes, "id">

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public favorite_book_id?: number

  public id!: number

  public name!: string

  public organization_id!: number

  public readonly createdAt!: Date

  public readonly updatedAt!: Date

  public getFavoriteBook!: HasOneGetAssociationMixin<Book>

  public static associate(): void {
    User.belongsTo(Organization, {
      foreignKey: userAttributeName.organization_id,
    })
    User.hasOne(Book, {
      foreignKey: userAttributeName.favorite_book_id,
      foreignKeyConstraint: true,
    })
  }

  public static attach = (sequelize: Sequelize): void => {
    this.init(
      {
        favorite_book_id: {
          type: DataTypes.INTEGER.UNSIGNED,
        },
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
        organization_id: {
          type: DataTypes.INTEGER.UNSIGNED,
        },
      },
      {
        sequelize,
        tableName: "users",
      }
    )
  }
}
