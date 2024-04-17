export type Bus = {
  company: string;
  numberPlate: string;
  busStops: Array<BusStop>;
  price: number;
};

type BusStop = {
  arrivalTime: string;
  name: string;
};
