/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TPWallet, TPWalletInterface } from "../../contracts/TPWallet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "Wallet",
        type: "address",
      },
    ],
    name: "LogWithdrawTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewBalance",
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
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6108fe8061010d6000396000f3fe60806040526004361061007b5760003560e01c8063853828b61161004e578063853828b6146101145780638da5cb5b1461012b578063d0e30db014610156578063f2fde38b146101605761007b565b8063205c2878146100805780632e1a7d4d146100a95780633ff1e05b146100d2578063715018a6146100fd575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a291906105eb565b610189565b005b3480156100b557600080fd5b506100d060048036038101906100cb9190610627565b61026c565b005b3480156100de57600080fd5b506100e7610317565b6040516100f491906107cf565b60405180910390f35b34801561010957600080fd5b50610112610321565b005b34801561012057600080fd5b50610129610335565b005b34801561013757600080fd5b50610140610390565b60405161014d9190610754565b60405180910390f35b61015e6103b9565b005b34801561016c57600080fd5b50610187600480360381019061018291906105c2565b6103ca565b005b61019161044e565b6001548111156101d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101cd906107af565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561021c573d6000803e3d6000fd5b507f99c28807ef4e48deb8628f5939f43c42e5e2aa5575fde2d411d09b91bf9a253a8260405161024c9190610754565b60405180910390a18060015461026291906107fb565b6001819055505050565b61027461044e565b6001548111156102b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b0906107af565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102ff573d6000803e3d6000fd5b508060015461030e91906107fb565b60018190555050565b6000600154905090565b61032961044e565b61033360006104cc565b565b61033d61044e565b3373ffffffffffffffffffffffffffffffffffffffff166108fc6001549081150290604051600060405180830381858888f19350505050158015610385573d6000803e3d6000fd5b506000600181905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6103c161044e565b34600181905550565b6103d261044e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610442576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104399061076f565b60405180910390fd5b61044b816104cc565b50565b610456610590565b73ffffffffffffffffffffffffffffffffffffffff16610474610390565b73ffffffffffffffffffffffffffffffffffffffff16146104ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c19061078f565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b6000813590506105a78161089a565b92915050565b6000813590506105bc816108b1565b92915050565b6000602082840312156105d457600080fd5b60006105e284828501610598565b91505092915050565b600080604083850312156105fe57600080fd5b600061060c85828601610598565b925050602061061d858286016105ad565b9150509250929050565b60006020828403121561063957600080fd5b6000610647848285016105ad565b91505092915050565b6106598161082f565b82525050565b600061066c6026836107ea565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006106d26020836107ea565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006107126012836107ea565b91507f73616c646f20696e737566696369656e746500000000000000000000000000006000830152602082019050919050565b61074e81610861565b82525050565b60006020820190506107696000830184610650565b92915050565b600060208201905081810360008301526107888161065f565b9050919050565b600060208201905081810360008301526107a8816106c5565b9050919050565b600060208201905081810360008301526107c881610705565b9050919050565b60006020820190506107e46000830184610745565b92915050565b600082825260208201905092915050565b600061080682610861565b915061081183610861565b9250828210156108245761082361086b565b5b828203905092915050565b600061083a82610841565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6108a38161082f565b81146108ae57600080fd5b50565b6108ba81610861565b81146108c557600080fd5b5056fea2646970667358221220c86a25139d0461ff7649bb3ac814e9111b381bff1344c729a886258e3643037064736f6c63430008000033";

type TPWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TPWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TPWallet__factory extends ContractFactory {
  constructor(...args: TPWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TPWallet> {
    return super.deploy(overrides || {}) as Promise<TPWallet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TPWallet {
    return super.attach(address) as TPWallet;
  }
  override connect(signer: Signer): TPWallet__factory {
    return super.connect(signer) as TPWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TPWalletInterface {
    return new utils.Interface(_abi) as TPWalletInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TPWallet {
    return new Contract(address, _abi, signerOrProvider) as TPWallet;
  }
}