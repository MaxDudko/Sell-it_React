import React, { Component } from 'react';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';

class ProductListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true,
        }
    }
    
    handleClick = () => {
        this.setState({
          isLogin: !this.state.isLogin
        });
    }
    
    render() {
        return (
            <div>
              <Header isLogin={this.state.isLogin} />
              <ProductList />
              <Footer />
            </div>
        )
    }
}

export default ProductListContainer;