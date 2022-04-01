import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductCard from '../ProductCard';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { idbPromise } from "../../utils/helpers";

function Equipmentlist() {
  const [state, dispatch] = useStoreContext();
  const {loading, data} = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if(data){
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });

      data.products.forEach((product)=> {
        idbPromise('products', "put", product);
      });
    }else if (!loading){
      // since we're offline, get all of the data from the `products` store
      idbPromise('products', 'get').then((products) => {
        // use retrieved data to set global state for offline browsing
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);

  function products() {
    let equipments = [];
    for (let i=0; state.products.length > i; i++){
      if(state.products[i].itemcategory === "Equipments"){
        equipments.push(state.products[i])
      }
    } 
    return equipments
  }

  console.log(products())
  return (
    <div className="m-2">
      {state.products.length ? (
        <div className=" cardList">
          {products().map((product) =>
            (
              <ProductCard
                key={product._id}
                _id={product._id}
                image={product.image}
                productitem={product.productitem}
                rentamount={product.rentamount}
                reserveDays={product.reserveDays}
                productdetails={product.productdetails}
              />
          ))}
        </div>
      ) : (
        <h3>You haven't added any Equipments yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default Equipmentlist;