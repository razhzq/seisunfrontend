import React from 'react';

const BenefitItem = ({data}) => {
	return (
		<div className="w-full max-w-[342px] p-[20px] !pl-0 flex flex-row rounded-[6px] border border-white border-opacity-40">
			<div className="flex items-center">
				<div className='flex items-center w-[86px] mx-auto justify-center'>
					<img src={data.url} className="max-w-fit"/>
				</div>
			</div>

			<div className='ml-[10px]'>
				<p className="text-left font-bold text-[24px] leading-[34px] uppercase text-white">{data.title}</p>
				
				<p className="text-left w-full font-light text-[14px] leading-[14px] uppercase text-white">{data.text}</p>
			</div>
		</div>
	)
}

export default BenefitItem;