import React from 'react';
import transaped from '../assets/socials/transaped.png';
import medium from '../assets/socials/medium-seeklogo.png';
import discord from '../assets/socials/discord-icon.png';
import twitter from '../assets/socials/twitter-logo.png';

const ContactView = () => {
	return (
		<div className="bg-[url('./assets/main_bg.png')] bg-cover bg-center h-[822px] flex flex-col justify-center items-center h-screen">
			<div>
				<div><img src={transaped} className='mx-auto' alt=''></img></div>
				<div className='flex flex-row gap-[20px] items-center mt-[29px]'>
					<a href="#"><img src={medium} alt=''></img></a>
					<a href="https://discord.com/invite/FbFjCz4PAR"><img src={discord} alt=''></img></a>
					<a href="#"><img src={twitter} alt=''></img></a>
				</div>
			</div>
			<div className="flex flex-row justify-between w-[208px] mt-[6px]">
				<p className="text-white text-[18px] leading-[22px] font-[800] uppercase flex-none order-none grow-0">DOCS</p>
				<p className="text-white text-[18px] leading-[22px] font-[800] uppercase flex-none order-none grow-0">contact us</p>
			</div>
		</div>
	)
}

export default ContactView;