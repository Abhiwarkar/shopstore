import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/3426395/pexels-photo-3426395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            desc: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 199,
            price: 132,
        },
        {
            id: 2,
            img: "https://assets.ajio.com/medias/sys_master/root/20231120/3pWX/655b616aafa4cf41f59212e2/-1117Wx1400H-466811097-magenta-MODEL.jpg",
            title: "Coat",
            desc: "Coat",
            isNew: true,
            oldPrice: 100,
            price: 67,
        },
    ];

    return (
        <div className='cart'>
            <h3>Products in your cart</h3>
            {data?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img } alt='' />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        {/* Placeholder description */}
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className='price'>
                            1 x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className ='delete'/> 
                </div>
              ))}
              <div className='total'>
                <span>SUBTOTAL</span>
                <span>$123</span>
              </div>
            
           <button>PROCEED TO CHECKOUT</button>
           <span className='reset'>Reset Card</span>
        </div>
    );
}

export default Cart;
