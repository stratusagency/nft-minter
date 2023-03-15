"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "getMessages",
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
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "writers",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50611090806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063255e9c111461005c5780635ff6cbf31461008c57806366a52672146100aa578063c16f1222146100da578063c45d9bea146100f6575b600080fd5b61007660048036038101906100719190610837565b610126565b60405161008391906109b6565b60405180910390f35b61009461023e565b6040516100a191906109b6565b60405180910390f35b6100c460048036038101906100bf9190610a0e565b610538565b6040516100d19190610a4a565b60405180910390f35b6100f460048036038101906100ef9190610b9a565b610577565b005b610110600480360381019061010b9190610bf6565b61065e565b60405161011d9190610c80565b60405180910390f35b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156102335783829060005260206000200180546101a690610cd1565b80601f01602080910402602001604051908101604052809291908181526020018280546101d290610cd1565b801561021f5780601f106101f45761010080835404028352916020019161021f565b820191906000526020600020905b81548152906001019060200180831161020257829003601f168201915b505050505081526020019060010190610187565b505050509050919050565b606060008080549050905060005b6000805490508110156102f957600160008083815481106102705761026f610d02565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050826102e49190610d60565b915080806102f190610d94565b91505061024c565b5060008167ffffffffffffffff81111561031657610315610a6f565b5b60405190808252806020026020018201604052801561034957816020015b60608152602001906001900390816103345790505b5090506000805b60008054905081101561052e57600080828154811061037257610371610d02565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156104ac57838290600052602060002001805461041f90610cd1565b80601f016020809104026020016040519081016040528092919081815260200182805461044b90610cd1565b80156104985780601f1061046d57610100808354040283529160200191610498565b820191906000526020600020905b81548152906001019060200180831161047b57829003601f168201915b505050505081526020019060010190610400565b50505050905060005b8151811015610518578181815181106104d1576104d0610d02565b5b60200260200101518686815181106104ec576104eb610d02565b5b6020026020010181905250848061050290610d94565b955050808061051090610d94565b9150506104b5565b505050808061052690610d94565b915050610350565b5081935050505090565b6000818154811061054857600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61058082610717565b6105e8576000829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190915090816106599190610f88565b505050565b6001602052816000526040600020818154811061067a57600080fd5b9060005260206000200160009150915050805461069690610cd1565b80601f01602080910402602001604051908101604052809291908181526020018280546106c290610cd1565b801561070f5780601f106106e45761010080835404028352916020019161070f565b820191906000526020600020905b8154815290600101906020018083116106f257829003601f168201915b505050505081565b600080600090505b6000805490508110156107ba578273ffffffffffffffffffffffffffffffffffffffff166000828154811061075757610756610d02565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036107a75760019150506107c0565b80806107b290610d94565b91505061071f565b50600090505b919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610804826107d9565b9050919050565b610814816107f9565b811461081f57600080fd5b50565b6000813590506108318161080b565b92915050565b60006020828403121561084d5761084c6107cf565b5b600061085b84828501610822565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156108ca5780820151818401526020810190506108af565b60008484015250505050565b6000601f19601f8301169050919050565b60006108f282610890565b6108fc818561089b565b935061090c8185602086016108ac565b610915816108d6565b840191505092915050565b600061092c83836108e7565b905092915050565b6000602082019050919050565b600061094c82610864565b610956818561086f565b93508360208202850161096885610880565b8060005b858110156109a457848403895281516109858582610920565b945061099083610934565b925060208a0199505060018101905061096c565b50829750879550505050505092915050565b600060208201905081810360008301526109d08184610941565b905092915050565b6000819050919050565b6109eb816109d8565b81146109f657600080fd5b50565b600081359050610a08816109e2565b92915050565b600060208284031215610a2457610a236107cf565b5b6000610a32848285016109f9565b91505092915050565b610a44816107f9565b82525050565b6000602082019050610a5f6000830184610a3b565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610aa7826108d6565b810181811067ffffffffffffffff82111715610ac657610ac5610a6f565b5b80604052505050565b6000610ad96107c5565b9050610ae58282610a9e565b919050565b600067ffffffffffffffff821115610b0557610b04610a6f565b5b610b0e826108d6565b9050602081019050919050565b82818337600083830152505050565b6000610b3d610b3884610aea565b610acf565b905082815260208101848484011115610b5957610b58610a6a565b5b610b64848285610b1b565b509392505050565b600082601f830112610b8157610b80610a65565b5b8135610b91848260208601610b2a565b91505092915050565b60008060408385031215610bb157610bb06107cf565b5b6000610bbf85828601610822565b925050602083013567ffffffffffffffff811115610be057610bdf6107d4565b5b610bec85828601610b6c565b9150509250929050565b60008060408385031215610c0d57610c0c6107cf565b5b6000610c1b85828601610822565b9250506020610c2c858286016109f9565b9150509250929050565b600082825260208201905092915050565b6000610c5282610890565b610c5c8185610c36565b9350610c6c8185602086016108ac565b610c75816108d6565b840191505092915050565b60006020820190508181036000830152610c9a8184610c47565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ce957607f821691505b602082108103610cfc57610cfb610ca2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d6b826109d8565b9150610d76836109d8565b9250828201905080821115610d8e57610d8d610d31565b5b92915050565b6000610d9f826109d8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610dd157610dd0610d31565b5b600182019050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610e3e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610e01565b610e488683610e01565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610e85610e80610e7b846109d8565b610e60565b6109d8565b9050919050565b6000819050919050565b610e9f83610e6a565b610eb3610eab82610e8c565b848454610e0e565b825550505050565b600090565b610ec8610ebb565b610ed3818484610e96565b505050565b5b81811015610ef757610eec600082610ec0565b600181019050610ed9565b5050565b601f821115610f3c57610f0d81610ddc565b610f1684610df1565b81016020851015610f25578190505b610f39610f3185610df1565b830182610ed8565b50505b505050565b600082821c905092915050565b6000610f5f60001984600802610f41565b1980831691505092915050565b6000610f788383610f4e565b9150826002028217905092915050565b610f9182610890565b67ffffffffffffffff811115610faa57610fa9610a6f565b5b610fb48254610cd1565b610fbf828285610efb565b600060209050601f831160018114610ff25760008415610fe0578287015190505b610fea8582610f6c565b865550611052565b601f19841661100086610ddc565b60005b8281101561102857848901518255600182019150602085019450602081019050611003565b868310156110455784890151611041601f891682610f4e565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220aebdeda0b29e94b9f661d1bed1eef4a3ab70749c56df3ae23cc8f6527387179e64736f6c63430008110033";
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
