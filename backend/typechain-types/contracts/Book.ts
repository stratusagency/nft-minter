/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface BookInterface extends utils.Interface {
  functions: {
    "getMessages()": FunctionFragment;
    "messages(address,uint256)": FunctionFragment;
    "readMessage(address)": FunctionFragment;
    "writeMessage(address,string)": FunctionFragment;
    "writers(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getMessages"
      | "messages"
      | "readMessage"
      | "writeMessage"
      | "writers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getMessages",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messages",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readMessage",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "writeMessage",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "writers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messages", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "writeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "writers", data: BytesLike): Result;

  events: {};
}

export interface Book extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BookInterface;

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
    getMessages(overrides?: CallOverrides): Promise<[string[]]>;

    messages(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    readMessage(
      author: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    writeMessage(
      writer: PromiseOrValue<string>,
      message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    writers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getMessages(overrides?: CallOverrides): Promise<string[]>;

  messages(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  readMessage(
    author: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  writeMessage(
    writer: PromiseOrValue<string>,
    message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  writers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getMessages(overrides?: CallOverrides): Promise<string[]>;

    messages(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    readMessage(
      author: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    writeMessage(
      writer: PromiseOrValue<string>,
      message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    writers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getMessages(overrides?: CallOverrides): Promise<BigNumber>;

    messages(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readMessage(
      author: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    writeMessage(
      writer: PromiseOrValue<string>,
      message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    writers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMessages(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messages(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readMessage(
      author: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    writeMessage(
      writer: PromiseOrValue<string>,
      message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    writers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}