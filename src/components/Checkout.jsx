import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const companyInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();

  const deliveryCost = 12;

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  let total = 0;

  const itemList = (item) => {
    total = total + item.quantity * item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">
          ${(item.quantity * item.price).toFixed(2)}
        </span>
      </li>
    );
  };

  // const submitOrderHandler = async (userData) => {
  //   // setIsSubmitting(true);
  //   await fetch(
  //     "https://gregstore-98bc3-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         // user: userData,
  //         // orderedItems: cartCtx.items,
  //         orderedItems: cart,
  //       }),
  //     }
  //   );
  //   // setIsSubmitting(false);
  //   // setDidSubmit(true);

  //   dispatch(createOrder());
  //   navigate("/");
  // };

  const submitOrderHandler = () => {
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;

    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      company: enteredCompany,
      email: enteredEmail,
      phone: enteredPhone,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
      country: enteredCountry,
    };

    // setIsSubmitting(true);
    fetch(
      "https://gregstore-98bc3-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cart,
        }),
      }
    );
    // setIsSubmitting(false);
    // setDidSubmit(true);

    dispatch(createOrder());
    navigate("/");
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {getTotalQuantity()}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cart.map(itemList)}

              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="text-primary">
                  <h6 className="my-0 text-uppercase">Delivery cost</h6>
                </div>
                <span className="text-primary">${deliveryCost.toFixed(2)}</span>
              </li>

              {/* <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5.00</span>
              </li> */}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${(total + deliveryCost).toFixed(2)}</strong>
              </li>
            </ul>

            {/* <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form> */}
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              novalidate
              onSubmit={submitOrderHandler}
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Jan"
                    required
                    ref={firstNameInputRef}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Kowalski"
                    required
                    ref={lastNameInputRef}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label fhtmlFor="company">
                  Company Name <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Your Company Name"
                  ref={companyInputRef}
                />
                <div className="invalid-feedback">
                  Please enter your company name.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  placeholder="name@example.com"
                  ref={emailInputRef}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="mb-3">
                <label fhtmlFor="address">Postal Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="ul. Kwiatowa 1/23"
                  required
                  ref={streetInputRef}
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="postal">Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postal"
                    placeholder="02-232"
                    required
                    ref={postalCodeInputRef}
                  />
                  <div className="invalid-feedback">
                    Please enter your Postal Code.
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Warszawa"
                    required
                    ref={cityInputRef}
                  />
                  <div className="invalid-feedback">
                    Please enter your City.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label fhtmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Polska"
                    required
                    ref={countryInputRef}
                  />
                  <div className="invalid-feedback">
                    Please enter your Country.
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="570 709 071"
                    required
                    ref={phoneInputRef}
                  />
                  <div className="invalid-feedback">
                    Please enter your Phone Number.
                  </div>
                </div>
              </div>

              {/* <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="same-address"
                />
                <label className="custom-control-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="save-info"
                />
                <label className="custom-control-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr className="mb-4" /> */}

              {/* <h4 className="mb-3">Payment</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    checked
                    required
                  />
                  <label className="custom-control-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="mb-4" /> */}
              <div className="col text-center mt-2">
                <button className="btn btn-primary btn-block" type="submit">
                  Send Your Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
