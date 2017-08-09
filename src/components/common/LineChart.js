import React from 'react';
import { View } from 'react-native';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
  VictoryPortal,
  VictoryAxis
} from 'victory-native';
import {
  titleStyle,
  axisDateStyle,
  axisTempStyle
} from '../../styles/chartStyles';

const LineChart = ({
  data = [],
  xKey = 'x',
  yKey = 'y',
  width = 50,
  height = 50, title = '',
  domainPadding = { x: 0, y: 15 },
  tickValues = [],
  chartPadding = { left: 40, top: 30, bottom: 35, right: 35 },
  dependentAxisOrientation = 'left',
  titleColor = 'white',
}) => {
  if (data === []) return (<View />);
  //console.log('linechartData:', data);
  return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={domainPadding}
        width={width}
        height={height}
        padding={chartPadding}
      >

      <VictoryAxis
        scale="time"
        style={axisDateStyle}
        tickValues={tickValues}
        tickFormat={
          (x) => (`${x.getHours()}h`)
        }
      />
      <VictoryAxis
        dependentAxis
        standalone={false}
        orientation={dependentAxisOrientation}
        scale="linear"
        style={axisTempStyle}
      />

      <VictoryLabel
        textAnchor="middle"
        style={{ stroke: titleColor, fill: titleColor, fontSize: '20px' }}
        text={title}
        x={width * 0.5}
        y={height * 0.07}
      />

      <VictoryPortal>
        <VictoryLine
          animate={{
            onEnter: { duration: 500 },
            onExit: { duration: 500 }
          }}
          standalone={false}
          interpolation="natural"
          style={{
            data: { stroke: '#c43a31', strokeWidth: 3 }
          }}
          data={data}
          x={xKey}
          y={yKey}
        />
      </VictoryPortal>
    </VictoryChart>
  );
};

export { LineChart };
