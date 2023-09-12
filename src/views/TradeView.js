import React from 'react';
import LogoView from './LogoView';

const TradeView = () => {
  return (
		<div className='tradeview bg-black h-screen md:h-fit'>
			<div className="bg-[url('./assets/main_bg.svg')] bg-cover bg-center h-screen flex justify-center items-center relative ">
				<div className="flex justify-center !flex-col items-center">
					<p className="border-[#AEAEAE] border-opacity-80 rounded-[10px] text-white font-bold text-[55px] leading-[55px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] uppercase">THE aped ecosystem</p>

					<a href="https://discord.com/invite/FbFjCz4PAR" className="border bg-[#0E0716] border-[#AEAEAE] border-opacity-80 rounded-[10px] text-white w-[184px] p-[12px] font-bold leading-[34px] uppercase mt-[88px] 2md:mt-[35px]">JOIN DISCORD</a>
				</div>

				<div className="absolute bottom-[0px] left-0 h-[80px] right-0 trasparent">
					<LogoView></LogoView>
				</div>
			</div>

		</div>
	)
}

export default TradeView;