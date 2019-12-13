import React from 'react';
import './MonletFooter.css'

import img1 from '../img/Group_7_2.png';

const MonletFooter = ({title, content}) => {
  return (
    <div className="footer">
      <h1>
        {title.map(v => (<p>{v}</p>))}
      </h1>
      <img
        src={img1}
      />
      <div className="lwt">
        {content.map(v => (<p>{v}</p>))}
      </div>
      <div
        className="button"
        onClick={() => window.location.href="https://m.mydano.net/class/list.html"}
      >다음 달도 마이다노와 함께하기</div>
    </div>
  );
};

export default MonletFooter;