import React from 'react';
import { View } from 'react-native';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
  VictoryPortal,
  VictoryAxis,
  VictoryGroup,
  VictoryCursorContainer
} from 'victory-native';
import Svg, { Circle } from 'react-native-svg';

const LineChart = ({ data = [], xKey='x', yKey='y', width = 50, height = 50, title = '',
  domainPadding = { x: 0, y: 15 }, tickValues = [], chartPadding = {left: 40, top:30, bottom:35, right:35 },
  dependentAxisOrientation = 'left', titleColor = 'white', axisColor = 'white', tickLabelColor = 'white',
  selectedData = 0
}) => {
  if (data === []) return (<View/>)
  const { titleStyle, axisDateStyle, axisTempStyle } = styles;
  const startingTime = tickValues[0];
  let currentDate = 0;
  //console.log('linechartData:', data);
  return (
      <VictoryChart
        standalone={true}
        theme={VictoryTheme.material}
        domainPadding={domainPadding}
        width={width}
        height={height}
        padding={chartPadding}
      >

      <VictoryAxis
        scale="time"
        standalone={true}
        style={axisDateStyle}
        tickValues={tickValues}
        tickFormat={
          (x) => { return (`${x.getHours()}h`);}
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
        style={{ stroke: titleColor, fill: titleColor, fontSize: "20px" }}
        text={title}
        x={width*0.5}
        y={height*0.07}
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
            data: { stroke: "#c43a31", strokeWidth: 3 }
          }}
          data={data}
          x={xKey}
          y={yKey}
        />
      </VictoryPortal>
    </VictoryChart>
  );
};

const styles = {
  chartStyle: {
    parent: {
      borderWidth: 5,
      borderColor: 'red'
    }
  },
  titleStyle: {
    fontSize: "20px",
  },
  axisDateStyle: {
    axis: { stroke: "white", strokeWidth: 1},
    tickLabels: { stroke: "white", fontSize: "8px" },
    grid: { stroke: "darkgrey" },
    ticks: {
      size: (tick) => 4,
      stroke: "white",
      strokeWidth: 1
    }
  },
  axisTempStyle: {
    axis: { stroke: "white", strokeWidth: 1},
    tickLabels: { stroke: "white", fontSize: "8px" },
    grid: { stroke: "darkgrey" },
    ticks: {
      size: (tick) => 4,
      stroke: "white",
      strokeWidth: 1
    }
  }
};

export { LineChart };
