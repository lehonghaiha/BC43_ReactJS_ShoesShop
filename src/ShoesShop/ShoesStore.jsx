import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import data from '../assets/data.json'

export default class ShoesStore extends Component {
    state = {
        productDetail: [
            {"id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"}
        ]
    }
    //get infor Product when click
    setStateModal = (spClick)=>{
        console.log(spClick);
        this.setState({
            productDetail:spClick
        })
    }
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>SHOES SHOP</h3>
                <ProductList setStateModal={this.setStateModal} arrProduct={data} />
                <Modal productDetail={this.state.productDetail}/>
            </div>
        )
    }
}
