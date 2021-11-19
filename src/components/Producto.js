import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Producto.css';

const Producto = ({product_obj}) => {

    const {id, thumbnail, title, price, original_price} = product_obj;

    const url = "/product-detail";
    
    return (
        <Link to={`${url}/${id}`}>
            <div className="producto">
                <div className="container-producto">
                    <div className="image-container">
                        <img src={thumbnail} alt="Item"></img>
                    </div>
                    
                    <div className="item-info">
                        <h2>{title}</h2>
                        {original_price ? <s><span>${original_price}</span></s>: <></>}
                        <h2>${price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Producto;