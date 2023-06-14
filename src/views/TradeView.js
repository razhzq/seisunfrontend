import React from 'react';
import LogoView from './LogoView';

const TradeView = () => {
  return (
		<div className='relative tradeview bg-black h-screen md:h-fit'>
			<div className="bg-[url('./assets/main_bg.png')] bg-cover bg-center h-screen flex justify-center items-center ">
				<div className="flex justify-center flex-col items-center gap-[30px]">
					<p className="border-[#AEAEAE] border-opacity-80 rounded-[10px] text-white  font-bold text-[55px] leading-[55px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] uppercase">THE aped ecosystem</p>

					<a href="https://discord.com/invite/FbFjCz4PAR" className="border bg-[#0E0716] border-[#AEAEAE] border-opacity-80 rounded-[10px] text-white w-[184px] p-[12px] font-bold leading-[34px] uppercase">JOIN DISCORD</a>
				</div>
			</div>

			<div className="absolute md:relative bottom-0 left-0 right-0 from-[#0E0716] from-[44.7%] to-black md:bg-gradient-to-b trasparent">
				<LogoView></LogoView>
			</div>
		</div>
	)
}

export default TradeView;