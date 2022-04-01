import React, { useEffect } from 'react';
import CartDrawer from '../CartDrawer';
import CartDrawerBackdrop from '../CartDrawerBackdrop';
import { useLazyQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState'
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART} from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch]= useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(()=>{
    async function getCart(){
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart]});
    };

    if(!state.cart.length){
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart(){
    dispatch({ type: TOGGLE_CART});
  }

  // Calculate number of items in cart to display in the bubble
  function calculateItemNum() {
    // let itemNum = state.cart.length;
    let itemNum = 0;
    state.cart.forEach(item => {
      itemNum += item.reserveDays;
    });
    return (
      <p>
        {itemNum}
      </p>
    )
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.rentamount * item.reserveDays;
    });
    return sum.toFixed(2);
  }

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session })
      })
    }
  }, [data]);

  function submitCheckout(){
    const productIds = [];

    getCheckout({
      variables: { products: productIds }
    });

    state.cart.forEach((item)=> {
      for(let i = 0; i< item.reserveDays; i++){
        productIds.push(item._id);
      }
    });
  }

  let drawerClasses="cart";
  let total = calculateTotal();

  if (!state.cartOpen) {
    return (
      <>
      <div className={drawerClasses}>
          <CartDrawer 
          toggleCart={toggleCart} 
          calculateTotal={total}
          submitCheckout={submitCheckout}
          />
        </div>
      <div>
        <div className="cart-item-num">
          {calculateItemNum()}
        </div>
        <div className="cart-closed mx-3" onClick={toggleCart}>
          <span role="img" aria-label="shopping cart">
            <AiOutlineShoppingCart size={30}/>
          </span>
        </div>
      </div>
      </>
    );
  } else {
    drawerClasses="cart open";
  }

  return (
    <>
    <div className={drawerClasses}>
      <CartDrawer 
      toggleCart={toggleCart} 
      calculateTotal={total}
      submitCheckout={submitCheckout}
      />
    </div>
    <CartDrawerBackdrop 
      toggleCart={toggleCart} 
    />
    </>
  );
};

export default Cart;