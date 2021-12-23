import React from 'react'
import './Productpics.css'
import cod from './Img/cod.png';

const ProductDesc = () => {
    return (
        <div>
            <div class="pName">Tea-rrific Dog Half Sleeve T-shirt for Men <span></span></div>
            <div><span class="p-price">₹ 349</span><span class="p-price-small">₹ 549</span>
                <span class="p-price-span">(36% off)</span></div>
            <div class="tax-text">Inclusive of All Taxes + <span>Free Shipping</span></div>
            <div class="title">COLOR</div>
            <div>
            <span class="circle bcolor"></span> <span>Burgundy</span>
            </div>
            <div class="title">Size</div>
            <div><span class="circle">S</span>  <span class="circle">M</span> <span class="circle">L</span> <span class="circle">XL</span> <span class="circle">XXL</span> <span class="circle">XXXL</span> <span class="circle">4XL</span></div>
            <div class="title">QTY</div>
            <div class="quantity-box">
                <select>
                    <option selected="" value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="product-add-button">
                <div class="left-btn">
                    <a>
                        <img src="" alt=""/>
                            ADD TO CART
                    </a>
                </div>
                <div class="right-btn">
                    <a>
                        <img src="" alt=""/>
                            BUY NOW
                    </a>
                </div>
            </div>
            <div class="title">DELIVERY OPTIONS</div>
            <div class="deliver-details-box">
                <div>Enter your Pincode to check the delivery time and free pick up options</div>
                <div class="in">
                    <input type="text" maxLength={6} placeholder='Enter Pincode'/>
                    <a>Check</a>
                </div>
                <a   class="codpng" href='https://pngtree.com/so/yellow'>yellow png from pngtree.com/</a>
                    <img src={cod} height="50px" height="50px"></img> Cash On delivery
                    <img src={cod} height="50px" height="50px"></img> Express Shipping
            </div>
            
        </div>
    ) 
}

export default ProductDesc
