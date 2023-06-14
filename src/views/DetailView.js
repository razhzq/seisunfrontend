import React from 'react';
import vines_left from '../assets/BondingCurve/vines_left.png';
import trees_left from '../assets/BondingCurve/trees_left.png';
import vines_right from '../assets/BondingCurve/vines_right.png';
import trees_right from '../assets/BondingCurve/trees_right.png';
import vines_top from '../assets/BondingCurve/vines_top.png';
import trees_bottom from '../assets/BondingCurve/trees_bottom.png';

const DetailView = () => {
	return (
		<div>
			<div className="bg-white mx-auto relative overflow-hidden h-screen hidden xl:block">
				<div className="container mx-auto flex flex-col xl:flex-row md:h-screen h-[974px]" >
					<div className="flex-1 relative overflow-hidden h-screen">
						<div className='absolute left-[20px] xl:left-[124px]  top-[87px] w-[403px] text-left z-10 text-center'>
							<p className='uppercase font-bold text-black text-[45px] leading-[34px]'>BONDING CURVE</p>
							<p className='w-[80%] ml-[38px] mt-[13px] font-normal font-medium text-[20px] leading-[34px]'>Self-regulating mechanism for autonomous vault rebalancing to ensure price stability. Adjusts token supply in response to changes in protocol demand to accurately reflect token utility.</p>

							<button className="bg-[#1A1A1A] w-[105px] h-[32px] rounded-[15px] leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center font-bold items-center">LEARN MORE</button>
						</div>

						<div className="left-[20px] top-0 absolute w-[620px] hidden xl:block">
							<img src={vines_left}></img>
						</div>

						<div className="left-[-254px] top-[133px] absolute w-[737px] visible xl:hidden">
							<img src={vines_right}></img>
						</div>
					</div>

					<div className="flex-1 relative overflow-hidden h-screen">
						<div className='absolute right-0 xl:right-[107px] top-0 xl:top-[95px] w-[383px] z-10 text-center'>
							<p className='uppercase font-bold text-black text-[45px] leading-[34px]'>PRICING NETWORK</p>
							<p className='w-[365px] ml-[15px] mt-[19px] font-normal font-medium text-[20px] leading-[34px]'>Node operators creating consensus for on-chain pricing data for use by the community.</p>

							<button className="bg-[#1A1A1A] w-[105px] h-[32px] rounded-[15px] leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center mt-[19px] font-bold items-center">LEARN MORE</button>

						</div>

						<div className="right-[-188px] top-0 absolute w-[1009px] hidden xl:block">
							<img src={vines_right}></img>
						</div>
					</div>
				</div>
			
				<div className="left-[0px] bottom-0 absolute w-[832px] hidden xl:block">
					<img src={trees_left}></img>
				</div>
				
				<div className="right-[-250px] xl:right-[-4px] bottom-0 absolute w-[770px]">
					<img src={trees_right}></img>
				</div>
			</div>

			<div className='block xl:hidden bg-white flex justify-center'>
				<div className="overflow-hidden h-[700px]">
					<div className='mt-[137px] w-[403px] text-left z-10 text-center relative'>
						<p className='uppercase font-bold text-black text-[45px] leading-[34px] text-left'>BONDING CURVE</p>
						<p className='w-[80%] ml-[38px] mt-[13px] font-normal font-medium text-[20px] leading-[34px] text-left ml-[20px]'>Self-regulating mechanism for autonomous vault rebalancing to ensure price stability. Adjusts token supply in response to changes in protocol demand to accurately reflect token utility.</p>

						<button className="bg-[#1A1A1A] w-[105px] h-[32px] rounded-[15px] leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center font-bold items-center">LEARN MORE</button>

						<div className="right-[-270px] top-[-80px] absolute w-[741px]">
							<img src={vines_top}></img>
						</div>
					</div>
				</div>
			</div>

			<div className='block xl:hidden bg-white flex justify-center'>
				<div className="overflow-hidden">
					<div className='mt-[137px] w-[403px] text-left z-10 text-center relative h-[560px]'>
						<p className='uppercase font-bold text-black text-[45px] leading-[34px] text-left'>PRICING NETWORK</p>
						<p className='w-[365px] ml-[15px] mt-[19px] font-normal font-medium text-[20px] leading-[34px] text-left ml-[20px]'>Node operators creating consensus for on-chain pricing data for use by the community.</p>

						<button className="bg-[#1A1A1A] w-[105px] h-[32px] rounded-[15px] leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center mt-[39px] ml-[60px] font-bold items-center">LEARN MORE</button>
					
						
						<div className="right-[-100px] bottom-[0px] absolute w-[543px]">
							<img src={trees_bottom}></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailView;