import React from 'react';
import styles from './ProductList.module.scss';
import viewImg from '../images/eye.png';
import product_1 from '../images/product_1.png';
import product_2 from '../images/product_2.png';
import product_3 from '../images/product_3.png';
import product_4 from '../images/product_4.png';

const productData = [product_1, product_2, product_3, product_4,
                     product_1, product_2, product_3, product_4,
                     product_1, product_2, product_3, product_4,
                     product_1, product_2, product_3, product_4,
                     product_1, product_2, product_3, product_4,
                     product_1, product_2, product_3, product_4,
                     product_1, product_2, product_3, product_4,
                     product_1, product_2, product_3, product_4];

const ProductList = () => (    
            <div className={styles.productList}>
                {
                    productData.map((el, i) => (
                        <div className={styles.product} key={i}>
                            <img className={styles.product__image} src={el} alt="product_img" />
                            <div className={styles.product__title}>
                                <p>Product title</p>
                                <img className={styles.product__titleView} src={viewImg} alt="view" />
                            </div>
                        </div> 
                    )
                  )
                }
            </div>
            
)


export default ProductList;