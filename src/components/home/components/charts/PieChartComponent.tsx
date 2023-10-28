import { IClassName } from "../../../../types";
import { VictoryPie, CallbackArgs } from "victory";
import ChartCardWrapper from "./ChartCardWrapper";

const pieData = [
  {
    x: "option-1",
    y: 34,
    label: "option 1",
    labelColor: "#EF2A82",
  },
  {
    x: "option-2",
    y: 29,
    label: "option 2",
    labelColor: "#0088F0",
  },
  {
    x: "others",
    y: 37,
    label: "others",
    labelColor: "#D1D5DB",
  },
];

function PieChartComponent({ className }: IClassName) {
  return (
    <ChartCardWrapper className={`${className} gap-28 flex items-center `}>
      <VictoryPie
        data={pieData}
        animate={{
          duration: 300,
        }}
        colorScale={["#EF2A82", "#0088F0", "#D1D5DB"]}
        padAngle={3.4}
        innerRadius={100}
        labels={({ data }) => data.label}
        style={{
          labels: {
            fill: (args: CallbackArgs) => args.datum.labelColor,
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: "20px",
            opacity: 0,
            transitionProperty: "all",
            transitionDuration: "300ms",
          },
        }}
        width={470}
        events={[
          {
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "labels",
                    mutation: (props) => {
                      return {
                        style: { ...props.style, opacity: 1 },
                      };
                    },
                  },
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    target: "labels",
                    mutation: (props) => {
                      return {
                        style: { ...props.style, opacity: 0 },
                      };
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
      <div className="flex flex-col gap-5">
        {pieData.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-[2px]">
              <p className="text-4xl" style={{ color: item.labelColor }}>
                {`${item.y}%`}
              </p>
              <p className="text-lg">{item.label}</p>
            </div>
          );
        })}
      </div>
    </ChartCardWrapper>
  );
}

export default PieChartComponent;