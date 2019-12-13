import React from 'react';
import './FoodDetail.css'

const FoodDetail = ({img, title, extra}) => (
  <div className="food_detail">
    <p><img src={img} alt={`${title}-img`}/></p>
    <b>{title}</b>
    <p>{extra}</p>
  </div>
);

export default FoodDetail;