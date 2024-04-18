import React from 'react';
import "./List.scss";
import Card from '../Card/Card';

const List = () => {

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
            id:4,
            img:"https://www.gluestore.com.au/cdn/shop/products/20220707-CHARLOTTE_7.07-1838_600x.jpg?v=1671148959",
            title:"T-shirts",
            isNew:false,
            oldPrice : 199,
            price :130,  
        },
        {
            id:5,
            img:"https://assets.ajio.com/medias/sys_master/root/20231124/mUAB/65607b52ddf779151998a901/-473Wx593H-466821051-blue-MODEL.jpg",
            title:"Coat",
            isNew:true,
            oldPrice : 199,
            price :132,
        },
        {   
            id:6,
            img:"https://assets.ajio.com/medias/sys_master/root/20230624/TWEG/6496155ca9b42d15c9d0c1a6/-473Wx593H-465162208-rust-MODEL.jpg",
            title:"Coat",
            isNew:true,
            oldPrice : 100,
            price: 67,  
        },
        {
            id:7,
            img:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21361188/2023/1/5/6518590b-5b69-4eac-874c-29531a189c6c1672898505700-Athena-Burgundy-Suede-OverCoat-2521672898504872-1.jpg",
            title:"Coat",
            isNew:false,
            oldPrice : 179,
            price :122,  
        },
        {
            id:8,
            img:"https://anindigoday.com/wp-content/uploads/2022/07/gingham-mini-skirt-and-abercrombie-fitch-tank-8.webp",
            title:"Skirts",
            isNew:false,
            oldPrice : 199,
            price :130,  
        },
        {
            id:9,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTX0Y1fAP1lOvVYj_jx6yoIL1ZwQQkesPB8r31ZdBoarQk364q64xjqQ29TPlwWdPNHMQ&usqp=CAU",
            title:"Tshirts",
            isNew:false,
            oldPrice : 199,
            price :130,  
        },
        {
            id:10,
            img:"https://img01.ztat.net/article/spp-media-p1/7767fe53301f4879bd590f93f99a3a78/a97cb53a92ce417b9ac3238d89fe37e3.jpg?imwidth=762",
            title:"Tshirts",
            isNew:false,
            oldPrice : 199,
            price :130,  
        },
       

    ]

    return (
    <div className='list'>
         { data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List