import { all } from "redux-saga/effects";
import maincategorySagas from "./MaincategorySagas";
import subcategorySagas from "./SubcategorySagas";
import brandSagas from "./BrandSagas";
import testimonialSagas from "./TestimonialSagas";
import productSagas from "./ProductSagas";
import cartSagas from "./CartSagas";
import contactUsSagas from "./ContactUsSagas";
import checkoutSagas from "./CheckoutSagas";
import newsletterSagas from "./NewsletterSagas";
import wishlistSagas from "./WishlistSagas";
import userSagas from "./UserSagas";
export default function* RootSaga(){
    yield all([
        maincategorySagas(),
        subcategorySagas(),
        brandSagas(),
        testimonialSagas(),
        productSagas(),
        cartSagas(),
        contactUsSagas(),
        checkoutSagas(),
        newsletterSagas(),
        wishlistSagas(),
        userSagas(),

    ])
}
