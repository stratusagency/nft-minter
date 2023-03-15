import fastify, { FastifyRequest } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import dotenv from "dotenv";
import path from "path";

import { AbiItem } from "web3-utils";
import Web3 from "web3";

import { abi } from "./artifacts/contracts/ERC721.sol/MyERC721.json";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "./.env") });

const server = fastify<Server, IncomingMessage, ServerResponse>({
  logger: true,
});

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://fragrant-cold-asphalt.base-goerli.discover.quiknode.pro/a8c8e01e49988dab2d6d76d85491b12ae9748ac8/"
  )
);

const contract = new web3.eth.Contract(
  abi as AbiItem[],
  process.env.CONTRACT_ADDRESS
);

server.get("/", async (_request, _reply) => {
  return { contract_address: process.env.CONTRACT_ADDRESS };
});

server.listen({ port: 8080 }, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);

  const private_key: string = process.env.WALLET_KEY as string;

  const account = web3.eth.accounts.privateKeyToAccount(private_key);
  web3.eth.accounts.wallet.add(private_key);

  const gasLimit = (await web3.eth.getBlock("latest")).gasLimit;

  try {
    const result = await contract.methods
      .mint("0x3ae03c78a30F6f6FB4420fD407Ab75415588E06F")
      .send({ from: account.address, gas: gasLimit });

    console.log(result, "result");
  } catch (error: any) {
    // console.log(error, " error");
    const receipt = await web3.eth.getTransactionReceipt(
      error.receipt.transactionHash
    );

    console.log(receipt, 'receipt');
  }
});
