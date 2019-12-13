import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import './MonletReport.css';
import MonletTable from "./MonletItems/MonletTable";
import MonletChart from "./MonletItems/MonletChart";

const data = [
  { day: 1, time: 18 },
  { day: 2, time: 22 },
  { day: 3, time: 23 },
  { day: 4, time: 20 },
  { day: 5, time: 20 },
  { day: 6, time: 20 },
  { day: 7, time: 20 },
  { day: 8, time: 20 },
  { day: 9, time: 20 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13, time: 21 },
  { day: 14, time: 20 },
  { day: 15, time: 21 },
  { day: 16, time: 20 },
  { day: 17, time: 20 },
  { day: 18, time: 20 },
  { day: 19, time: 19 },
  { day: 20, time: 18 },
  { day: 21, time: 16 },
  { day: 22, time: 15 },
  { day: 23, time: 15 },
  { day: 24, time: 20 },
  { day: 25, time: 22 },
  { day: 26, time: 23 },
  { day: 27, time: 21 },
  { day: 28, time: 20 },
  { day: 29, time: 19 },
  { day: 30, time: 20 },
];

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
        <MonletChart/>
        {/*<LineChart*/}
        {/*    width={320}*/}
        {/*    height={200}*/}
        {/*    data={data}*/}
        {/*    margin={{*/}
        {/*      top: 30, right: 0, left: 0, bottom: 0,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*  <CartesianGrid strokeDasharray="3 3" />*/}
        {/*  <XAxis datakey="day"/>*/}
        {/*  <YAxis />*/}
        {/*  <Tooltip />*/}
        {/*  <Line type="monotone" dataKey="time" stroke="#ff6f61" fill="#ff6f61" />*/}
        {/*</LineChart>*/}
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
        <LineChart
            width={320}
            height={200}
            data={data}
            margin={{
              top: 30, right: 0, left: 0, bottom: 0,
            }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis datakey="day"/>
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="time" stroke="#ff6f61" fill="#ff6f61" />
        </LineChart>
      </div>
    </div>
  );
};

export default MonletReport;