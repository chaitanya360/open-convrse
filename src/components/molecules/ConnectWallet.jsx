import React, { useEffect, useState } from "react";
import { ConnectWalletStyle } from "./molecules.style";

function ConnectWallet({ setShowPanel, show }) {
  const [blurBackground, setBlurBackground] = useState(false);
  useEffect(() => {
    if (show) setBlurBackground(true);
    else
      setTimeout(() => {
        setBlurBackground(false);
      }, 400);
  }, [show]);
  return (
    blurBackground && (
      <ConnectWalletStyle onClick={() => setShowPanel(false)}>
        <div
          className="panel"
          onClick={(e) => e.stopPropagation()}
          style={{ width: show ? "350px" : 0, height: show ? "160px" : 0 }}
        >
          <div className="title">
            Install the wallet plugin to get connected
          </div>
          <a
            className="card"
            href="https://metamask.io/download.html"
            target="_blank"
          >
            <div>
              <img src={`${process.env.PUBLIC_URL}/metamask.png`} />
            </div>
            <div>MetaMask</div>
          </a>
        </div>
      </ConnectWalletStyle>
    )
  );
}

export default ConnectWallet;
