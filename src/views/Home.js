import React from 'react';
import TradeView from './TradeView';
import AssetsView from './AssetsView';
import DetailView from './DetailView';
import BenefitView from './BenefitView';
import ContactView from './ContactView';

const Home = () => {
    return (
        <div>
            <TradeView></TradeView>
            <AssetsView ></AssetsView>
            <DetailView></DetailView>
            <BenefitView></BenefitView>
            <ContactView></ContactView>
        </div>
    )
}

export default Home;