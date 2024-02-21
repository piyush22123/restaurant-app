import React from 'react'
import Menu from './menuApi'

const Card = (props) => {
  return (
    <div className='item'>
        <div className="menu-no"><span>{props.itemNo}</span></div>
        <p>{props.category}</p>
        <h1>{props.name}</h1>
        <div className="detail">
        <p>{props.description}</p>
        </div>
        <div className="item-img">
            <img src={props.image} alt="" />
        </div>
        <div className="buy">
            <h4>{props.price}</h4>
        <button>Order Now</button>
        </div>
        
    </div>
        )
}

export default Card