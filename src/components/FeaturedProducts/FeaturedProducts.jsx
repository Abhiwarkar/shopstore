
import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

    const data =[
        {
            id:1,
            img:"",
            img2:"https://images.pexels.com/photos/3426395/pexels-photo-3426395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice : 199,
            price :132,
        },
        {   
            id:2,
            img:"https://assets.ajio.com/medias/sys_master/root/20231120/3pWX/655b616aafa4cf41f59212e2/-1117Wx1400H-466811097-magenta-MODEL.jpg",
            title:"Coat",
            isNew:true,
            oldPrice : 100,
            price: 67,  
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/21192647/pexels-photo-21192647/free-photo-of-portrait-of-woman-in-shirt-and-skirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirts",
            isNew:false,
            oldPrice : 179,
            price :122,  
        },
        {
            id:3,
            img:"https://www.gluestore.com.au/cdn/shop/products/20220707-CHARLOTTE_7.07-1838_600x.jpg?v=1671148959",
            title:"T-shirts",
            isNew:false,
            oldPrice : 199,
            price :130,  
        }
    ]


  return (
    <div className='featuredProducts'>

    <div className='top'>
        <h1>{type}products</h1>
        <p>
Explore our curated selection of featured products, handpicked for their quality, innovation, and style.Discover the latest and hottest products that everyone is talking about in our Trending Products collection. From innovative gadgets to stylish accessories, our curated selection showcases what's popular and in-demand right now.

</p>
    </div>
    <div className='bottom'>
    {data.map(item => (<Card item={item} key={item.id} />))}
    </div>
    </div>
    
  );
};

export default FeaturedProducts;