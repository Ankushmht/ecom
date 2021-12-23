import React from 'react'
import '../Size/size.css'

const Price = () => {
    function handleClick() {
        var x = document.getElementById("priceLst");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <div>
            <>
            <div class="price">
                <div class="priceHeading" onClick={()=>handleClick()}><span class="textSize">PRICE</span> <i class="arrow down"></i>
                </div>
                <div id="priceLst">
                    <div class="priceList">
                        <input type="checkbox" id="chkLowToHigh"/><a href="/">Low To High</a>
                        <input type="checkbox" id="chkzHighToLow"/><a href="/">Hign To Low</a>
                    </div>
                </div>
            </div>
        </>
        </div>
    )
}

export default Price
