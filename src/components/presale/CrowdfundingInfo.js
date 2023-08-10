// src/components/CrowdfundingInfo.js
import React, { useState, useEffect } from 'react';
import { initWeb3, getGoal, getRaisedAmount } from './CrowdfundingContract';
import '../presale/Presale.css'

const CrowdfundingInfo = () => {
    const [goal, setGoal] = useState('');
    const [raisedAmount, setRaisedAmount] = useState('');
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            const success = await initWeb3(); // Initialize web3 and contract first
            if (success) {
                const goalData = await getGoal();
                const raisedAmountData = await getRaisedAmount();
                setGoal(goalData);
                setRaisedAmount(raisedAmountData);
                setLoading(false); // Set loading to false once data is retrieved
            }
        };
        fetchData();
    }, []);

    // Show loading message while data is being fetched
    if (loading) {
        return <p>Loading...</p>;
    }

    // Calculate progress percentage
    const progress = ((raisedAmount) / 2) * 100;

    return (
        <div>
            <div className='Raised'>
                <h3>ETH Raised</h3>
                <p>{raisedAmount} / {goal} ETH</p>
            </div>
            <div className="ProgressBar">
                <div className='Progress' style={{ width: `${progress/goal}%` }}></div>
            </div>
        </div>
    );
};

export default CrowdfundingInfo;
