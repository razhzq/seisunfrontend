import React, { useEffect, useState } from 'react';
import TradeView from './views/TradeView';
import AssetsView from './views/AssetsView';
import DetailView from './views/DetailView';
import BenefitView from './views/BenefitView';
import BotView from './views/BotView';
import { isMobile } from 'react-device-detect';


const Home = () => {
		useEffect(() => {
			if(isMobile) {
				const mybody = document.body;
				mybody.style.overflowY = 'hidden';
				setTimeout(() => {
					mybody.style.overflowY = '';
				}, 1500);
			}
		})

    return (
			<div>
				<section className="overlay">
					<TradeView></TradeView>
				</section>
				<section className="overlay">
					<AssetsView></AssetsView>
				</section>
				<section className="overlay">
					<DetailView></DetailView>
				</section>
				<section className="overlay">
					<BotView></BotView>
					<div className="bg-[url('./assets/benefit/bg.svg')] bg-cover relative">
						<BenefitView></BenefitView>
					</div>
				</section>
			</div>			
    )
}

export default Home;