import { useEffect, useState } from "react";

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
 
  useEffect(async () => { //TODO: implement
    
  }, []);

  const connectWalletPressed = async () => { //TODO: implement
   
  };

  const onMintPressed = async () => { //TODO: implement
    
  };

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>METAMASK</span>
        )}
      </button>

      <br></br>
      <h1 id="title">Antidote World Mint</h1>
      <p>
        a web3 project
      </p>
      <form>
        <h2>Asset Location: </h2>
        <input
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          onChange={(event) => setURL(event.target.value)}
        />
        <h2> Name: </h2>
        <input
          type="text"
          placeholder="What's it called"
          onChange={(event) => setName(event.target.value)}
        />
        <h2> Description: </h2>
        <input
          type="text"
          placeholder="Why is it unique"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p>
    </div>
  );
};

export default Minter;
