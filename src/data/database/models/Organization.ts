import type {
  Association,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  Optional,
  Sequelize,
} from "sequelize"
import { DataTypes, Model } from "sequelize"
import { User, userAttributeName } from "src/data/database/models/User"

type OrganizationAttributes = {
  id: number
  name: string
}

type OrganizationCreationAttributes = Optional<OrganizationAttributes, "id">

export class Organization
  extends Model<OrganizationAttributes, OrganizationCreationAttributes>
  implements OrganizationAttributes
{
  public static override associations: {
    users: Association<Organization, User>
  }

  public id!: number

  public name!: string

  public readonly createdAt!: Date

  public readonly updatedAt!: Date

  public getUsers!: HasManyGetAssociationsMixin<User>

  public addUser!: HasManyAddAssociationMixin<User, number>

  public hasUser!: HasManyHasAssociationMixin<User, number>

  public countUsers!: HasManyCountAssociationsMixin

  public createUser!: HasManyCreateAssociationMixin<User>

  public static associate(): void {
    Organization.hasMany(User, {
      foreignKey: userAttributeName.organization_id,
    })
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
        tableName: "organizations",
      }
    )
  }
}
