import React from 'react'
import a from './Img/a.jpg'
import b from './Img/b.jpg'
import c from './Img/c.jpg'
import d from './Img/d.jpg'
import e from './Img/e.jpg'
import './Productpics.css'


const ProductPics = () => {
    function handleClick(_src) {
        document.getElementById('bigImg').setAttribute(
            'src', _src);
        
      }
    return (
        <>
            <div>
                <div class="sideImage">
                        <img src={a} height="100" width="100" onClick={() => handleClick(a)} alt="aa"  ></img>
                        <img src={b} height="100" width="100" onClick={() => handleClick(b)} ></img>
                        <img src={c} height="100" width="100" onClick={() => handleClick(c)} ></img>
                        <img src={d} height="100" width="100" onClick={() => handleClick(d)} ></img>
                        <img src={e} height="100" width="100" onClick={() => handleClick(e)} ></img>
                </div>
                <div class="bigImage" >
                    <img src={c} id="bigImg"   height="505"></img>
                </div>
            </div>
        </>
    )
}

export default ProductPics
