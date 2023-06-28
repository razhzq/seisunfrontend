import React, { useState, useEffect} from 'react';
import Pattern from '../assets/pattern.png';
import Chart from '../components/ChartItem';
import ReactCardFlip from "react-card-flip";
import btc from '../assets/crypto/btc.webp';
import sol from '../assets/crypto/sol.png';
import busd from '../assets/crypto/busd.png';
import eth from '../assets/crypto/eth.webp';

import EUR from '../assets/forex/EU.svg';
import GBP from '../assets/forex/GB.svg';
import CNH from '../assets/forex/CN.svg';
import AUD from '../assets/forex/AU.svg';
const AssetsItem = (props) => {
	const [ isFlip, setIsFlip ] = useState(false);
	const chg = props.dailyChange;
	
	const valueRange = Math.max(...chg) - Math.min(...chg);
	const normalizedValues = chg.map(value => (value - Math.min(...chg)) / valueRange);
	const factor = 100;
	const graphData = normalizedValues.map(value => { return {'btc': value * factor}});

	let len = chg.length;
	let percent = len >= 2 ? (parseFloat(chg[len-1] - chg[len-2]) * 100 / Math.abs(parseFloat(chg[len-1]))).toFixed(4) : 0;
	// let percent = len > 0 ? parseFloat(chg[len-1]).toFixed(4) : 0;

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
									graphData.length > 5 && <Chart data={graphData} className="w-full h-full"></Chart>
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
											{
												percent >=0 ? 
												<>
													<div className="w-0 h-0 border-[5px] border-b-[#00FF00] border-l-transparent border-r-transparent border-t-transparent mt-[-2.5px] ml-[15px]"></div>
													<p className="text-[#00FF29] uppercase text-[18px] font-[400] leading-[34px]">{percent}%</p>
												</>
												:
												<>
													<div className="w-0 h-0 border-[5px] border-t-[#FF0000] border-l-transparent border-r-transparent border-b-transparent mb-[-9px] ml-[15px]"></div>
													<p className="text-[red] uppercase text-[18px] font-[400] leading-[34px]">{percent}%</p>
												</>
											}
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

					<div className="flex flex-row justify-between relative text-white" onClick={() => setIsFlip(!isFlip)}>

						{
							props.name == "crypto" ? 
								<div>
									<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PAIR</p>
									<div className='flex items-center mb-1'>
										<img src={btc} className='w-[20px] h-[20px]'></img>
										<p className="leading-[34px] text-[14px] ml-[10px]">BTC/DAI</p>
									</div>
									<div className='flex items-center mb-1'>
										<img src={sol} className='w-[20px] h-[20px]'></img>
										<p className="leading-[34px] text-[14px] ml-[10px]">SOL/DAI</p>
									</div>
									<div className='flex items-center mb-1'>
										<img src={eth} className='w-[20px] h-[20px]'></img>
										<p className="leading-[34px] text-[14px] ml-[10px]">ETH/DAI</p>
									</div>
									<div className='flex items-center mb-1'>
										<img src={busd} className='w-[20px] h-[20px]'></img>
										<p className="leading-[34px] text-[14px] ml-[10px]">BNB/DAI</p>
									</div>
								</div>
							:	props.name == "forex" ? 
								<div>
									<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PAIR</p>
									<div className='flex items-center mb-1'>
										<img src={EUR} className='w-[20px] h-[20px]'></img>
										<p className="leading-[34px] text-[14px] ml-[10px]">EUR/USD</p>
									</div>
									<div className='flex items-center mb-1'>
										<img src={AUD} className='w-[20px] h-[20px]'></img>
										<p className="leading-[34px] text-[14px] ml-[10px]">AUD/USD</p>
									</div>
									<div className='flex items-center mb-1'>
										<img src={GBP} className='w-[20px] h-[20px]'></img>
										<p className="leading-[34px] text-[14px] ml-[10px]">GBP/USD</p>
									</div>
									<div className='flex items-center mb-1'>
										<img src={CNH} className='w-[20px] h-[20px]'></img>
										<p className="leading-[34px] text-[14px] ml-[10px]">CNH/USD</p>
									</div>
								</div> :
								(
								<div className='w-full h-[199px]'>
									<div className='flex justify-between flex-row '>
										<div className='w-[52.89px]'>
											<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PAIR</p>
										</div>
										<div className='w-[52.89px]'>
											<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PRICE</p>
										</div>
										<div className='w-[52.89px]'>
											<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">CHG</p>
										</div>
									</div>
									<div>
										<p className='uppercase text-[14px]'>Coming Soon...</p>
									</div>
								</div>
							)
						}
						
						{/* <div>
							<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PRICE</p>
						</div>
						<div>
							<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">CHG</p>
						</div> */}
							{
								props.name == "crypto" && (
									<div>
										<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PRICE</p>
										<p className="leading-[34px] text-[14px] mb-1">{props.data[0] != undefined ? parseFloat(props.data[0]["BTC/USD"]).toFixed(2) : '0'}</p>
										<p className="leading-[34px] text-[14px] mb-1">{props.data[8] != undefined ? parseFloat(props.data[8]["SOL/USD"]).toFixed(2) : '0'}</p>
										<p className="leading-[34px] text-[14px] mb-1">{props.data[1] != undefined ? parseFloat(props.data[1]["ETH/USD"]).toFixed(2) : '0'}</p>
										<p className="leading-[34px] text-[14px] mb-1">{props.data[11] != undefined ? parseFloat(props.data[11]["DOT/USD"]).toFixed(2) : '0'}</p>
									</div>
								)
							}

							{
								props.name == "forex" && (
									<div>
										<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">PRICE</p>
										<p className="leading-[34px] text-[14px] mb-1">{props.data[0] != undefined ? parseFloat(props.data[0]["EUR/USD"]).toFixed(4).toString() : '0'}</p>
										<p className="leading-[34px] text-[14px] mb-1">{props.data[1] != undefined ? parseFloat(props.data[1]["AUD/USD"]).toFixed(4).toString() : '0'}</p>
										<p className="leading-[34px] text-[14px] mb-1">{props.data[2] != undefined ? parseFloat(props.data[2]["GBP/USD"]).toFixed(4).toString() : '0'}</p>
										<p className="leading-[34px] text-[14px] mb-1">{props.data[3] != undefined ? parseFloat(props.data[3]["CNH/USD"]).toFixed(4).toString() : '0'}</p>
									</div>
								)
							}
							
							{
								props.name == "crypto" && (
									<div>
										<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">CHG</p>
										<p className="leading-[34px] text-[14px] mb-1" style={props.data[0] != undefined &&  parseFloat(props.data[0]["changes_24hrs"]) >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{props.data[0] != undefined && parseFloat(props.data[0]["changes_24hrs"]) >=0 ? '+': ''}{props.data[0] != undefined ? parseFloat(props.data[0]["changes_24hrs"]).toFixed(2) : 0}%</p>
										<p className="leading-[34px] text-[14px] mb-1" style={props.data[8] != undefined &&  parseFloat(props.data[8]["changes_24hrs"]) >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{props.data[8] != undefined && parseFloat(props.data[8]["changes_24hrs"]) >=0 ? '+': ''}{props.data[8] != undefined ? parseFloat(props.data[8]["changes_24hrs"]).toFixed(2) : 0}%</p>
										<p className="leading-[34px] text-[14px] mb-1" style={props.data[1] != undefined &&  parseFloat(props.data[1]["changes_24hrs"]) >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{props.data[1] != undefined && parseFloat(props.data[1]["changes_24hrs"]) >=0 ? '+': ''}{props.data[1] != undefined ? parseFloat(props.data[1]["changes_24hrs"].toFixed(2)) : 0}%</p>
										<p className="leading-[34px] text-[14px] mb-1" style={props.data[11] != undefined &&  parseFloat(props.data[11]["changes_24hrs"]) >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{props.data[11] != undefined && parseFloat(props.data[11]["changes_24hrs"]) >=0 ? '+': ''}{props.data[11] != undefined ? parseFloat(props.data[11]["changes_24hrs"].toFixed(2)) : 0}%</p>
									</div>
								)
							}

							{
								props.name == "forex" && (
									<div>
										<p className="uppercase leading-[34px] font-bold text-[14px] mb-4">CHG</p>
										<p className="leading-[34px] text-[14px] mb-1" style={props.data[0] != undefined &&  parseFloat(props.data[0]["changes_24hrs"]) >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{props.data[0] != undefined && parseFloat(props.data[0]["changes_24hrs"]) >=0 ? '+': ''}{props.data[0] != undefined ? parseFloat(props.data[0]["changes_24hrs"]).toFixed(4) : 0}%</p>
										<p className="leading-[34px] text-[14px] mb-1" style={props.data[1] != undefined &&  parseFloat(props.data[1]["changes_24hrs"]) >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{props.data[1] != undefined && parseFloat(props.data[1]["changes_24hrs"]) >=0 ? '+': ''}{props.data[1] != undefined ? parseFloat(props.data[1]["changes_24hrs"]).toFixed(4) : 0}%</p>
										<p className="leading-[34px] text-[14px] mb-1" style={props.data[2] != undefined &&  parseFloat(props.data[2]["changes_24hrs"]) >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{props.data[2] != undefined && parseFloat(props.data[2]["changes_24hrs"]) >=0 ? '+': ''}{props.data[2] != undefined ? parseFloat(props.data[2]["changes_24hrs"].toFixed(4)) : 0}%</p>
										<p className="leading-[34px] text-[14px] mb-1" style={props.data[3] != undefined &&  parseFloat(props.data[3]["changes_24hrs"]) >= 0 ? {color: '#00FF29'}: {color: '#FF0000'}}>{props.data[3] != undefined && parseFloat(props.data[3]["changes_24hrs"]) >=0 ? '+': ''}{props.data[3] != undefined ? parseFloat(props.data[3]["changes_24hrs"].toFixed(4)) : 0}%</p>
									</div>
								)
							}
						
					</div>
				</ReactCardFlip>
			</div>
			
		</div>
	)
}

export default AssetsItem;