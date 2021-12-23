import React from 'react'
import './NavbarCSS.css'
import TopBar from './TopBar';

const NavbarEcom = () => {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
            document.getElementById("nav").style.top = "0";
        } else {
            document.getElementById("nav").style.top = "-50px";
        }
    }
    return (
        <>
        <TopBar/>
        {/* Flexible Navigation that appears after 20 px Scroller */}
        <div class="navbar" id="nav">
            <a href="#home">Men</a>
            <a href="#news">Women</a>
            <div class="dropdown">
                <button class="dropbtn">Combos
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <div class="row">
                        <div class="column-nav">
                            <h3>Category 1</h3>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <div class="column-nav">
                            <h3>Category 2</h3>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                        <div class="column-nav">
                            <h3>Category 3</h3>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Fixed Navigation that appears onload of the page   */}
        <div class="navbar" id="navFixed">
                <a href="#home">Men</a>
                <a href="#news">Women</a>
                <div class="dropdown">
                    <button class="dropbtn">Combos
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <div class="row">
                            <div class="column-nav">
                                <h3>Category 1</h3>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div class="column-nav">
                                <h3>Category 2</h3>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div class="column-nav">
                                <h3>Category 3</h3>
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            </>
    )
}

export default NavbarEcom
