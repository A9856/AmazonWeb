import React from 'react'
import Breadcumb from '../Component/Breadcumb'
import Cart from '../Component/Cart'
import Profile from "../Component/Profile"
export default function CheckoutPage() {
  return (
    <>
      <Breadcumb title="Checkout - Place Your Order" />
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            <Profile title="Billing Address" />
          </div>
          <div className="col-md-6">
            <Cart title="Products in Cart" />
          </div>
        </div>
      </div>
    </>
  )
}
