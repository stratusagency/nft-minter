/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface PriceConsumerV3Interface extends utils.Interface {
  functions: {
    "getLatestPrice()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getLatestPrice"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getLatestPrice",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getLatestPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PriceConsumerV3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PriceConsumerV3Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getLatestPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getLatestPrice(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getLatestPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getLatestPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getLatestPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
