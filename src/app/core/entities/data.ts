
export class Flights {
  origin!: string;
  destination!: string;
  price!: string;
  flightNumber! : string;
  constructor() {
  }
}

export class dataProducts {
  codProduct!: string;
  product!: string;
  price!: number;
  constructor() {
  }
}

export class dataOrders {
  codProduct!: string;
  codOrder!: string;

  idClient!: string;
  nameClient!: string;
  telClient!: string;

  amountProduct!: number;
  amountOrder!: number;
  constructor() {
  }
}
