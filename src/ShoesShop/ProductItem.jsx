import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { product,setStateModal } = this.props;
        return (
            <div >
                <div className='card p-3 position-relative' style={{height:'450px'}} data-bs-toggle="modal"
                    data-bs-target="#exampleModal" onClick={()=>{
                        setStateModal(product)
                    }}>
                    <img src={product.image} alt="..." />
                    <h3>{product.name}</h3>
                    <p className='text-danger fs-5'>{product.price} $</p>
                    <button className='btn btn-secondary text-light position-absolute'  style={{bottom:'10px',right:'10px'}}>
                        Add to cart <i className="fa fa-cart-plus"></i>
                    </button>
                </div>               

            </div>
        )
    }
}
