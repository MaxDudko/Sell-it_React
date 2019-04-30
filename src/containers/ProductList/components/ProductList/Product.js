import React from 'react';
import styles from './ProductList.module.scss';
import viewImg from '../../../../images/eye.png';

const Product = (props) => (
    <div className={styles.product} key={}>
        <img className={styles.product__image} src={product.images.length === 0 ? 'img/default.jpg' : product.images[0].file} alt="product_img" />
            <div className={styles.product__title}>
                <p>Product title</p>
                <img className={styles.product__titleView} src={viewImg} alt="view" />
            </div>
    </div>
)