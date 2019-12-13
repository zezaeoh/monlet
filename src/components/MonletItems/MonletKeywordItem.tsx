import React, { Component } from 'react';
import MonletTable from "./MonletTable";
import './MonletKeywordItem.css'

class MonletKeywordItem extends Component<any, any> {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked || this.props.clicked !== nextProps.clicked || this.props.content !== nextProps.content;
  }

  render() {
    const {
      title = ["12월 다희님의 키워드는"],
    } = this.props;

    return (
      <div className="food_item">
        <h2>
          {title.map(v => (<p>{v}</p>))}
        </h2>
        <MonletTable
          header={[
            "순위", "단어", "횟수"
          ]}
          element={[
            ["1", "걷자", "20회"],
            ["2", "ㅜㅜ", "15회"],
            ["3", "스트레칭", "5회"],
          ]}
        />
      </div>
    );
  }
}

export default MonletKeywordItem;