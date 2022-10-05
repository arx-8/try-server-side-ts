import { Organization } from "src/data/database/models/Organization"

export type OrganizationRepository = {
  create: () => Promise<Organization>
}

export const newOrganizationRepository = (): OrganizationRepository => {
  return {
    create: async () => {
      const created = await Organization.create({
        name: `org:${new Date().toISOString()}`,
      })
      return created
    },
  }
}
