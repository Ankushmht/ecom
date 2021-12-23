import React from 'react'
import ProductPics from './ProductPage/ProductPics'
import './layout/Content.css'
import ProductDesc from './ProductPage/ProductDesc'
import ProductDetails from './ProductPage/ProductDetails'
import RecentlyViewAndSimilar from './ProductPage/RecentlyViewAndSimilar'


const ProductPage = () => {
    return (
        <div class='content'>
           <div class="productPics"> <ProductPics/></div>
           <div class="productDesc"> <ProductDesc/></div>
           <div class="productDetails"><ProductDetails/></div>
           <div class="recently-viewAndSimilar"><RecentlyViewAndSimilar/></div>
        </div>
    )
}

export default ProductPage
