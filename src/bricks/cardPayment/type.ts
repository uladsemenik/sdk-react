import { IBrickError, IPayerIdentification } from '../util/types/common';

export type BricksBuilderType = {
  create: (param: string, param2: string, settings: {}) => void;
};

export type InstanceMercadoPagoType = {
  bricks: () => BricksBuilderType;
};

export type CardPaymentType = {
  onSubmit?: (param: ICardPaymentFormData, param2?: IAdditionalData) => Promise<void>;
  onReady?: () => void;
  onError?: (param: IBrickError) => void;
  config: {
    initialization: {
      amount: number;
      payer?: ICardPaymentBrickPayer;
    };
    customization?: {
      paymentMethods?: {
        minInstallments?: number;
        maxInstallments?: number;
        types?: {
          excluded: string[];
        };
      };
    };
  };
};

interface ICardPaymentFormData {
  token: string;
  issuer_id: string;
  payment_method_id: string;
  transaction_amount: number;
  installments: number;
  payer: ICardPaymentBrickPayer;
}

interface ICardPaymentBrickPayer {
  email?: string;
  identification?: IPayerIdentification;
}

interface IAdditionalData {
  bin: string;
}
