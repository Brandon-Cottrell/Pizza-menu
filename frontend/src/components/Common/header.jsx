import React from 'react';
import ImgCartIcon from '../../assets/img/cart-icon.png';

function header() {
    return (
        <>
            <section class="main">

<div class="main-img">
    <nav> 
        <p>
            Dino's Pizzeria
        </p>
        <button> 
            Sign up
        </button>
        <img src={ImgCartIcon} alt="" />
    </nav>
    </div>
    </section>
        </>
    )
}

export default header
