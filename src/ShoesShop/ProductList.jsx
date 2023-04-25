import React, { Component } from 'react'
import ProductItem from './ProductItem'
import data from '../assets/data.json'
export default class ProductList extends Component {

   
    render() {
        let { arrProduct,setStateModal } = this.props;
        return (
            <div>
                <div className="row">
                    {arrProduct.map((prod, index) => {
                        return <div className='col-3 mt-3' key={index}>
                            <ProductItem setStateModal={setStateModal}  product={prod} />
                        </div>
                    })}
                </div>

            </div>
        )
    }
}
