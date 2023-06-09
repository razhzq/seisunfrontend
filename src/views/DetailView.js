import React from 'react';
import vines_left from '../assets/BondingCurve/vines_left.png';
import trees_left from '../assets/BondingCurve/trees_left.png';
import vines_right from '../assets/BondingCurve/vines_right.png';
import trees_right from '../assets/BondingCurve/trees_right.png';

const DetailView = () => {
	return (
		<div className="bg-white mx-auto">
			<div className="container mx-auto flex flex-col lg:flex-row h-[1391px] md:h-[974px]" >
				<div className="flex-1 relative overflow-hidden">
					<div className='absolute left-[20px] lg:left-[124px]  top-[87px] w-[403px] text-left z-10'>
						<p className='uppercase font-bold text-black text-[45px] leading-[34px]'>BONDING CURVE</p>
						<p className='w-[365px] ml-[38px] mt-[13px] font-normal font-medium text-[20px] leading-[34px]'>Self-regulating mechanism for autonomous vault rebalancing to ensure price stability. Adjusts token supply in response to changes in protocol demand to accurately reflect token utility.</p>
						<button className="bg-[#1A1A1A] w-[105px] h-[32px] rounded-[15px] font-medium leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center mt-[10px] font-bold">LEARN MORE</button>
					</div>

					<div className="left-[0px] bottom-0 absolute w-[832px] hidden md:block">
						<img src={trees_left}></img>
					</div>

					<div className="left-[20px] top-0 absolute w-[620px] hidden md:block">
						<img src={vines_left}></img>
					</div>

					<div className="left-[-144px] top-[33px] absolute w-[737px] visible md:hidden">
					<img src={vines_right}></img>
					</div>
				</div>

				<div className="flex-1 relative overflow-hidden">
					<div className='absolute right-[107px] top-[95px] w-[383px] text-left z-10'>
						<p className='uppercase font-bold text-black text-[45px] leading-[34px]'>PRICING NETWORK</p>
						<p className='w-[365px] text-left ml-[15px] mt-[19px] font-normal font-medium text-[20px] leading-[34px]'>Node operators creating consensus for on-chain pricing data for use by the community.</p>

						<button className="bg-[#1A1A1A] w-[105px] h-[32px] rounded-[15px] font-medium leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center mt-[19px] font-bold">LEARN MORE</button>

					</div>
					<div className="right-[-4px] bottom-0 absolute w-[770px]">
						<img src={trees_right}></img>
					</div>

					<div className="right-[-188px] top-0 absolute w-[1009px] hidden md:block">
						<img src={vines_right}></img>
					</div>
				</div>
			</div>
		
			
		</div>
	)
}

export default DetailView;