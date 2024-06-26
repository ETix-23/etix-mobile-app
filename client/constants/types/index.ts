export type Bus = {
  _id: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  currency: string;
  numberOfTickets: number;
  transportCompany: Company;
};

type Company {
  name : string;
  description : string;
}
export interface Schedule {
  time: string;
  task: {
    start: string;
    destination: string;
    duration: number;
    passengerCount: number;
  };
}
