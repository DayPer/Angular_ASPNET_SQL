

export class dataProducts {
  codProduct!: string;
  product!: string;
  price!: number;
  amount!: number;
  photo!: any;
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

export class Clients {
  idClient!: string;
  nameClient!: string;
  mailClient!: string;

  constructor() {
  }
}
