import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  Date: {new Date(parseInt(order.orderDate)).toLocaleDateString()}
                </h3>
                <h4>
                  Date of Pick Up/drop off:
                  <br/>
                  {order.datePeriods}
                </h4>
                <div className="flex-row">
                  {order.products.map(({ _id, image, productitem, rentamount }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={productitem} src={`/images/${image}`} />
                        <p>{productitem}</p>
                      </Link>
                      <div>
                        <span>${rentamount} per day</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
