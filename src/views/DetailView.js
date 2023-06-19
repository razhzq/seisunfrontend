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
						<div className='absolute left-[20px] xl:left-[124px]  top-[60px] w-[403px] text-left z-10 text-center'>
							<p className='uppercase font-bold text-black text-[45px] leading-[34px] ml-[30px]'>BONDING CURVE</p>
							<p className='w-[365px] ml-[38px] mt-[40px] font-normal font-medium text-[20px] leading-[34px] h-[187px]'>Self-regulating mechanism for autonomous vault rebalancing to ensure price stability. Adjusts token supply in response to changes in protocol demand to accurately reflect token utility.</p>

							<button className="bg-[#1A1A1A] w-[105px] rounded-[15px] leading-[34px] text-[12px] text-center uppercase text-white ml-[160px] flex justify-center font-bold items-center mt-[4px]">LEARN MORE</button>
						</div>

						<div className="left-[30px] top-0 absolute w-[620px] hidden xl:block">
							<img src={vines_left} alt=''></img>
						</div>

						<div className="left-[-254px] top-[133px] absolute w-[737px] visible xl:hidden">
							<img src={vines_right} alt=''></img>
						</div>
					</div>

					<div className="flex-1 relative overflow-hidden h-screen">
						<div className='absolute right-0 xl:right-[127px] top-0 xl:top-[57px] w-[383px] z-10 text-center'>
							<p className='uppercase font-bold text-black text-[45px] leading-[34px]'>PRICING NETWORK</p>
							<p className='w-[365px] h-[120px] mt-[41px] font-normal font-medium text-[20px] leading-[34px] h-[120px]'>Node operators creating consensus for on-chain pricing data for use by the community.</p>

							<button className="bg-[#1A1A1A] w-[105px] rounded-[15px] leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center mt-[32px] font-bold items-center">LEARN MORE</button>

						</div>

						<div className="right-[-78px] top-0 absolute w-[797px] h-[630px] hidden xl:block">
							<img src={vines_right} alt=''></img>
						</div>
					</div>
				</div>
			
				<div className="left-[0px] bottom-0 absolute w-[832px] hidden xl:block">
					<img src={trees_left} alt=''></img>
				</div>
				
				<div className="right-[-250px] xl:right-[-4px] bottom-0 absolute w-[770px]">
					<img src={trees_right} alt=''></img>
				</div>
			</div>

			<div className='block xl:hidden bg-white flex justify-center relative overflow-hidden'>
				<div className="overflow-hidden h-[700px] w-[428px]">
					<div className='mt-[137px] w-[365px] text-left text-center ml-[30px]'>
						<p className='uppercase font-bold text-black text-[45px] leading-[34px] text-left'>BONDING CURVE</p>
						<p className='w-full h-[187px] mt-[13px] font-[400] text-[20px] leading-[34px] text-left'>Self-regulating mechanism for autonomous vault rebalancing to ensure price stability. Adjusts token supply in response to changes in protocol demand to accurately reflect token utility.</p>

						<button className="bg-[#1A1A1A] w-[167px] h-[51px] rounded-[15px] leading-[34px] text-[18px] text-center uppercase text-white ml-[79px] flex justify-center font-bold items-center mt-[36px]">LEARN MORE</button>
					</div>

					<div className="w-[428px] absolute top-[140px]">
						<img src={vines_top} alt=''></img>
					</div>
				</div>
				
				
			</div>

			<div className='block xl:hidden bg-white flex justify-center  overflow-hidden'>
				<div className="overflow-hidden h-[700px] relative">
					<div className='mt-[137px] w-[403px] text-left z-10 text-center  h-[560px] ml-[30px]'>
						<p className='uppercase font-bold text-black text-[45px] leading-[34px] text-left'>PRICING NETWORK</p>
						<p className='w-[365px] h-[120px] mt-[19px] font-normal font-medium text-[20px] leading-[34px] text-left'>Node operators creating consensus for on-chain pricing data for use by the community.</p>

						<button className="bg-[#1A1A1A] w-[167px] h-[51px] rounded-[15px] leading-[34px] text-[18px] text-center uppercase text-white ml-[79px] flex justify-center font-bold items-center mt-[50px]">LEARN MORE</button>						
					</div>

					<div className="right-[-156px] bottom-[0px] absolute w-[543px] h-[440px]">
						<img src={trees_bottom} alt=''></img>
					</div>
				</div>

				
			</div>
		</div>
	)
}

export default DetailView;