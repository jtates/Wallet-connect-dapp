import { useState } from "react";
import { ethers } from "ethers";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } else {
      alert("Please install Metamask");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">₮ᴴᴱ ₵ᵁᴿˢᴱ | Wallet Connect dApp</h1>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 px-4 py-2 rounded-lg mt-4"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App;
