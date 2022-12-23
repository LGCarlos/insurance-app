/**
 * Data model for client's requests & responses from/to the service
 */

// User search Request
export interface UserSearchRequestModel {
  token: string;
}

// User search Response
export interface UserModel {
  user: string;
}

//Search Request
export interface ClientsSearchRequestModel {
  passport?: string;
  insurance?: string;
  startDate?: string;
  endDate?: string;
  paymentUpToDate?: boolean;
}

//Search response and Update Request
export interface ClientModel {
  clientId: number;
  firstName: string;
  lastName: string;
  passport: string;
  firstServiceDate: string;
  lastServiceDate?: string;
  insurance: InsurancesTypesModel[];
}

export interface InsurancesTypesModel {
  home?: InsuranceDetailsModel;
  car?: InsuranceDetailsModel;
  life?: InsuranceDetailsModel;
  healthCare?: InsuranceDetailsModel;
}

export interface InsuranceDetailsModel {
  startDate: string;
  endDate: string;
  paymentUpToDate: boolean;
}

// Total Records Response
export interface NumEntitiesResponseModel {
  numEntities: number;
}

// Create Request
export interface ClientRequestModel {
  clientId: number;
  name: string;
  surname: string;
  passport: string;
  firstServiceDate: string;
  lastServiceDate?: string;
  paymentUpToDate: boolean;
  insurance: InsurancesTypesModel[];
}

// Create Response
export interface CreationResponseModel {
  entityId: number;
}

// Delete Request
export interface DeleteRquest {
  clientId: number;
}

// Client's data table
export interface ClientsDataTable {
  name: string;
  surname: string;
  passport: string;
  firstServiceDate: string;
  lastServiceDate: string;
  debtor: string;
}

// Languages onject
export interface Langs {
  code: string;
  description: string;
}

// Insurance Card
export interface InsuranceCard {
  background: string;
  type: string;
}
