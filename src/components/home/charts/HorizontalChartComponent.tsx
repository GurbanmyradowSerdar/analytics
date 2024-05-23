import { IClassNameProps } from "../../../types";
import ChartCardWrapper from "./ChartCardWrapper";
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { calculatingResponsiveSize } from "../../../utils";
import useWindowWidth from "../../../hooks/useWindowWidth";

const option1 = [
  {
    x: 2,
    y: 2.5,
  },
  {
    x: 4,
    y: 1,
  },
  {
    x: 6,
    y: 3,
  },
  {
    x: 8,
    y: 4,
  },
  {
    x: 10,
    y: 3.2,
  },
];
const option2 = [
  {
    x: 1,
    y: 4,
  },
  {
    x: 3,
    y: 3.5,
  },
  {
    x: 5,
    y: 3.2,
  },
  {
    x: 7,
    y: 2,
  },
  {
    x: 9,
    y: 5,
  },
];

const HorizontalChartComponent = ({ className }: IClassNameProps) => {
  const windowWidth = useWindowWidth();
  return (
    <ChartCardWrapper className={`${className}`}>
      <VictoryChart
        horizontal
        domainPadding={10}
        animate={{
          onLoad: {
            duration: 1000,
          },
        }}
      >
        <VictoryAxis
          tickValues={option1.map((item) => item.x)}
          tickFormat={["18-24", "25-34", "35-44", "45-54", "54-65"]}
          tickLabelComponent={
            <VictoryLabel
              style={{
                fontFamily: "Roboto",
                fontSize: calculatingResponsiveSize<string>(
                  windowWidth,
                  "14px",
                  "16px",
                  "16px"
                ),
              }}
            />
          }
        />
        <VictoryAxis
          dependentAxis
          tickValues={option1.map((item) => item.y)}
          tickFormat={[""]}
        />
        <VictoryGroup offset={8}>
          <VictoryBar
            data={option1}
            style={{
              data: {
                fill: "#EF2A82",
              },
            }}
            cornerRadius={5}
            barWidth={9}
          />
          <VictoryBar
            data={option2}
            style={{ data: { fill: "#0088F0" } }}
            cornerRadius={5}
            barWidth={9}
          />
        </VictoryGroup>
      </VictoryChart>
    </ChartCardWrapper>
  );
};

export default HorizontalChartComponent;
