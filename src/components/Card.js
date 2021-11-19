import React, {useState, useEffect} from 'react';
import Producto from './Producto';
import axios from 'axios';
import '../styles/Card.css'

const Card = ({search}) => {
    
    const API = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=40`;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
          const response = await axios.get(API);
          const resp = response.data.results;
          setProducts(resp);
        })()
    }, [API]);



    console.log(products);

    return (
        <section className="card-list-container">
            {
                products.map(product => {
                    return <Producto
                                product_obj={product}
                                key={product.id}
                           />
                })
            }
        </section>
    );
}
 
export default Card;