"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "messages",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "author",
                type: "address",
            },
        ],
        name: "readMessage",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "writer",
                type: "address",
            },
            {
                internalType: "string",
                name: "message",
                type: "string",
            },
        ],
        name: "writeMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610aa1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063255e9c1114610046578063c16f122214610076578063c45d9bea14610092575b600080fd5b610060600480360381019061005b9190610379565b6100c2565b60405161006d91906104f8565b60405180910390f35b610090600480360381019061008b919061064f565b6101d9565b005b6100ac60048036038101906100a791906106e1565b61024e565b6040516100b9919061076b565b60405180910390f35b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156101ce578382906000526020600020018054610141906107bc565b80601f016020809104026020016040519081016040528092919081815260200182805461016d906107bc565b80156101ba5780601f1061018f576101008083540402835291602001916101ba565b820191906000526020600020905b81548152906001019060200180831161019d57829003601f168201915b505050505081526020019060010190610122565b505050509050919050565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190915090816102499190610999565b505050565b6000602052816000526040600020818154811061026a57600080fd5b90600052602060002001600091509150508054610286906107bc565b80601f01602080910402602001604051908101604052809291908181526020018280546102b2906107bc565b80156102ff5780601f106102d4576101008083540402835291602001916102ff565b820191906000526020600020905b8154815290600101906020018083116102e257829003601f168201915b505050505081565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103468261031b565b9050919050565b6103568161033b565b811461036157600080fd5b50565b6000813590506103738161034d565b92915050565b60006020828403121561038f5761038e610311565b5b600061039d84828501610364565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561040c5780820151818401526020810190506103f1565b60008484015250505050565b6000601f19601f8301169050919050565b6000610434826103d2565b61043e81856103dd565b935061044e8185602086016103ee565b61045781610418565b840191505092915050565b600061046e8383610429565b905092915050565b6000602082019050919050565b600061048e826103a6565b61049881856103b1565b9350836020820285016104aa856103c2565b8060005b858110156104e657848403895281516104c78582610462565b94506104d283610476565b925060208a019950506001810190506104ae565b50829750879550505050505092915050565b600060208201905081810360008301526105128184610483565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61055c82610418565b810181811067ffffffffffffffff8211171561057b5761057a610524565b5b80604052505050565b600061058e610307565b905061059a8282610553565b919050565b600067ffffffffffffffff8211156105ba576105b9610524565b5b6105c382610418565b9050602081019050919050565b82818337600083830152505050565b60006105f26105ed8461059f565b610584565b90508281526020810184848401111561060e5761060d61051f565b5b6106198482856105d0565b509392505050565b600082601f8301126106365761063561051a565b5b81356106468482602086016105df565b91505092915050565b6000806040838503121561066657610665610311565b5b600061067485828601610364565b925050602083013567ffffffffffffffff81111561069557610694610316565b5b6106a185828601610621565b9150509250929050565b6000819050919050565b6106be816106ab565b81146106c957600080fd5b50565b6000813590506106db816106b5565b92915050565b600080604083850312156106f8576106f7610311565b5b600061070685828601610364565b9250506020610717858286016106cc565b9150509250929050565b600082825260208201905092915050565b600061073d826103d2565b6107478185610721565b93506107578185602086016103ee565b61076081610418565b840191505092915050565b600060208201905081810360008301526107858184610732565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806107d457607f821691505b6020821081036107e7576107e661078d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261084f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610812565b6108598683610812565b95508019841693508086168417925050509392505050565b6000819050919050565b600061089661089161088c846106ab565b610871565b6106ab565b9050919050565b6000819050919050565b6108b08361087b565b6108c46108bc8261089d565b84845461081f565b825550505050565b600090565b6108d96108cc565b6108e48184846108a7565b505050565b5b81811015610908576108fd6000826108d1565b6001810190506108ea565b5050565b601f82111561094d5761091e816107ed565b61092784610802565b81016020851015610936578190505b61094a61094285610802565b8301826108e9565b50505b505050565b600082821c905092915050565b600061097060001984600802610952565b1980831691505092915050565b6000610989838361095f565b9150826002028217905092915050565b6109a2826103d2565b67ffffffffffffffff8111156109bb576109ba610524565b5b6109c582546107bc565b6109d082828561090c565b600060209050601f831160018114610a0357600084156109f1578287015190505b6109fb858261097d565b865550610a63565b601f198416610a11866107ed565b60005b82811015610a3957848901518255600182019150602085019450602081019050610a14565b86831015610a565784890151610a52601f89168261095f565b8355505b6001600288020188555050505b50505050505056fea264697066735822122012c6b48952bf3516e6cbde45eaffddef131d2f779173efb0eaf1ede6da51656564736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class Book__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Book__factory = Book__factory;
Book__factory.bytecode = _bytecode;
Book__factory.abi = _abi;
