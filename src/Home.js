import React from 'react';
import TradeView from './views/TradeView';
import AssetsView from './views/AssetsView';
import DetailView from './views/DetailView';
import BenefitView from './views/BenefitView';
import FooterView from './views/FooterView';

const Home = () => {
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