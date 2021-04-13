import {
  CliRecord,
  CliRecordsQueryParams,
  DEFAULT_QUERY_PARAMS,
} from "../models/cli-records";

export class RecordsService {
  cliRecordsQueryParams: CliRecordsQueryParams = Object.assign(
    {},
    DEFAULT_QUERY_PARAMS
  );
  oldQueryParams: CliRecordsQueryParams = <CliRecordsQueryParams>{};
  allCliRecords: CliRecord[] = [];
  recordsCount: number = 0;
  pagesRange: string = "";
  createdBy: string = "";

  constructor() {
    const token: any = localStorage.getItem("okta-token-storage");
    this.createdBy = token.idToken.claims.name;
  }

  getCliRecordsWithQueryParams() {}
}
