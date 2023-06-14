import React, { useState } from 'react';
import chart from '../assets/chart.png';
import chart1 from '../assets/chart1.png';

const AssetsItem = ({name, CHG, VOL, }) => {
	const [ isFlip, setIsFlip ] = useState(false);
  return (
		<div className='!mx-[5px] !m-auto !w-[342px] !h-[219px] border-white rounded-[6px] !bg-[#141217] p-[10px] relative border '>
			<div className={`flip-card-inner ${isFlip ? 'card-rotate': ''}`} onClick={() => setIsFlip(!isFlip)}>
				<div className="flip-card-front">
					<div className="flex justify-between font-black text-white text-[34px] leading-[34px] !mr-0">
						<img src={chart} className='inline-block'></img>
						<p className='flex items-center uppercase font-[900] text-[34px] leading-[34px] uppercase'>{name}</p>
					</div>
					<div className='!w-full h-[157px] absolute bottom-0 left-0 right-0 !mr-0'>
						<img src={chart1} className="w-full"></img>

						<div className='absolute bottom-[8px] flex justify-between left-0 right-0'>
							<div>
								<div className="flex ml-[5px]">
									<div>
										<p className="text-white text-opacity-50 text-[10px] leading-[34px] text-left font-[400] uppercase">CHG:</p>
									</div>
									
									<div className="flex items-center">
										<div className="w-0 h-0 border-[5px] border-t-[#FF0000] border-l-transparent border-r-transparent border-b-transparent mt-[5px] ml-[15px]"></div>
										<p className="text-[red] uppercase text-[18px] font-[400] leading-[34px]">13%</p>
									</div>
								</div>

								<div className="flex ml-[5px]">
									<div>
										<div>
											<p className="text-white text-opacity-50 text-[10px] leading-[34px] text-left font-[400] uppercase">VOL:</p>
										</div>
									</div>

									<p className="text-white uppercase text-[15px] font-[400] leading-[34px] ml-[15px]">$2,123,132</p>
								</div>
							</div>

							<div className="flex items-center">
								<p className="text-white mr-[15px] leading-[34px] text-[14px]">PAIRS...</p>
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
						<p className="leading-[34px] text-[14px] mb-1 text-[#FF0000]">3.2</p>
						<p className="leading-[34px] text-[14px] mb-1 text-[#00FF29]">3.2</p>
						<p className="leading-[34px] text-[14px] mb-1 text-[#00FF29]">3.2</p>
						<p className="leading-[34px] text-[14px] mb-1 text-[#FF0000]">3.2</p>
					</div>
        </div>
			</div>
			
		</div>
	)
}

export default AssetsItem;