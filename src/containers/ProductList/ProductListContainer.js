import React, { Component } from 'react';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';

class ProductListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true,
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        fetch('http://light-it-04.tk/api/posters/')
        .then(response => response.json())
        .then(obj => obj.data)
        .then(data => this.setState({
            data: data,
            isLoading: false
        }))
        .catch(error => console.log(error))
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
              <ProductList data={this.state.data} />
              <Footer />
            </div>
        )
    }
}

export default ProductListContainer;