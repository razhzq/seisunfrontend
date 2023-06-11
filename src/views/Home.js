import React from 'react';
import TradeView from './TradeView';
import AssetsView from './AssetsView';
import DetailView from './DetailView';
import BenefitView from './BenefitView';
import ContactView from './ContactView';

const Home = () => {
    return (
        <div>
						<section>
							<TradeView></TradeView>
						</section>
						<section>
            	<AssetsView ></AssetsView>
						</section>
						<section>
							<DetailView></DetailView>
						</section>
						<section>
            	<BenefitView></BenefitView>
            </section>
						<section>
            	<ContactView></ContactView>
						</section>
        </div>
    )
}

export default Home;