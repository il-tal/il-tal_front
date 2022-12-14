import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default class TendencyRadar extends PureComponent {
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
