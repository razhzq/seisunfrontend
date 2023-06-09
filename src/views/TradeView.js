import React from 'react';
import LogoView from './LogoView';

const TradeView = () => {
  return (
		<div className='relative tradeview'>
			<div className="bg-[url('./assets/main_bg.png')] bg-cover bg-center h-[822px] flex justify-center items-center ">
				<div className="flex justify-center flex-col items-center gap-[30px]">
					<p className="border-[#AEAEAE] border-opacity-80 rounded-[10px] text-white  font-bold text-[55px] leading-[55px] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] uppercase">Trade perpetual futures</p>
					<button className="bg-[#0E0716] border-[#AEAEAE] border-opacity-80 rounded-[10px] text-white w-[184px] h-[56px]  font-bold leading-[34px] uppercase">JOIN DISCORD</button>
				</div>
			</div>

			<div className="absolute md:relative bottom-0 left-0 right-0 from-[#0E0716] from-[44.7%] to-black bg-gradient-to-b">
				<LogoView></LogoView>
			</div>
		</div>
	)
}

export default TradeView;