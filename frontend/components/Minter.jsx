import { useEffect, useState } from 'react';
import Image from "next/image"
import Head from "next/head"

import Web3Modal from 'web3modal';
import Web3 from 'web3';

import illustrationImage from "../static/assets/nftminter.webp";
import loadingImage from "../static/assets/loading.gif";
import abi from "../utils/abi.json";

export default function MintNFT() {
    const [transactionHash, setTransactionHash] = useState('');
    const [networkID, setNetworkID] = useState('');
    const [minting, setMinting] = useState(false);

    const handleMint = async () => {
        try {
            if (typeof window !== 'undefined') {
                const web3Modal = new Web3Modal();

                async function connectToMetaMask() {
                    const provider = await web3Modal.connect();
                    const web3 = new Web3(provider);
                    return { provider, web3 };
                }

                async function mintNFT() {
                    const { web3 } = await connectToMetaMask();
                    const contractAddress = '0x1085417b7C1C223e7106d37398b20762d0B0ad7a'; // contract address mintend on Base L2 network (with )
                    const contract = new web3.eth.Contract(abi, contractAddress);
                    const account = (await web3.eth.getAccounts())[0];
                    const tokenURI = 'https://gateway.pinata.cloud/ipfs/QmTGjiinkKxWfP5Ca8N9VHEcZf6Z1kRBhL57v79B37tRTz'; // metadata of the NFT uploaded iin IPFS with Pinata (https://www.pinata.cloud/)

                    setMinting(true);

                    // handle mint the NFT with the function already setup in the smart contract
                    await contract.methods.mint(tokenURI).send({ from: account }).on('receipt', function (receipt) {
                        console.log(receipt, 'receipt');

                        setTransactionHash(receipt.transactionHash);
                        setMinting(false);
                    });
                }
                mintNFT()
            }
        } catch (error) {
            console.error(error, 'error');
        }
    };

    const handleFetch = async () => {
        const web3Modal = new Web3Modal();
        const provider = await web3Modal.connect()
        const web3 = new Web3(provider)
        const networkId = await web3.eth.net.getId()

        setNetworkID(networkId);
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <>
            <Head>
                <title>NFT Minter (Base Goerli)</title>
            </Head>

            <section>
                <header>
                    <h1>NFT Minter</h1>

                    <a href="https://github.com/stratusagency/nft-minter" target="_blank" rel="noopener noreferrer">
                        <p>Discover how to mint an NFT on Base Goerli network, while minting our NFT for free.</p>
                    </a>
                </header>

                <p>Network ID: {networkID === 84531 ? `${networkID} (Base Goerli)` : networkID}</p>

                <form onSubmit={(e) => { e.preventDefault(); handleMint(); }}>
                    <button type="submit">
                        {minting ?
                            <Image
                                src={loadingImage}
                                alt="loading"
                                width={24}
                                height={24}
                            />
                            : "Mint NFT"}
                    </button>
                </form>

                {transactionHash && (
                    <>
                        <h2>Minted successfully!</h2>
                        <a href={`https://goerli.basescan.org/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">Visit the tx</a>
                    </>
                )}

                <Image
                    src={illustrationImage}
                    alt="illustration"
                />
            </section>

            <footer>
                <a href="https://stratusagency.io/" target="_blank" rel="noopener noreferrer">Copyright © 2023 STRATUS. All rights reserved.</a>
            </footer>
        </>
    );
}
