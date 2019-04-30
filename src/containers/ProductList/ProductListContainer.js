import React, { Component } from 'react';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import {connect} from 'react-redux';
import {fetchProducts} from '../../action';

class ProductListContainer extends Component {


    componentDidMount() {
        /*fetch('http://light-it-04.tk/api/posters/')
        .then(response => response.json())
        .then(obj => obj.data)
        .then(data => this.setState({
            data: data,
            isLoading: false
        }))
        .catch(error => console.log(error))*/
        this.props.fetchProducts();
    }
      
    
    handleClick = () => {
        this.setState({
          isLogin: !this.state.isLogin
        });
    }
    
    render() {
        console.log(this.props.data)
        return (
            <div>
              <Header isLogin={true} />
              <ProductList data={this.props.productList} />
              <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productList: state.data
  })
const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
   })

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
