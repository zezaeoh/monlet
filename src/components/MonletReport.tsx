import React from 'react';

import './MonletReport.css';
import MonletTable from "./MonletItems/MonletTable";
import MonletChart from "./MonletItems/MonletChart";

const MonletReport = ({time_report, workout_report, difficulty_report}) => {
  return (
    <div className="report">
      <div>
        <h2>
          {time_report.title.map(v => (<p>{v}</p>))}
        </h2>
        <h5>
          {time_report.extra}
        </h5>
        <MonletChart option={true}/>
      </div>

      <div>
        <h2>
          {workout_report.title.map(v => (<p>{v}</p>))}
        </h2>
        <h5>
          {workout_report.extra}
        </h5>
        <MonletTable
          header={[
            '순위', '운동', '운동 시간'
          ]}
          element={[
            ['1', '스쿼트', '3시간 24분'],
            ['2', '플랭크', '1시간 10분'],
            ['3', '푸쉬업', '1시간 5분'],
          ]}
        />
      </div>

      <div>
        <h2>
          {difficulty_report.title.map(v => (<p>{v}</p>))}
        </h2>
        <h5>
          {difficulty_report.extra}
        </h5>
        <MonletChart />
      </div>
    </div>
  );
};

export default MonletReport;