import React from 'react'
import './Productpics.css'

const peopleReview = [
    { rId: '1', rating: '4', name: 'Neeraj Sharma', review: 'The product is quite decent for this price and the quality seems quite good too.', dateofreview: '10-10-21' },
    { rId: '2', rating: '3', name: 'Anshul Kr Tyagi', review: 'Having worn this T-shirt for 1 month now, I can say the quality and the color are still the same..... The price is reasonable and the quality is good.' }
];
const ProductDetails = () => {
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    return (
        <div>
            <h2>Product Details</h2>

            <div class="tab">
                <button class="tablinks" onClick={(e) => openCity(e, 'Details')}>Details</button>
                <button class="tablinks" onClick={(e) => openCity(e, 'PO')}>Product Review</button>
            </div>

            <div id="Details" class="tabcontent" style={{ display: "block" }}>
                <table class="tbDetails">
                    <tr>
                        <td>Style</td>
                        <td>
                            Regular Fit: Fits just right
                            Round Neck
                            Half Sleeve
                        </td>
                    </tr>
                    <tr>
                        <td>Fabric</td>
                        <td>100% Cotton (Bio-Washed)</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>We follow US and EU Standards. Not too tight, not too loose.</td>
                    </tr>
                    <tr>
                        <td>Coutry Made</td>
                        <td>Crafted & Designed in India</td>
                    </tr>
                    <tr>
                        <td>Design Brief</td>
                        <td>Are you a dog lover and tea lover annddd a sarcastic person? If yes, then this tea-rrific dog t-shirt design is made for you only. Be more trendy in this!</td>
                    </tr>
                    <tr>
                        <td>Delivery & Return Policy</td>
                        <td>Pay online & get free shipping. Cash Collection Charges applicable. Please, refer FAQ for more information. All products are applicable for return. Customers can return their order within 15 days of the order delivery. Refunds for returned products will be given in your Respective Account.</td>
                    </tr>
                </table>
            </div>

            <div id="PO" class="tabcontent">
                <div>
                    <div class="left-review">
                        <div><b>Customer Reviews</b></div>
                        <div class="stars">
                            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <div>4 Customer Rating</div>
                        <div>Only registered users can write reviews. Please Sign in or create an account</div>
                    </div>
                    <div class="right-review">
                        {peopleReview.map((data) => (
                            <div key={data.id} style={{padding:"5px"}}>
                                <div class="circle rating">{data.rating} <span class="fa fa-star"></span></div>
                                <div class="c-review">
                                    <p>{data.review}</p>
                                    <p>{data.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
