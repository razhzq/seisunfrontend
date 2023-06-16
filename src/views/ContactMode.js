import React, { useState } from 'react';

const ContactMode = () => {

	const [ mode, setMode ] = useState(0);
	const [ handFlag, setHandFlag ] = useState(true);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ checkSize, setCheckSize ] = useState('');
	const [ twitter, setTwitter ] = useState('');
	const [ discord, setDiscord ] = useState('');
	const [ question, setQuestion ] = useState('');
	const [ role, setRole ] = useState('');
	const [ github, setGitHub ] = useState('');

	return (
		<div className='container mx-auto py-[100px] md:py-[138px] px-[20px]'>
			{mode == 0 &&
				<p className='font-bold text-[40px] leading-[48px] uppercase text-white mb-[166px] hidden md:block'>Contact Us</p>
			}

			{mode != 0 &&
				<p className='font-bold text-[40px] leading-[48px] uppercase text-white mb-[40px]'>Contact Us</p>
			}

			{
				mode == 0 ? (
					<div>
						<div className='flex flex-col md:flex-row  gap-y-[66px]'>
							<input type="button" value="Investor" className='w-[335px] mx-auto py-[74px] py-[132px] px-[103px] bg-[#3E3A59] text-white rounded text-[32px] font-bold leading-[39px] rounded-[20px] cursor-pointer' onClick={() => setMode(1)}></input>
							<input type="button" value="Contributor" className='w-[335px] mx-auto py-[74px] md:py-[132px] px-[103px] bg-[#3E3A59] text-white rounded text-[32px] font-bold leading-[39px] rounded-[20px] cursor-pointer' onClick={() => setMode(2)}></input>
						</div>
					</div>
				) : mode ==1 ? 
				(
					<div className='text-white bg-[#3E3A59] max-w-[669px] px-[10px] md:px-[35px]  py-[50px] rounded-[20px] mx-auto mt-[54px]'>
						<div className='flex w-full'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Name/Company</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' value={ name }onChange={(e) => setName(e.target.value)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Email Address</p>
							<input type="email" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Hands on or Hands off?</p>

							<label for="Toggle3" className="flex-1 inline-flex justify-between py-[3px] px-[7px] bg-black rounded-[10px]">
								<input id="Toggle3" type="checkbox" className="hidden peer" />
								<span className={`text-[14px] leading-[17px] text-white font-bold p-[9px] rounded-[10px] ${handFlag ? 'bg-[#5600C3]': '' }`} onClick={() => setHandFlag(true)}>Hands On</span>
								<span className={`text-[14px] leading-[17px] text-white font-bold p-[9px] rounded-[10px] ${!handFlag ? 'bg-[#5600C3]': '' }`} onClick={() => setHandFlag(false)}>Hands Off</span>
							</label>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>What is your average check size?</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' required value={checkSize} onChange={(e) => setCheckSize(e.target.checkSize)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Twitter</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' optional value={twitter} onChange={(e) => setTwitter(e.target.value)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Discord</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' optional value={discord} onChange={(e) => setDiscord(e.target.value)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Do you have any questions for us?</p>
							<textarea type="text" className='h-[160px] font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' required value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
						</div>
					</div>
				) : (
					<div className='text-white bg-[#3E3A59] max-w-[669px] px-[10px] md:px-[35px] py-[50px] rounded-[20px] mx-auto mt-[54px]'>

						<div className='flex w-full'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Name/Company</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' value={name} onChange={(e) => setName(e.target.value)} required></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Email Address</p>
							<input type="email" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Desired role</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' value={role} onChange={(e) => setRole(e.target.value)} required></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Github</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' optional value={github} onChange={(e) => setGitHub(e.target.value)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Twitter</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' optional value={twitter} onChange={(e) => setTwitter(e.target.value)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Discord</p>
							<input type="text" className='font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' optional value={discord} onChange={(e) => setDiscord(e.target.value)}></input>
						</div>

						<div className='flex w-full mt-[25px]'>
							<p className='text-left text-[16px] leading-[31px] font-bold flex-1'>Do you have any questions for us?</p>
							<textarea type="text" className='h-[160px] font-bold text-[16px] flex-1 leading-[31px] py-[7px] rounded-[10px] text-white bg-black pl-[10px] border-0' required value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
						</div>
					</div>
				)
			}
			
		</div>
		
	)
}

export default ContactMode;