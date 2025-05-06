import { combineReducers } from "@reduxjs/toolkit"
import MaincategoryReducer from "./MaincategoryReducer"
import SubcategoryReducer from "./SubcategoryReducer"
import BrandReducer from "./BrandReducer"
import TestimonialReducer from "./TestimonialReducer"
import ProductReducer from "./ProductReducer"
import CartReducer from "./CartReducer"
import ContactUsReducer from "./ContactUsReducer"
import CheckoutReducer from "./CheckoutReducer"
import NewsletterReducer from "./NewsletterReducer"
import WishlistReducer from "./WishlistReducer"
import UserReducer from "./UserReducer"
export default combineReducers({

    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    BrandStateData: BrandReducer,
    TestimonialStateData: TestimonialReducer,
    ProductStateData: ProductReducer,
    CartStateData: CartReducer,
    ContactUsStateData: ContactUsReducer,
    CheckoutStateData: CheckoutReducer,
    NewsletterStateData: NewsletterReducer,
    WishlistStateData: WishlistReducer,
    UserStateData: UserReducer,




})