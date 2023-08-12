import React from 'react';

const BenefitItem = ({data}) => {
	return (
		<div className="w-full max-w-[342px] p-[20px] !pl-0 flex flex-row rounded-[6px] border border-[5px] border-black">
			<div className="flex items-center">
				<div className='flex items-center w-[86px] mx-auto justify-center'>
					<img src={data.url} className="max-w-fit"/>
				</div>
			</div>

			<div className='ml-[10px]'>
				<p className="text-left font-bold text-[24px] leading-[34px] uppercase capitalize">{data.title}</p>
				
				<p className="text-left w-full font-[300] text-[14px] leading-[14px] mt-[2px]">{data.text}</p>
			</div>
		</div>
	)
}

export default BenefitItem;