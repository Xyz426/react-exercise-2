import React, { Component } from 'react';
import imgURL from '../assets/product_image_placeholder.png'

class Product extends Component {
    state = {
        count: 0,
    }
    

      
    handleaddToCart = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <section>
                <section>
                    <div style= {{float:'right'}}>购物车数量：{this.state.count}</div>
                </section>
                <section >
                    <div></div>
                    <h3>iPhone</h3>
                    <tr>
                        <th>iPhone11</th>
                        <th>iPhoneXS</th>
                        <th>iPhoneSE</th>
                    </tr>
                    <tr>
                        <th><img  src={imgURL} alt="products" /></th>
                        <th><img  src={imgURL} alt="products" /></th>
                        <th><img  src={imgURL} alt="products" /></th>
                    </tr>
                    
                    <p> ￥5999"</p>

                    <h3>iPhone</h3>
                    <p> ￥5999"</p>
                    
                    <h3>iPhone</h3>
                    <img  src={imgURL} alt="products" />
                    <p> ￥5999"</p>
                    <button onClick={this.handleaddToCart}>add to cart</button>
                </section>
                <section>
                <h3>iPhone</h3>
                    <img  src={imgURL} alt="products" />
                    <p> ￥5999"</p>

                    <h3>iPhone</h3>
                    <img  src={imgURL} alt="products" />
                    <p> ￥5999"</p>
                    
                    <h3>iPhone</h3>
                    <img  src={imgURL} alt="products" />
                    <p> ￥5999"</p>
                    <button onClick={this.handleaddToCart}>add to cart</button>
                </section>
            </section>
        );
    }
}

export default Product;