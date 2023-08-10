// src/components/CrowdfundingContract.js
import Web3 from 'web3';
import CrowdfundingContractABI from './CrowdfundingContractABI';

const CONTRACT_ADDRESS = '0x37DAf30346215Bf5BCE5119799A9f9e4B6bC2656'; // Reemplaza con la dirección del contrato desplegado

let web3;
let crowdfundingContract;

export const initWeb3 = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      crowdfundingContract = new web3.eth.Contract(CrowdfundingContractABI, CONTRACT_ADDRESS);
      return true;
    } catch (error) {
      console.error('User denied account access');
      return false;
    }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    crowdfundingContract = new web3.eth.Contract(CrowdfundingContractABI, CONTRACT_ADDRESS);
    return true;
  } else {
    console.error('No Ethereum browser extension detected. You should consider trying MetaMask.');
    return false;
  }
};

export const depositFunds = async (amount, account) => {
  try {
    const weiAmount = web3.utils.toWei(amount.toString(), 'ether');
    await crowdfundingContract.methods.deposit().send({ from: account, value: weiAmount });
  } catch (error) {
    console.error('Error depositing funds:', error);
  }
};

export const getGoal = async () => {
  try {
    const goal = await crowdfundingContract.methods.getGoal().call();
    return web3.utils.fromWei(goal, 'ether');
  } catch (error) {
    console.error('Error getting crowdfunding goal:', error);
    return 'N/A';
  }
};

export const getRaisedAmount = async () => {
    try {
      const raisedAmount = await crowdfundingContract.methods.totalFunding().call();
      return web3.utils.fromWei(raisedAmount, 'ether');
    } catch (error) {
      console.error('Error getting raised amount:', error);
      return 'N/A';
    }
  };
