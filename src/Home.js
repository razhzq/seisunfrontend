import React from 'react';
import TradeView from './views/TradeView';
import AssetsView from './views/AssetsView';
import DetailView from './views/DetailView';
import BenefitView from './views/BenefitView';
import ContactView from './views/ContactView';

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
							<ContactView className='h-screen'></ContactView>
						</section>
						
        </div>
    )
}

export default Home;