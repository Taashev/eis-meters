export type MeterType = {
  id: string;
  _type: Array<string>;
  area: {
    id: string;
  };
  is_automatic: boolean | null;
  communication: string;
  description: string;
  serial_number: string;
  installation_date: string;
  brand_name: string | null;
  model_name: string | null;
  initial_values: Array<number>;
};

export type ResponseMeterType = {
  count: number;
  next: string | null;
  previous: string;
  results: Array<MeterType>;
};
