import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// const Tendata = [
//   { name: "겁", value: User.data.lessScare },
//   { name: "방", value: User.data.roomSize },
//   { name: "자물쇠", value: User.data.lockStyle },
//   { name: "장치", value: User.data.device },
//   { name: "인테리어", value: User.data.interior },
//   { name: "활동성", value: User.data.lessScare },
//   { name: "삑딱쿵", value: User.data.surpris },
// ];

export default class Example extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis
            domain={[0, 5]}
            angle={150}
            ticks={[1, 2, 3, 4, 5]}
          />
          <Radar
            name="value"
            dataKey="value"
            stroke="#06c387"
            fill="#06c387"
            fillOpacity={0.45}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
