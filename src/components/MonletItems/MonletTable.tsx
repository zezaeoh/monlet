import React from "react";
import './MonletTable.css'


const MonletTable = ({header, element}) => (
  <table className="table">
    <tr className="header">
      {header.map(v => (<th>{v}</th>))}
    </tr>
    {element.map((vv, idx) => (
      <tr className={idx === 0 ? "first": "not-first"}>
        {vv.map((v, idx2) => (
          <th>{v} {idx === 0 && idx2 === 1  && (<span className="rectangle">TOP</span>)} </th>)
        )}
      </tr>
    ))}
  </table>
);

export default MonletTable;