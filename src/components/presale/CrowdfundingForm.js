// src/components/CrowdfundingForm.js
import React, { useState, useEffect } from 'react';
import { initWeb3, depositFunds } from './CrowdfundingContract';
import '../presale/Presale.css'

const CrowdfundingForm = () => {
    const [amount, setAmount] = useState('');
    const [account, setAccount] = useState('');

    useEffect(() => {
        const init = async () => {
            const success = await initWeb3();
            if (success) {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                setAccount(accounts[0]);
            }
        };
        init();
    }, []);

    const handleDeposit = async (e) => {
        e.preventDefault();
        if (amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
        if (account === '') {
            alert('Please connect your Ethereum wallet.');
            return;
        }
        await depositFunds(amount, account);
        setAmount('');
    };

    return (
        <div>
            <form onSubmit={handleDeposit}>
                <div className='ButtonDashboard2'>
                    <span data-flow="top">
                        <input
                            className='InputContribute'
                            type="number"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <button disabled={false}>Contribute</button>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default CrowdfundingForm;
