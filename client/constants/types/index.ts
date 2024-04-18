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

export interface Schedule {
  time: string;
  task: {
    start: string;
    destination: string;
    duration: number;
    passengerCount: number;
  };
}
