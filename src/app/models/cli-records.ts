export interface CliRecord {
  phoneNumber: string;
  status: string;
  reason: string;
  source: string;
  active: boolean;
  createdDate: string;
  createdBy: string;
}

export interface AddRecordData {
  phoneNumber: string;
  status: string;
  reason: string;
  source: string;
  active: boolean;
  userID: string;
}

export interface UpdateRecordData {
  phoneNumber: string;
  status: string;
  reason: string;
  source: string;
  active: boolean;
  userID: string;
}

export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export interface CliRecordsResponse {
  results: CliRecord[];
  total: number;
}

export interface CliRecordsQueryParams {
  perPage: number;
  page: number;
  sortBy: string;
  sortDirection: string;
  recordStatus?: string | undefined;
  source?: string | undefined;
  fraudReason?: string | undefined;
  cliStatus?: string | undefined;
  dateFrom?: string | undefined;
  dateTo?: string | undefined;
}

export interface TableTitle {
  name: string;
  id: string;
  size: number;
}

export const DEFAULT_PER_PAGE: number = 10;
export const DEFAULT_PAGE: number = 1;
export const DEFAULT_SORT_COLUMN: string = "date";
export const DEFAULT_SORT_DIRECTION: SortDirection = SortDirection.DESC;

export const DEFAULT_QUERY_PARAMS: CliRecordsQueryParams = {
  perPage: DEFAULT_PER_PAGE,
  page: DEFAULT_PAGE,
  sortBy: DEFAULT_SORT_COLUMN,
  sortDirection: DEFAULT_SORT_DIRECTION,
  recordStatus: "",
  source: "",
  fraudReason: "",
  cliStatus: "",
  dateFrom: "",
  dateTo: "",
};

export interface MultiSelectDropdownOption {
  item_id: any;
  item_text: any;
}

export interface CheckboxData {
  name: string;
  id: string;
  value: string;
  checked?: boolean;
}

export const MULTISELECT_DROPDOWN_DEFAULTS = {
  idField: "item_id",
  textField: "item_text",
  enableCheckAll: false,
};

export enum RecordStatusEnum {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

export const cliRecordStatusList: MultiSelectDropdownOption[] = [
  { item_id: 1, item_text: RecordStatusEnum.ACTIVE },
  { item_id: 2, item_text: RecordStatusEnum.INACTIVE },
];

export const cliStatusList: MultiSelectDropdownOption[] = [
  { item_id: 1, item_text: "BalanceOutstanding" },
];

export const sourceList: MultiSelectDropdownOption[] = [
  { item_id: 1, item_text: "CM" },
  { item_id: 2, item_text: "TGR" },
];

export const fraudReasonList: MultiSelectDropdownOption[] = [
  { item_id: 1, item_text: "Fraud ring" },
  { item_id: 2, item_text: "Account takeover" },
  { item_id: 3, item_text: "Address fronting" },
  { item_id: 4, item_text: "Claims fraud ring" },
  { item_id: 5, item_text: "Claims fraud/Ghost broker" },
  {
    item_id: 6,
    item_text: "Eastern European ghost-broker supplying false addresses",
  },
  { item_id: 7, item_text: "False address/Payment fraud" },
  { item_id: 8, item_text: "False addresses" },
  { item_id: 9, item_text: "Ghost-broker" },
  { item_id: 10, item_text: "Iovation" },
  { item_id: 11, item_text: "Payment fraud" },
  {
    item_id: 12,
    item_text: "Payment fraud, Address fronting, Claim concerns, False NCD",
  },
  { item_id: 13, item_text: "Payment fraud, ID fraud, Address fronting" },
  { item_id: 14, item_text: "Payment fraud/False address" },
  { item_id: 15, item_text: "Payment fraud/GB" },
  { item_id: 16, item_text: "Payment fraud/Staged accidents" },
  {
    item_id: 17,
    item_text: "Policies incepted to facilitate criminal activity",
  },
  {
    item_id: 18,
    item_text:
      "Stolen credit/debit cards and accounts, false addresses and the creation of false identities",
  },
];

export const toText = (option: MultiSelectDropdownOption): string => {
  return option.item_text;
};

export const highlightSelectedOption = (optionElement: HTMLElement): void => {
  if (!optionElement) return;

  const checkbox: HTMLInputElement = <HTMLInputElement>(
    optionElement.querySelector('input[type="checkbox"]')
  );
  optionElement.style.background =
    checkbox && checkbox.checked ? "lightgrey" : "transparent";
};

export const checked = (checkbox: CheckboxData): boolean => {
  return (checkbox.checked = true);
};

export const toValue = (checkbox: CheckboxData): string => {
  return checkbox.value;
};

export const formatParams = (checkboxes: CheckboxData[]): string => {
  return checkboxes.filter(checked).map(toValue).join(";");
};
