import React, { useState, useEffect} from 'react';
import Pattern from '../assets/pattern.png';
import Chart from '../components/ChartItem';
import ReactCardFlip from "react-card-flip";

import BTC from '../assets/crypto/btc.webp';
import SOL from '../assets/crypto/sol.png';
import BUSD from '../assets/crypto/busd.png';
import ETH from '../assets/crypto/eth.webp';

import EUR from '../assets/forex/EU.svg';
import GBP from '../assets/forex/GB.svg';
import CNH from '../assets/forex/CN.svg';
import AUD from '../assets/forex/AU.svg';
const AssetsItem = (props) => {
	const [ isFlip, setIsFlip ] = useState(false);
	const data = props.data;

	let graph = props.dailyChange.slice(-7);
	let len = props.dailyChange.length;
	let percent = len == 0 ? 0: props.dailyChange[len-1];
	const titles = [];
	for (const entry of data) {
		const key = Object.keys(entry)[0];
		titles.push(key);
	}
	
	const valueRange = Math.max(...graph) - Math.min(...graph);
	const normalizedValues = graph.map(value => (value - Math.min(...graph)) / valueRange);
	const factor = 100;
	const graphData = normalizedValues.map(value => { return {'btc': value * factor}});	

	let dec = props.name == 'forex' ? 4: 2;

	return (
		<div className='!mx-[5px] !m-auto !w-[310px] min-[390px]:!w-[342px] !h-[219px] border-white rounded-[6px] !bg-[#141217] min-[390px]:p-[10px] p-[7px] relative border '>

			<div className='w-full absolute bottom-[0px] left-0 right-0'>
				<img src={Pattern}></img>
			</div>
					
			<div>
				<ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
					<div onClick={() => setIsFlip(!isFlip)} className='relative !h-[199px]'>
						<div className="flex justify-between font-black text-white text-[34px] leading-[34px] !mr-0">
							<div className="w-[154px] h-[68px] mt-[30px]">
								{
									graphData.length > 7 && <Chart data={graphData} className="w-full h-full"></Chart>
								}
							</div>
							<p className='flex items-center uppercase font-[900] text-[34px] leading-[34px] uppercase'>{props.name}</p>
						</div>
						<div className='!w-full h-[157px] absolute bottom-0 left-0 right-0 !mr-0'>

							<div className='absolute bottom-[8px] flex justify-between left-0 right-0'>
								<div>
									<div className="flex ml-[5px]">
										<div>
											<p className="text-white text-opacity-50 text-[10px] leading-[34px] text-left font-[400] uppercase">CHG:</p>
										</div>
										
										<div className="flex items-center">
											<div className={`${percent >= 0 ? 'border-b-[#00FF00] border-l-transparent border-r-transparent border-t-transparent mt-[-2.5px]': 'border-t-[#FF0000] border-l-transparent border-r-transparent border-b-transparent mb-[-9px]'} w-0 h-0 border-[5px] ml-[15px]`}></div>
											<p className={`${percent >= 0 ? 'text-[#00FF29]' : 'text-[#FF0000]'} uppercase text-[18px] font-[400] leading-[34px]`}>{percent.toFixed(2)}%</p>
										</div>
									</div>

									<div className="flex ml-[5px]">
										<div>
											{/* <p className="text-white text-opacity-50 text-[10px] leading-[34px] text-left font-[400] uppercase">VOL:</p> */}
										</div>

										{/* <p className="text-white uppercase text-[15px] font-[400] leading-[34px] ml-[15px]">$2,123,132</p> */}
									</div>
								</div>

								<div className="flex items-center">
									<p className="text-white mr-[15px] leading-[34px] text-[14px]">PAIRS...</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative text-white h-[199px]" onClick={() => setIsFlip(!isFlip)}>
						{data.length > 0 ?
							<div>
							{
								props.name == 'stocks' || props.name == 'defi' ?
								(
									<div>
										<div className='flex'>
											<div className='w-[80px]'>
												<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PAIR</p>
											</div>

											<div className='w-[200px]'>
												<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PRICE</p>
											</div>

											<div className='w-[80px]'>
												<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">CHG</p>
											</div>
										</div>

										<p className='uppercase text-[14px]'>Coming soon...</p>
									</div>
								) :
								(
									<div className='flex'>

										<div className='w-[80px]'>
											<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PAIR</p>
											<div className='flex items-center mb-1'>
												{
													props.name == 'crypto' ? 
														<img src={BTC} className='w-[20px] h-[20px]'></img>
													: props.name == 'forex' ?
														<img src={EUR} className='w-[20px] h-[20px] rounded-[50%]'></img>
													: ''
												}
												<p className="leading-[34px] text-[14px] ml-[10px]">{titles[0]}</p>
											</div>
											<div className='flex items-center mb-1'>
												{
													props.name == 'crypto' ? 
														<img src={SOL} className='w-[20px] h-[20px]'></img>
													: props.name == 'forex' ?
														<img src={AUD} className='w-[20px] h-[20px] rounded-[50%]'></img>
													: ''
												}
												<p className="leading-[34px] text-[14px] ml-[10px]">{titles[1]}</p>
											</div>
											<div className='flex items-center mb-1'>
												{
													props.name == 'crypto' ? 
														<img src={ETH} className='w-[20px] h-[20px]'></img>
													: props.name == 'forex' ?
														<img src={GBP} className='w-[20px] h-[20px] rounded-[50%]'></img>
													: ''
												}
												<p className="leading-[34px] text-[14px] ml-[10px]">{titles[2]}</p>
											</div>
											<div className='flex items-center mb-1'>
												{
													props.name == 'crypto' ? 
														<img src={BUSD} className='w-[20px] h-[20px]'></img>
													: props.name == 'forex' ?
														<img src={CNH} className='w-[20px] h-[20px] rounded-[50%]'></img>
													: ''
												}
												<p className="leading-[34px] text-[14px] ml-[10px]">{titles[3]}</p>
											</div>
										</div>

										<div className='w-[200px]'>
											<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PRICE</p>
											<p className="leading-[34px] text-[14px] mb-1">{data[0][titles[0]].toFixed(dec)}</p>
											<p className="leading-[34px] text-[14px] mb-1">{data[1][titles[1]].toFixed(dec)}</p>
											<p className="leading-[34px] text-[14px] mb-1">{data[2][titles[2]].toFixed(dec)}</p>
											<p className="leading-[34px] text-[14px] mb-1">{data[3][titles[3]].toFixed(dec)}</p>
										</div>

										<div className='w-[80px]'>
											<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">CHG</p>
											<p className="leading-[34px] text-[14px] mb-1" style={data[0]['changes_24hrs'] >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{data[0]['changes_24hrs'] > 0 ? '+': ''}{data[0]['changes_24hrs'].toFixed(dec)}%</p>
											<p className="leading-[34px] text-[14px] mb-1" style={data[1]['changes_24hrs'] >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{data[1]['changes_24hrs'] > 0 ? '+': ''}{data[1]['changes_24hrs'].toFixed(dec)}%</p>
											<p className="leading-[34px] text-[14px] mb-1" style={data[2]['changes_24hrs'] >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{data[2]['changes_24hrs'] > 0 ? '+': ''}{data[2]['changes_24hrs'].toFixed(dec)}%</p>
											<p className="leading-[34px] text-[14px] mb-1" style={data[3]['changes_24hrs'] >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{data[3]['changes_24hrs'] > 0 ? '+': ''}{data[3]['changes_24hrs'].toFixed(dec)}%</p>
										</div>
									
									</div>
								)
							}
							</div>
							
							: 

							<div className='flex items-center justify-center h-full'>
								Loading...
							</div>
						}
					</div>
				</ReactCardFlip>
			</div>
			
		</div>
	)
}

export default AssetsItem;