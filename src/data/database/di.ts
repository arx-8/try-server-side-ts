import type { OrganizationRepository } from "src/data/database/repositories/organizationRepository"

export type DIContainer = {
  organizationRepository: OrganizationRepository
}
