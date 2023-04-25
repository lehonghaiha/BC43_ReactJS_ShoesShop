import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let {productDetail} = this.props;
        return (
            <div>
                {/* MODAL */}
                <div className="modal fade modal-lg" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {/* Modal header */}
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Detail</h1>
                            </div>
                            {/* Modal Body */}
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <div className='row w-100'>
                                            <div className='col-6' >
                                                <div>
                                                    <img className='w-100' src={productDetail.image} alt="..." />
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <h3>{productDetail.name}</h3>
                                                <p>{productDetail.price} $</p>
                                                <p>{productDetail.description}</p>
                                                <p className='fst-italic'>{productDetail.shortDescription}</p>
                                                <p>Quantity : {productDetail.quantity} pcs  </p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <button id="btn-dong" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
