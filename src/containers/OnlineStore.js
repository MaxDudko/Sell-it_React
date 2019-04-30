import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const OnlineStore = (props) => (
    <div>
        <Header isLogin={props} />
        <ProductList />
        <Footer />
    </div>
)

export default OnlineStore;