import React from 'react'
import Breadcumb from '../Component/Breadcumb'
import Cart from '../Component/Cart'

export default function CartPage() {
    return (
        <>
            <Breadcumb title="Cart"/>
            <div className="container-fluid my-3">
                <Cart title="Cart"/>
            </div>
        </>
    )
}
