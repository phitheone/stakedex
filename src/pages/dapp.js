import React, { useState, useEffect } from "react";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { IconContext } from "react-icons";

import logo from "../images/logo_b.png";
import logobase from "../images/logo_base_b.png";
import logo2 from "../images/logo2.png";

import { BsGraphUpArrow } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BiData } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { currentTime } from "../components/presale/index"
import  CrowdfundingForm  from "../components/presale/CrowdfundingForm"
import  CrowdfundingInfo  from "../components/presale/CrowdfundingInfo"


const Dapp = () => {

  const [currentTime, setCurrentTime] = useState('');

  function getCurrentUTCTime() {
    const date = new Date();
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'UTC',
      timeZoneName: 'short',
    };
    const formattedTime = date.toLocaleString('en-US', options);
    return formattedTime;
  }



  useEffect(() => {
    const currentTime = getCurrentUTCTime();
    setCurrentTime(currentTime);
  }, []);

  //const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        //setIsMetamaskConnected(true);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };


  // Default token list from Uniswap
  // const UNISWAP_TOKEN_LIST = "https://gateway.ipfs.io/ipns/tokens.uniswap.org";

  // Use the native token of the connected chain as the default input token
  const NATIVE = "NATIVE"; // Special address for native token

  // WBTC as the default output token
  // const WBTC = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";

  const [selection, setSelection] = useState("trade");
  const [stake, setStake] = useState(true);
  const [farm, setFarm] = useState(true);

  return (
    <div className="DMain">
      <div className="DNavbar">
        <div className="DNLeft">
          <img src={logo} alt="logo" />
          <div className="DNMenu">
            <div className="DNavBtn" onClick={() => setSelection("trade")}>
              <p>Trade</p>
              <BiBarChart />
            </div>
            <div className="DNavBtn" onClick={() => setSelection("liquidity")}>
              <p>Liquidity</p>
              <BiData />
            </div>
            <div className="DNavBtn" onClick={() => setSelection("stake")}>
              <p>Stake</p>
              <BiDollarCircle />
            </div>
            <div className="DNavBtn" onClick={() => setSelection("farm")}>
              <p>Farm</p>
              <BsChevronDoubleUp />
            </div>
            <div className="DNavBtn" onClick={() => setSelection("burn")}>
              <p>Burn</p>
              <AiOutlineFire />
            </div>
            <div className="DNavBtn" onClick={() => setSelection("presale")}>
              <p>presale</p>
              <BsGraphUpArrow />
            </div>
          </div>
        </div>
        <div className="DNRight">
          <div className="Btn">
            <img src={logobase} alt="logo BASE" />
            <p>BaseChain</p>
          </div>
          <div className="Btn">
            <img src={logo2} alt="logo coin" />
            <p>$0.00</p>
          </div>

          <button className="connect-button" onClick={connectMetamask}>
            Connect to a Wallet
          </button>
        </div>
      </div>
      <div className="DMainContainer">
        <AnimatePresence mode="wait" initial={false}>
          {selection === "trade" && (
            <motion.div
              key="defkey"
              initial={{ x: -300, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", mass: 1, duration: 0.5 }}
              className="DContainer"
            >
              <div id="dexscreener-embed">
                <iframe
                  src="https://dexscreener.com/base/0x23b3a6A84034Bb1ed6efd57EFd4d7844949a2e82?embed=1&theme=dark&trades=0&info=0"
                  width={"600px"}
                  height={"400px"}
                />
              </div>
              <div className="Uniswap">
                <SwapWidget
                  // tokenList={UNISWAP_TOKEN_LIST}
                  defaultInputTokenAddress={NATIVE}
                  defaultInputAmount={2}
                //defaultOutputTokenAddress={}
                />
              </div>
            </motion.div>
          )}
          {selection === "liquidity" && (
            <motion.div
              key="liqkey"
              initial={{ x: -300, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", mass: 1, duration: 0.5 }}
              className="DContainerLI"
            >
              <div className="LITopBox">
                <h2>Liquidity Provider Rewards</h2>
                <p>
                  Liquidity providers earn a 0.20% fee on all trades
                  proportional to their share of the pool. Fees are added to the
                  pool, accrue in real time and can be claimed by withdrawing
                  your liquidity
                </p>
              </div>
              <div className="LIBottomBox">
                <h2>My Liquidity Positions</h2>
                <button
                  className="connect-button CBalt"
                  onClick={connectMetamask}
                >
                  Connect to a Wallet
                </button>
              </div>
            </motion.div>
          )}
          {selection === "stake" && (
            <motion.div
              key="stakey"
              initial={{ x: -300, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", mass: 1, duration: 0.5 }}
              className="DContainerST"
            >
              <div className="LITopBox SBoxMod">
                <h2>StakeDex Staking</h2>
                <p>Stake STX and Earn ETH</p>
              </div>
              <div className="StakeBtnContainer">
                <div
                  className={stake ? "SBtn " : "SBtn SBFalse"}
                  onClick={() => setStake(true)}
                >
                  <h2>STAKE</h2>
                </div>
                <div
                  className={stake ? "SBtn SBFalse" : "SBtn"}
                  onClick={() => setStake(false)}
                >
                  <h2>UNSTAKE</h2>
                </div>
              </div>
              <div className="StakeTextContainer">
                <h2>Staking: 0 STX</h2>
                <h2>Reward: 0 ETH</h2>
                <h2>Balance: 0 STX</h2>
                <div className="STextBottomContainer">
                  <div className="STextBottomContainerLeft">
                    <BsArrowUpRight />
                    <p>STX</p>
                    <div className="connect-button SbtnText">
                      <p>Wallet</p>
                    </div>
                  </div>
                  <div className="STextBottomContainerRight">
                    <p>Max 0</p>
                  </div>
                </div>
              </div>
              <input
                className="SInput"
                type="text"
                value=""
                placeholder="0.0"
              />
              <div className="LIBottomBox SBoxMod">
                <button
                  className="connect-button CBalt2"
                  onClick={connectMetamask}
                >
                  Connect to a Wallet
                </button>
              </div>
            </motion.div>
          )}
          {selection === "farm" && (
            <motion.div
              key="farkey"
              initial={{ x: -300, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", mass: 1, duration: 0.5 }}
              className="DContainerFA"
            >
              <div className="FALeftBox">
                <h2>Farms</h2>
                <p>Stake liquidity pool tokens to earn rewards in StakeDex.</p>
                <a
                  href="https://stakedex.gitbook.io/stakedexbase/welcome/introduction"
                  target="_blank"
                  className="FLink"
                >
                  <p>See how it works.</p>
                </a>
                <br />
                <p>Total Value Locked</p>
                <h2>$0.00</h2>
                <br />
                <p>Farms TVL</p>
                <h2>$0.00</h2>
                <br />
                <p>My Holdings</p>
                <h2>$0.00</h2>
              </div>
              <div className="FARightBox">
                <div className="FRBUp">
                  <div className="FASwitchContainer">
                    <div
                      className={farm ? "FBtn" : "FBtn FBFalse"}
                      onClick={() => setFarm(true)}
                    >
                      <p>All farms</p>
                    </div>
                    <div
                      className={farm ? "FBtn FBFalse" : "FBtn"}
                      onClick={() => setFarm(false)}
                    >
                      <p>Inactive farms</p>
                    </div>
                  </div>
                  <div className="SearchBar">
                    <input
                      className="SFInput"
                      type="text"
                      placeholder="Search by name, symbol or adress"
                    />
                    <IconContext.Provider
                      value={{ color: "gray", size: "25px" }}
                    >
                      <div className="SearchIcon">
                        <AiOutlineSearch />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="FRBDown">
                  <p>Liquidity</p>
                  <p>TVL</p>
                  <p>Allocation</p>
                  <p> </p>
                  <p>APR</p>
                </div>
              </div>
            </motion.div>
          )}
          {selection === "burn" && (
            <motion.div
              key="burkey"
              initial={{ x: -300, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", mass: 1, duration: 0.5 }}
              className="DContainerST"
            >
              <div className="LITopBox SBoxMod">
                <h2>StakeDex Burn</h2>
                <p>Burn STX and Earn a Reward</p>
              </div>
              <div className="StakeTextContainer BUTextMod">
                <h2>Total Burn : 0.0 STX</h2>
                <h2>
                  Burn Address : <span>0x0000...dEaD</span>
                </h2>
                <h2>Burnable : STX</h2>
                <h2>Reward : 1 %</h2>
                <h2>Estimate Reward : STX</h2>
              </div>
              <div className="LIBottomBox SBoxMod">
                <button className="connect-button CBalt3">Burn</button>
              </div>
            </motion.div>
          )}
          {selection === "presale" && (
            <motion.div
              key="burkey"
              initial={{ x: -300, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", mass: 1, duration: 0.5 }}
              className="DContainerST"
            >
              <div className='PresaleMonitor'>
                {/* Aquí se incluye la pantalla de conexión a Metamask */}
                <div className='PresaleBox'>

                  <div className='PresaleTitle'>
                    <h3>Presale</h3>
                    <p>Purchase tokens at launch price</p>
                  </div>

                  
                  {/* <div className='PresaleCurrentStatus'>

                    <div className='Current'>
                      <h3>Current Time</h3>
                      <p>{currentTime}</p>
                    </div>
                    <div className='Status'>
                      <h3>Presale Status</h3>
                      <p>Ended</p>
                    </div>
                  </div> */}
                  {/* Aquí se incluyen los componentes del crowdfunding */}
                  <div className='CrowdfundingContainer'>
                    <CrowdfundingForm />
                    <CrowdfundingInfo />
                  </div>
                  <div className='ButtonDashboard'>
                    <span data-tooltip="Coming soon" data-flow="top"><button>Claim</button></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dapp;
