import React from 'react';
import styles from './ProductList.module.scss';
import viewImg from '../../../../images/eye.png';


const ProductList = (props) => (    
            <div className={styles.productList}>
                {   
                    props.data.map((product, id) => (
                        <div className={styles.product} key={id}>
                            <img className={styles.product__image} src={product.images.length === 0 ? 'img/default.jpg' : product.images[0].file} alt="product_img" />
                            <div className={styles.product__title}>
                                <p>Product title</p>
                                <img className={styles.product__titleView} src={viewImg} alt="view" />
                            </div>
                        </div> 
                    )
                  )
                }
                {   
                    props.data.map((product, id) => (
                        <div className={styles.product} key={id+1}>
                            <img className={styles.product__image} src={product.images.length === 0 ? 'img/default.jpg' : product.images[0].file} alt="product_img" />
                            <div className={styles.product__title}>
                                <p>Product title</p>
                                <img className={styles.product__titleView} src={viewImg} alt="view" />
                            </div>
                        </div> 
                    )
                  )
                }
                {   
                    props.data.map((product, id) => (
                        <div className={styles.product} key={id+2}>
                            <img className={styles.product__image} src={product.images.length === 0 ? 'img/default.jpg' : product.images[0].file} alt="product_img" />
                            <div className={styles.product__title}>
                                <p>Product title</p>
                                <img className={styles.product__titleView} src={viewImg} alt="view" />
                            </div>
                        </div> 
                    )
                  )
                }
                {   
                    props.data.map((product, id) => (
                        <div className={styles.product} key={id+3}>
                            <img className={styles.product__image} src={product.images.length === 0 ? 'img/default.jpg' : product.images[0].file} alt="product_img" />
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