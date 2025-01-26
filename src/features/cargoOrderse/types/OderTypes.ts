// types/OrderTypes.ts
export interface Destination {
  startDate: string;
  address: string;
}

export interface Cargo {
  type: string;
}

export interface Route {
  pickup?: string;
  dropoff?: string;
}

export interface Order {
  order_number: number;
  status: number; // 1 = "In Transit"
  cargo: Cargo;
  route: Route;
  destinations: Destination[];
}
