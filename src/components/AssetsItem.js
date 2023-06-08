import React, { useState } from 'react';
import chart from '../assets/chart.png';
import chart1 from '../assets/chart1.png';

const AssetsItem = ({name, CHG, VOL, }) => {
	const [ isFlip, setIsFlip ] = useState(false);
  return (
		<div className='flip-card !m-auto !w-[342px] h-[219px] bg-white border border-white rounded-[6px] !bg-[#141217] p-[10px] relative border '>
			<div className={`flip-card-inner ${isFlip ? 'card-rotate': ''}`} onClick={() => setIsFlip(!isFlip)}>
				<div className="flip-card-front">
					<div className="flex justify-between font-black text-white text-[34px] leading-[34px] !mr-0">
						<img src={chart} className='inline-block'></img>
						<p className='flex items-center uppercase'>{name}</p>
					</div>
					<div className='!w-full h-[157px] absolute bottom-0 left-0 right-0 !mr-0'>
						<img src={chart1} className="w-full"></img>

						<div className='absolute bottom-[8px] flex justify-between left-0 right-0'>
							<div>
								<p className="text-white text-opacity-80 text-left ml-[15px] ">CHG: +13%</p>
								<p className="text-white text-opacity-80 ml-[15px] ">VOL: $2,321,2323</p>
							</div>

							<div className="flex items-center">
								<p className="text-white mr-[15px] ">PAIRS...</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flip-card-back flex flex-row justify-between">
          <div>
						<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PAIR</p>
						<p className="leading-[34px] text-[14px] mb-1">BTC/DAI</p>
						<p className="leading-[34px] text-[14px] mb-1">SOL/DAI</p>
						<p className="leading-[34px] text-[14px] mb-1">ETH/DAI</p>
						<p className="leading-[34px] text-[14px] mb-1">BNB/DAI</p>
					</div>
					<div>
						<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PRICE</p>
						<p className="leading-[34px] text-[14px] mb-1">123.12</p>
						<p className="leading-[34px] text-[14px] mb-1">123.12</p>
						<p className="leading-[34px] text-[14px] mb-1">123.12</p>
						<p className="leading-[34px] text-[14px] mb-1">123.12</p>
					</div>
					<div>
						<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">CHG</p>
						<p className="leading-[34px] text-[14px] mb-1">3.2</p>
						<p className="leading-[34px] text-[14px] mb-1">3.2</p>
						<p className="leading-[34px] text-[14px] mb-1">3.2</p>
						<p className="leading-[34px] text-[14px] mb-1">3.2</p>
					</div>
        </div>
			</div>
			
		</div>
	)
}

export default AssetsItem;