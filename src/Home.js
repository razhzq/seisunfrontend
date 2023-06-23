import React, { useEffect, useState } from 'react';
import TradeView from './views/TradeView';
import AssetsView from './views/AssetsView';
import DetailView from './views/DetailView';
import BenefitView from './views/BenefitView';
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
					<BenefitView></BenefitView>
				</section>
			</div>			
    )
}

export default Home;