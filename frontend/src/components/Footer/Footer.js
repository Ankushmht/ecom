import React from 'react'
import '../layout/Content.css'
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer">
            <div class="content">
                <div class="ulclass" >
                    <div class="header">LOCATION</div>
                    <ul>
                        <li>support@beyoung.in</li>
                        <li>Eklingpura Chouraha, Ahmedabad Main</li>
                        <li>Road (NH 8 - Near Mahadev Hotel)</li>
                        <li>Udaipur, India 313002</li>
                    </ul>
                </div>
                <div class="ulclass">
                    <div class="header">COMPANY</div>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Beyoung Blog</a></li>
                        <li><a href="">Beyoungistan</a></li>
                        <li><a href="">Term and Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Shipping Policy</a></li>
                        <li><a href="">Media</a></li>
                    </ul>
                </div>
                <div class="ulclass">
                    <div class="header">NEED HELP</div>
                    <ul>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Return, Refund and Cancellation</a></li>
                        <li><a href="">FAQ's</a></li>
                        <li><a href="">Track Order</a></li>
                        <li><a href="">Career</a></li>
                        <li><a href="">Sitemap</a></li>
                    </ul>
                </div>
                <div class="ulclass">
                    <div class="header">LETS BE FRIENDS</div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <a href="#" class="fa fa-facebook soc"></a>
                    <a href="#" class="fa fa-twitter soc"></a>
                    <a href="#" class="fa fa-pinterest soc"></a>
                    <a href="#" class="fa fa-linkedin soc"></a>
                    <a href="#" class="fa fa-youtube soc"></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
