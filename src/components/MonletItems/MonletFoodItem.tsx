import React, { Component } from 'react';
import FoodDetail from "./FoodDetail";
import './MonletFoodItem.css'

import img1 from '../../img/KakaoTalk_Photo_2019-10-28-10-47-51.png'
import img2 from '../../img/IMG_9801.jpg'
import img3 from '../../img/KakaoTalk_Photo_2019-10-28-10-47-55.jpg'
import MonletFlexBar from "./MonletFlexBar";

class MonletFoodItem extends Component<any, any> {
  render() {
    const {
      diet = {
        title: ["이번 달 저녁은", "샐러드를 가장 자주 드셨네요!"],
        extra: "이번 달 자주 먹은 음식",
        value: [
          {
            img: img1,
            title: "아침",
            extra: "프로틴 브라솔"
          },
          {
            img: img2,
            title: "점심",
            extra: "마라탕"
          },
          {
            img:  img3,
            title: "저녁",
            extra: "샐러드"
          }
        ]
      },
      Satiety = {
        title: ["대단해요! 적당한 포만감을", "72% 사수했어요."],
        extra: "이번 달 포만감"
      }
    } = this.props;

    return (
      <div className="food_item">
        <div>
          <h2>
            {diet.title.map(v => (<p>{v}</p>))}
          </h2>
          <h5>
            {diet.extra}
          </h5>
          <div className="wrapper">
            {diet.value.map(v => (<FoodDetail
              img={v.img}
              title={v.title}
              extra={v.extra}
            />))}
          </div>
        </div>

        <div>
          <h2>
            {Satiety.title.map(v => (<p>{v}</p>))}
          </h2>
          <h5>
            {Satiety.extra}
          </h5>
          <MonletFlexBar />
        </div>
      </div>
    );
  }
}

export default MonletFoodItem;