export type AddressIdsType = Array<string>;

export type AddressType = {
  id: string;
  number: number;
  str_number: string;
  str_number_full: string;
  house: {
    id: string;
    address: string;
    fias_addrobjs: Array<string>;
  };
};

export type ResponseAddressType = {
  count: number;
  next: string;
  previous: string;
  results: Array<AddressType>;
};
