
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import AddToCart from '../AddToCart';

import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS
} from "../../utils/actions";

function ProductItemDetail(item) {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({
  });

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }else if(data){
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
    }
  }, [products, data, loading, dispatch,  id]);

  return (
     <>
       {currentProduct ? (
        <div className="my-3">
         <h1 className="productTitle">{currentProduct.productitem}</h1>
           <Link to="/products">← Back to products</Link>

             <div className="detailWrapper">
                <section className="flex-row">

          {/* Image Column */}
                  <div className="flex-column productImage mx-4 px-4">
                    <img src={`/images/${currentProduct.image}`} alt="product"/>
                  </div>

          {/* Description Column */}
                  <div className="flex-column productdetails mx-4 px-4">

          {/* title and price  */}
                    <h2 className="productdetailsHeading">
                      {currentProduct.productitem}</h2>
                        <div>
                        <h3>${currentProduct.rentamount}/day</h3>
                        </div>

          {/* Specs List */}
                    <section className="detailsText">
                      <h4>Specs</h4>
                          <ul className="specs">

                            

                               <li className="my-2">
                              <div className="listTitle">About: </div>
                              <div className="listElement">{currentProduct.productdetails}
                              </div>
                            </li>

                            <li className="my-2">
                              <div className="listTitle">In Stock: </div>
                              <div className="listElement">{currentProduct.volume}</div>

                            </li>
                        </ul>
                        <AddToCart currentProduct={currentProduct} />
                      </section>
                  </div>

        {/* Add to Cart component */}
                  <div className="flex-column reservationAndCart mx-1 px-1">

                  </div>

               </section>
            </div>
          </div>
      ) : null}
     </>
  )
}

export default ProductItemDetail;