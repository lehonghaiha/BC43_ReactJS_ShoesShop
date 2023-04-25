import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { product,setStateModal } = this.props;
        return (
            <div>
                <div className='card p-3' data-bs-toggle="modal"
                    data-bs-target="#exampleModal" onClick={()=>{
                        setStateModal(product)
                    }}>
                    <img src={product.image} alt="..." />
                    <h3>{product.name}</h3>
                    <p>{product.price} $</p>
                    <button className='btn btn-dark text-light'>
                        Add to cart <i className="fa fa-cart-plus"></i>
                    </button>
                </div>               

            </div>
        )
    }
}
