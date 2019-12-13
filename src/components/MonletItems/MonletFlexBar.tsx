import React from "react";
import './MonletFlexBar.css'

const MonletFlexBar = (
  {
    value = [
      {
        percent: 15,
        status: "배고픔"
      },
      {
        percent: 72,
        status: "딱 좋음"
      },
      {
        percent: 13,
        status: "배부름"
      }
    ]
  }) => (
  <div>
    <div className="bar">
      {value.map((v, idx) => (
        <div className={`elem inner color_${idx}`} style={{width: `${v.percent}%`}}>{`${v.percent}%`}</div>))}
    </div>
    <div className="text">
      {value.map(v => (
        <div className="elem" style={{width: `${v.percent}%`}}>{v.status}</div>))}
    </div>
  </div>
);

export default MonletFlexBar;