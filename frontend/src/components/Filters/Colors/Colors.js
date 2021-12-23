import React from 'react'
import '../Size/size.css'

const Colors = () => {
    function handleClick() {
        var x = document.getElementById("colorLst");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <>
            <div class="color">
                <div class="colorHeading" onClick={()=>handleClick()}><span class="textSize">COLORS</span> <i class="arrow down"></i>
                </div>
                <div id="colorLst">
                    <div class="colorList">
                        <a href="/">Black</a>
                        <a href="/">Blue</a>
                        <a href="/">Green</a>
                        <a href="/">Yellow</a>
                        <a href="/"> Pink</a>
                        <a href="/">Red</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Colors
