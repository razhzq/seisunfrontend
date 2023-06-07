import React from 'react';
import chart from '../assets/chart.png';

const AssetsItem = ({name, CHG, VOL, }) => {
  return (
		<div className='w-[342px !important] h-[219px] bg-white border-1 border-white rounded-[6px] bg-[#141217] p-[10px]'>
			<div className="flex justify-between font-['Barlow'] font-black text-white text-[34px] leading-[34px]">
				<img src={chart}></img>
				<p className='mt-[24px]'>crypto</p>
			</div>
		</div>
	)
}

export default AssetsItem;