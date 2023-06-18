import React from 'react';
import transaped from './assets/socials/transaped.png';
import medium from './assets/socials/medium-seeklogo.png';
import discord from './assets/socials/discord-icon.png';
import twitter from './assets/socials/twitter-logo.png';

const Footer = () => {
	return (
		<div className="bg-[url('./assets/footer_mobile.png')] md:bg-[url('./assets/footer.png')] bg-cover bg-center h-[822px] flex flex-col justify-center items-center h-screen relative">

			<div className='bg-[#000000] bg-opacity-[0.35] top-0 left-0 right-0 bottom-0 absolute'>

			</div>
			<div className='z-[50]'>
				<div><img src={transaped} className='mx-auto' alt=''></img></div>
				<div className='flex flex-row items-center mt-[25px]'>
					<a href="#"><img src={medium} alt=''></img></a>
					<a href="https://discord.com/invite/FbFjCz4PAR" className='ml-[20px]'><img src={discord} alt=''></img></a>
					<a href="#"><img src={twitter} alt='' className='ml-[23px]'></img></a>
				</div>

				<div className="flex flex-row justify-between w-[208px] mt-[6px]">
					<a href="/docs" className="text-white text-[18px] leading-[22px] font-[800] uppercase flex-none order-none grow-0">DOCS</a>
					<a href="/contacts" className="text-white text-[18px] leading-[22px] font-[800] uppercase flex-none order-none grow-0">contact us</a>
				</div>
				
			</div>
		</div>
	)
}

export default Footer;