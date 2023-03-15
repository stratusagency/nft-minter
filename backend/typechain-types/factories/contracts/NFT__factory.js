"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
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
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280601181526020017f737472617475736167656e63792e6574680000000000000000000000000000008152506040518060400160405280600481526020017f535452410000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000324565b508060019081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b6126e1806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636a6278421161008c578063a22cb46511610066578063a22cb4651461026f578063b88d4fde1461028b578063c87b56dd146102a7578063e985e9c5146102d7576100ea565b80636a627842146101f157806370a082311461022157806395d89b4114610251576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611946565b610307565b604051610116919061198e565b60405180910390f35b6101276103e9565b6040516101349190611a39565b60405180910390f35b61015760048036038101906101529190611a91565b61047b565b6040516101649190611aff565b60405180910390f35b61018760048036038101906101829190611b46565b6104c1565b005b6101a3600480360381019061019e9190611b86565b6105d8565b005b6101bf60048036038101906101ba9190611b86565b610638565b005b6101db60048036038101906101d69190611a91565b610658565b6040516101e89190611aff565b60405180910390f35b61020b60048036038101906102069190611bd9565b6106de565b6040516102189190611c15565b60405180910390f35b61023b60048036038101906102369190611bd9565b61070b565b6040516102489190611c15565b60405180910390f35b6102596107c2565b6040516102669190611a39565b60405180910390f35b61028960048036038101906102849190611c5c565b610854565b005b6102a560048036038101906102a09190611dd1565b61086a565b005b6102c160048036038101906102bc9190611a91565b6108cc565b6040516102ce9190611a39565b60405180910390f35b6102f160048036038101906102ec9190611e54565b610934565b6040516102fe919061198e565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e1826109c8565b5b9050919050565b6060600080546103f890611ec3565b80601f016020809104026020016040519081016040528092919081815260200182805461042490611ec3565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600061048682610a32565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104cc82610658565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361053c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053390611f66565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661055b610a7d565b73ffffffffffffffffffffffffffffffffffffffff16148061058a575061058981610584610a7d565b610934565b5b6105c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c090611ff8565b60405180910390fd5b6105d38383610a85565b505050565b6105e96105e3610a7d565b82610b3e565b610628576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061f9061208a565b60405180910390fd5b610633838383610bd3565b505050565b6106538383836040518060200160405280600081525061086a565b505050565b60008061066483610ecc565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc906120f6565b60405180910390fd5b80915050919050565b60006106ea6006610f09565b60006106f66006610f1f565b90506107028382610f2d565b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361077b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077290612188565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107d190611ec3565b80601f01602080910402602001604051908101604052809291908181526020018280546107fd90611ec3565b801561084a5780601f1061081f5761010080835404028352916020019161084a565b820191906000526020600020905b81548152906001019060200180831161082d57829003601f168201915b5050505050905090565b61086661085f610a7d565b8383610f4b565b5050565b61087b610875610a7d565b83610b3e565b6108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b19061208a565b60405180910390fd5b6108c6848484846110b7565b50505050565b60606108d782610a32565b60006108e1611113565b90506000815111610901576040518060200160405280600081525061092c565b8061090b8461112a565b60405160200161091c9291906121e4565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610a3b816111f8565b610a7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a71906120f6565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610af883610658565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b4a83610658565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b8c5750610b8b8185610934565b5b80610bca57508373ffffffffffffffffffffffffffffffffffffffff16610bb28461047b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610bf382610658565b73ffffffffffffffffffffffffffffffffffffffff1614610c49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c409061227a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610caf9061230c565b60405180910390fd5b610cc58383836001611239565b8273ffffffffffffffffffffffffffffffffffffffff16610ce582610658565b73ffffffffffffffffffffffffffffffffffffffff1614610d3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d329061227a565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ec7838383600161135f565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b610f47828260405180602001604052806000815250611365565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610fb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb090612378565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110aa919061198e565b60405180910390a3505050565b6110c2848484610bd3565b6110ce848484846113c0565b61110d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111049061240a565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161113984611547565b01905060008167ffffffffffffffff81111561115857611157611ca6565b5b6040519080825280601f01601f19166020018201604052801561118a5781602001600182028036833780820191505090505b509050600082602001820190505b6001156111ed578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816111e1576111e061242a565b5b04945060008503611198575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661121a83610ecc565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561135957600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146112cd5780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112c59190612488565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146113585780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461135091906124bc565b925050819055505b5b50505050565b50505050565b61136f838361169a565b61137c60008484846113c0565b6113bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b29061240a565b60405180910390fd5b505050565b60006113e18473ffffffffffffffffffffffffffffffffffffffff166118b7565b1561153a578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261140a610a7d565b8786866040518563ffffffff1660e01b815260040161142c9493929190612545565b6020604051808303816000875af192505050801561146857506040513d601f19601f8201168201806040525081019061146591906125a6565b60015b6114ea573d8060008114611498576040519150601f19603f3d011682016040523d82523d6000602084013e61149d565b606091505b5060008151036114e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d99061240a565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061153f565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106115a5577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161159b5761159a61242a565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106115e2576d04ee2d6d415b85acef810000000083816115d8576115d761242a565b5b0492506020810190505b662386f26fc10000831061161157662386f26fc1000083816116075761160661242a565b5b0492506010810190505b6305f5e100831061163a576305f5e10083816116305761162f61242a565b5b0492506008810190505b612710831061165f5761271083816116555761165461242a565b5b0492506004810190505b6064831061168257606483816116785761167761242a565b5b0492506002810190505b600a8310611691576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611709576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117009061261f565b60405180910390fd5b611712816111f8565b15611752576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117499061268b565b60405180910390fd5b611760600083836001611239565b611769816111f8565b156117a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a09061268b565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46118b360008383600161135f565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611923816118ee565b811461192e57600080fd5b50565b6000813590506119408161191a565b92915050565b60006020828403121561195c5761195b6118e4565b5b600061196a84828501611931565b91505092915050565b60008115159050919050565b61198881611973565b82525050565b60006020820190506119a3600083018461197f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119e35780820151818401526020810190506119c8565b60008484015250505050565b6000601f19601f8301169050919050565b6000611a0b826119a9565b611a1581856119b4565b9350611a258185602086016119c5565b611a2e816119ef565b840191505092915050565b60006020820190508181036000830152611a538184611a00565b905092915050565b6000819050919050565b611a6e81611a5b565b8114611a7957600080fd5b50565b600081359050611a8b81611a65565b92915050565b600060208284031215611aa757611aa66118e4565b5b6000611ab584828501611a7c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ae982611abe565b9050919050565b611af981611ade565b82525050565b6000602082019050611b146000830184611af0565b92915050565b611b2381611ade565b8114611b2e57600080fd5b50565b600081359050611b4081611b1a565b92915050565b60008060408385031215611b5d57611b5c6118e4565b5b6000611b6b85828601611b31565b9250506020611b7c85828601611a7c565b9150509250929050565b600080600060608486031215611b9f57611b9e6118e4565b5b6000611bad86828701611b31565b9350506020611bbe86828701611b31565b9250506040611bcf86828701611a7c565b9150509250925092565b600060208284031215611bef57611bee6118e4565b5b6000611bfd84828501611b31565b91505092915050565b611c0f81611a5b565b82525050565b6000602082019050611c2a6000830184611c06565b92915050565b611c3981611973565b8114611c4457600080fd5b50565b600081359050611c5681611c30565b92915050565b60008060408385031215611c7357611c726118e4565b5b6000611c8185828601611b31565b9250506020611c9285828601611c47565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611cde826119ef565b810181811067ffffffffffffffff82111715611cfd57611cfc611ca6565b5b80604052505050565b6000611d106118da565b9050611d1c8282611cd5565b919050565b600067ffffffffffffffff821115611d3c57611d3b611ca6565b5b611d45826119ef565b9050602081019050919050565b82818337600083830152505050565b6000611d74611d6f84611d21565b611d06565b905082815260208101848484011115611d9057611d8f611ca1565b5b611d9b848285611d52565b509392505050565b600082601f830112611db857611db7611c9c565b5b8135611dc8848260208601611d61565b91505092915050565b60008060008060808587031215611deb57611dea6118e4565b5b6000611df987828801611b31565b9450506020611e0a87828801611b31565b9350506040611e1b87828801611a7c565b925050606085013567ffffffffffffffff811115611e3c57611e3b6118e9565b5b611e4887828801611da3565b91505092959194509250565b60008060408385031215611e6b57611e6a6118e4565b5b6000611e7985828601611b31565b9250506020611e8a85828601611b31565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611edb57607f821691505b602082108103611eee57611eed611e94565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f506021836119b4565b9150611f5b82611ef4565b604082019050919050565b60006020820190508181036000830152611f7f81611f43565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000611fe2603d836119b4565b9150611fed82611f86565b604082019050919050565b6000602082019050818103600083015261201181611fd5565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612074602d836119b4565b915061207f82612018565b604082019050919050565b600060208201905081810360008301526120a381612067565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006120e06018836119b4565b91506120eb826120aa565b602082019050919050565b6000602082019050818103600083015261210f816120d3565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006121726029836119b4565b915061217d82612116565b604082019050919050565b600060208201905081810360008301526121a181612165565b9050919050565b600081905092915050565b60006121be826119a9565b6121c881856121a8565b93506121d88185602086016119c5565b80840191505092915050565b60006121f082856121b3565b91506121fc82846121b3565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006122646025836119b4565b915061226f82612208565b604082019050919050565b6000602082019050818103600083015261229381612257565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006122f66024836119b4565b91506123018261229a565b604082019050919050565b60006020820190508181036000830152612325816122e9565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006123626019836119b4565b915061236d8261232c565b602082019050919050565b6000602082019050818103600083015261239181612355565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006123f46032836119b4565b91506123ff82612398565b604082019050919050565b60006020820190508181036000830152612423816123e7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061249382611a5b565b915061249e83611a5b565b92508282039050818111156124b6576124b5612459565b5b92915050565b60006124c782611a5b565b91506124d283611a5b565b92508282019050808211156124ea576124e9612459565b5b92915050565b600081519050919050565b600082825260208201905092915050565b6000612517826124f0565b61252181856124fb565b93506125318185602086016119c5565b61253a816119ef565b840191505092915050565b600060808201905061255a6000830187611af0565b6125676020830186611af0565b6125746040830185611c06565b8181036060830152612586818461250c565b905095945050505050565b6000815190506125a08161191a565b92915050565b6000602082840312156125bc576125bb6118e4565b5b60006125ca84828501612591565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b60006126096020836119b4565b9150612614826125d3565b602082019050919050565b60006020820190508181036000830152612638816125fc565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612675601c836119b4565b91506126808261263f565b602082019050919050565b600060208201905081810360008301526126a481612668565b905091905056fea26469706673582212205325d86091000626007334cf464370f19a78a918c6cb01f3c4aea925a8e8c90964736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class NFT__factory extends ethers_1.ContractFactory {
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
exports.NFT__factory = NFT__factory;
NFT__factory.bytecode = _bytecode;
NFT__factory.abi = _abi;
