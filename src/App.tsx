import React from "react";

import MonletTemplate from "./components/MonletTemplate";
import MonletReport from "./components/MonletReport";
import MonletFooter from "./components/MonletFooter";
import MonletFoodItem from "./components/MonletItems/MonletFoodItem";
import MonletKeywordItem from "./components/MonletItems/MonletKeywordItem";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MonletTemplate
        header={{
          date: "2019. 12.",
          title: "잠들기 전 까지도 노력했던 다희님의 12월",
          total_time: 872,
          top_work_out: "스쿼트",
          my_keyword: "걷자"
        }}
        report={<MonletReport
          time_report={{
            title: ['다희님은 주로', '밤 11시 30분에 운동을 마치셨군요'],
            extra: '이번 달 운동을 마친시간',
            content: 'hello'
          }}
          workout_report={{
            title: ['스쿼트를 무려', '3시간 24분이나 했어요!'],
            extra: '이번 달 가장 많이 한 운동',
          }}
          difficulty_report={{
            title: ['체감 운동 강도가 3.3이었네요.', '다음 달은 운동 난이도를 올려볼까요?'],
            extra: '이번 달 운동 강도',
          }}
        />}
        footer={<MonletFooter
          title={['잠들기 전까지도 노력했던', '다희님의 12월']}
          content={[
            '이번 달은 주로',
            '밤 10시 넘어 운동을 하신 것 같아요.',
            '하루의 끝에도 습관성형을 위해 노력한',
            '다희님이 자랑스러워요!'
          ]}
        />}
      >
        {[
          (<MonletFoodItem/>),
          (<MonletKeywordItem/>)
        ]}

      </MonletTemplate>
    )
  }
}

export default App;
