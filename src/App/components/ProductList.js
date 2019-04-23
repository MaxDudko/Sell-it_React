import React, { Component } from 'react';
import './ProductList.scss';
import viewImg from '../../images/eye.png';
import product_1 from '../../images/product_img-1.png';
import product_2 from '../../images/product_img-2.png';
import product_3 from '../../images/product_img-3.png';
import product_4 from '../../images/product_img-4.png';

const imgsrcArr = [product_1, product_2, product_3, product_4];
const Product = (props) => (
     <div className="product">
         <img className="product__image" src={props.src} alt="product_img" />
         <div className="product__title">
                <p>Product title</p>
                <img className="product__title-view" src={viewImg} alt="view" />
         </div>
     </div>
)

class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
               { imgsrcArr.map((el) => <Product src={el} />) }
               { imgsrcArr.map((el) => <Product src={el} />) }
               { imgsrcArr.map((el) => <Product src={el} />) }
               { imgsrcArr.map((el) => <Product src={el} />) }
            </div>
        )
    }
}

export default ProductList;