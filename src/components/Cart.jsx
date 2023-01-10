import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const handlePlusQty = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleMinusQty = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5" key={cartItem.id}>
        <div className="container py-4">
          {/* <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button> */}
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                {cartItem.quantity} x ${cartItem.price.toFixed(2)} = $
                {(cartItem.quantity * cartItem.price).toFixed(2)}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => dispatch(decrementQuantity(cartItem))}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => dispatch(incrementQuantity(cartItem))}
              >
                <i className="fa fa-plus"></i>
              </button>
              <button
                className="btn btn-dark"
                onClick={() => handleDelete(cartItem)}
              >
                Delete From Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="my-5 bg-light rounded-3 py-5 text-center">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const checkoutButton = () => {
    return (
      <div className="container my-5 text-center">
        <div className="col">
          <Link to="/checkout" className="btn btn-dark mb-3 w-25">
            Place Your Order
          </Link>
        </div>
        <button
          onClick={() => handleClear()}
          className="btn btn-outline-dark mb-5 w-25"
        >
          Clear Cart
        </button>
      </div>
    );
  };

  const closeButton = () => {
    return (
      <div className="container my-5">
        <div className="row">
          <Link
            to="/checkout"
            className="btn btn-outline-dark mb-5 w-25 mx-auto"
          >
            Close
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="container my-5 py-5">
      <Link
        to="/products"
        className="btn-close float-end mt-5 me-3"
        aria-label="Close"
      ></Link>
      <h1 className="text-center">Shopping Cart</h1>

      {cart.length === 0 && emptyCart()}
      {cart.length !== 0 && cart.map(cartItems)}
      {cart.length !== 0 && checkoutButton()}
    </div>
  );
};

export default Cart;
