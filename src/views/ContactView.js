import React from 'react';
import transaped from '../assets/socials/transaped.png';
import medium from '../assets/socials/medium-seeklogo.png';
import discord from '../assets/socials/discord-icon.png';
import twitter from '../assets/socials/twitter-logo.png';

const ContactView = () => {
	return (
		<div className="bg-[url('./assets/main_bg.png')] bg-cover bg-center h-[822px] flex flex-col justify-center items-center">
			<div>
				<div><img src={transaped} className='mx-auto'></img></div>
				<div className='flex flex-row gap-[20px] items-center'>
					<img src={medium}></img>
					<img src={discord}></img>
					<img src={twitter}></img>
				</div>
			</div>
			<div className="flex flex-row justify-between w-[208px]">
				<p className="font-extrabold text-white text-sm uppercase">DOCS</p>
				<p className="font-extrabold text-white text-sm uppercase">contact us</p>
			</div>
		</div>
	)
}

export default ContactView;