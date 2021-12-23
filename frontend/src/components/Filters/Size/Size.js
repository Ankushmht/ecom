import React from 'react'
import './size.css'

const Size = () => {
    function handleClick() {
        var x = document.getElementById("sizeLst");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <>
            <div class="size">
                <div class="sizeHeading" onClick={()=>handleClick()}><span class="textSize">SIZE</span> <i class="arrow down"></i>
                </div>
                <div id="sizeLst">
                    <div class="sizeList">
                        <a href="/">S</a>
                        <a href="/">M</a>
                        <a href="/">L</a>
                        <a href="/">XL</a>
                        <a href="/"> XXL</a>
                        <a href="/">XXXL</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Size
