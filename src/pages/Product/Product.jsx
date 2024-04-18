import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setselectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://assets.ajio.com/medias/sys_master/root/20230628/9NgD/649bc879a9b42d15c909e518/-473Wx593H-465905533-maroon-MODEL.jpg",
    "https://turtle.in/cdn/shop/products/OTTS-38801-1001-40-F-CREW_1_M.jpg?v=1670826053",
  ];

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={e => setselectedImg(0)} />
          <img src={images[1]} alt='' onClick={e => setselectedImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>
        Elevate your casual wardrobe with our Premium Cotton T-Shirt. Crafted from 100% high-quality cotton, this t-shirt offers unmatched comfort and durability, making it a staple piece for everyday wear.
        </p>
        <div className='quantity'>
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </div>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className='item'>
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
