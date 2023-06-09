import React from 'react';
import BenefitItem from '../components/BenefitItem';
import synth from '../assets/icons/synth.png';
import cross from '../assets/icons/cross.png';
import arrow from '../assets/icons/pink-arrow.png';
import dollar from '../assets/icons/dollar.png';

const benefitData = [
	{url: synth, title: 'Synthetic', text: 'Trade without directly owning assets. simulated through smart contracts.'},
	{url: cross, title: 'HIGH LEVERAGE', text: 'Crypto up to 150x, Forex up to 1000x, Stocks and Commodities up to 100x'},
	{url: arrow, title: 'LOW FEES', text: 'Low trading and gas fees on Layer 2'},
	{url: arrow, title: 'NO SIGNUP', text: 'Trade directly from your wallet'},
	{url: dollar, title: 'DAI, USDC & USDT', text: 'Trade and  paid in stablecoin of your choice. Initially accepting USDC, USDT & DAI.'},
	{url: dollar, title: 'PROOF OF RESERVE', text: 'onchain vault provides full transparency and guaranteed liquidity.'}
]

const BenefitView = () => {
	return (
		<div className='container py-[170px] lg:py-[270px] mx-auto'>
			<div>
				<p className='text-white font-bold text-[40px] leading-[40px] uppercase tracking-wider'>Why APED</p>
			</div>

      <div className="visible lg:invisible border border-white w-[327px] border-opacity-50 mx-auto mt-[33px]"></div>

			<div className="mt-[33px] gap-x-[110px] gap-y-[33px] justify-center bg-black bg-opacity-15 flex flex-wrap">
				{
					benefitData.map((item, ind) => 
						<BenefitItem data={item} key={ind}></BenefitItem>
					)
				}
			</div>

      <div className="visible lg:invisible border border-white w-[327px] border-opacity-50 mx-auto mt-[33px]"></div>

		</div>
	)
}

export default BenefitView;