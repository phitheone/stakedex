import React, { useState, useEffect } from 'react';
import '../presale/Presale.css'
import CrowdfundingForm from './CrowdfundingForm';
import CrowdfundingInfo from './CrowdfundingInfo';
// import Monitor from '../Monitor/index';

export function getCurrentUTCTime() {
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

export const currentTime = getCurrentUTCTime();
console.log(currentTime);

const Presale = ({ walletAddress, setWalletAddress }) => {

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const currentTime = getCurrentUTCTime();
        setCurrentTime(currentTime);
    }, []);

    return (
        <div>

            <div className='PresaleMonitor'>
                {/* Aquí se incluye la pantalla de conexión a Metamask */}
                <div className='PresaleBox'>

                    <div className='PresaleTitle'>
                        <h3>BOHM Presale</h3>
                        <p>Purchase tokens at launch price</p>
                    </div>

                    <div className='PresaleTime'>
                        <h3>Presale Time</h3>
                        <p>Start: Sat, 5 Aug 2023, 13:00:00 UTC</p>
                        <p>End: Sun, 6 Aug 2023, 13:00:00 UTC</p>
                    </div>

                    <div className='PresaleCurrentStatus'>

                        <div className='Current'>
                            <h3>Current Time</h3>
                            <p>{currentTime}</p>
                        </div>

                        <div className='Status'>
                            <h3>Presale Status</h3>
                            <p>Ended</p>
                        </div>

                    </div>



                    <div className='PresaleContributionBOHM'>

                        <div className='Contribution'>
                            <h3>PRESALE ENDED</h3>
                        </div>



                    </div>

                    {/* Aquí se incluyen los componentes del crowdfunding */}
                    <div className='CrowdfundingContainer'>
                        <CrowdfundingForm/>
                        <CrowdfundingInfo/>
                    </div>

                    <div className='ButtonDashboard'>
                        <span data-tooltip="Coming soon" data-flow="top"><button>Claim</button></span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Presale