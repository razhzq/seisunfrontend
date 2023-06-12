import React from 'react';
import TradeView from './TradeView';
import AssetsView from './AssetsView';
import DetailView from './DetailView';
import BenefitView from './BenefitView';
import ContactView from './ContactView';

const Home = () => {
    return (
        <div>
						<section className="overlay">
							<TradeView></TradeView>
						</section>
						<section className="overlay">
            	<AssetsView ></AssetsView>
						</section>
						<section className="overlay">
							<DetailView></DetailView>
							<BenefitView></BenefitView>
							<ContactView></ContactView>
						</section>
						
        </div>
    )
}

export default Home;