import React from 'react'
import a from './Img/a.jpg'
import b from './Img/b.jpg'
import c from './Img/c.jpg'

const recentlyView = [
    { rId: '1', rating: '4', name: 'Neeraj Sharma', review: 'The product is quite decent for this price and the quality seems quite good too.', dateofreview: '10-10-21' },
    { rId: '2', rating: '3', name: 'Anshul Kr Tyagi', review: 'Having worn this T-shirt for 1 month now, I can say the quality and the color are still the same..... The price is reasonable and the quality is good.' }
];
const RecentlyViewAndSimilar = () => {
    return (
        <div>
            <span class="title"><u>RECENTLY VIEWED</u></span>
            <div class="row">
                <div class="column">
                    <img src={a} alt="Snow" width="100%" height="200px" />
                    <div>Dream Chaser Half Sleeve T-shirt for Men</div>
                    <div><span class="p-price">₹ 349</span><span class="p-price-small">₹ 549</span>
                <span class="p-price-span">(36% off)</span></div>
                </div>
                <div class="column">
                    <img src={b} alt="Forest" width="100%" height="200px"  />
                    <div>Dream Chaser Half Sleeve T-shirt for Men</div>
                    <div><span class="p-price">₹ 349</span><span class="p-price-small">₹ 549</span>
                <span class="p-price-span">(36% off)</span></div>
                </div>
                <div class="column">
                    <img src={c} alt="Mountains" width="100%" height="200px" />
                    <div>Dream Chaser Half Sleeve T-shirt for Men</div>
                    <div><span class="p-price">₹ 349</span><span class="p-price-small">₹ 549</span>
                <span class="p-price-span">(36% off)</span></div>
                </div>
                <div class="column">
                </div>
                <div class="column">
                </div>
            </div>
            <span class="title"><u>SIMILAR PRODUCTS</u></span>
            <div class="row">
                <div class="column">
                    <img src={a} alt="Snow" width="100%" height="200px" />
                    <div>Dream Chaser Half Sleeve T-shirt for Men</div>
                    <div><span class="p-price">₹ 349</span><span class="p-price-small">₹ 549</span>
                <span class="p-price-span">(36% off)</span></div>
                </div>
                <div class="column">
                    <img src={b} alt="Forest" width="100%" height="200px"  />
                    <div>Dream Chaser Half Sleeve T-shirt for Men</div>
                    <div><span class="p-price">₹ 349</span><span class="p-price-small">₹ 549</span>
                <span class="p-price-span">(36% off)</span></div>
                </div>
                <div class="column">
                    <img src={c} alt="Mountains" width="100%" height="200px" />
                    <div>Dream Chaser Half Sleeve T-shirt for Men</div>
                    <div><span class="p-price">₹ 349</span><span class="p-price-small">₹ 549</span>
                <span class="p-price-span">(36% off)</span></div>
                </div>
                <div class="column">
                </div>
                <div class="column">
                </div>
            </div>
        </div>
    )
}

export default RecentlyViewAndSimilar
