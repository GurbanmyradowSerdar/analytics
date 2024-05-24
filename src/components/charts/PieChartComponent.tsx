import ChartCardWrapper from "components/charts/ChartCardWrapper";
import useWindowWidth from "hooks/useWindowWidth";
import { calculatingResponsiveSize } from "src/utils";
import { IClassNameProps } from "types";
import { CallbackArgs, VictoryPie } from "victory";
import { twMerge as tw } from "tailwind-merge";

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

function PieChartComponent({ className }: IClassNameProps) {
  const windowWidth = useWindowWidth();
  return (
    <ChartCardWrapper className={tw(className, "gap-28 flex items-center")}>
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
            fontSize: calculatingResponsiveSize<string>(
              windowWidth,
              "30px",
              "30px",
              "30px"
            ),
            opacity: 0,
            transitionProperty: "all",
            transitionDuration: "300ms",
          },
        }}
        width={calculatingResponsiveSize<number>(windowWidth, 550, 520, 520)}
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
      <div className="flex flex-col gap-5 max-lg:gap-3">
        {pieData.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-[2px]">
              <p
                className="text-3xl max-lg:text-2xl"
                style={{ color: item.labelColor }}
              >
                {`${item.y}%`}
              </p>
              <p className="text-lg max-lg:text-base">{item.label}</p>
            </div>
          );
        })}
      </div>
    </ChartCardWrapper>
  );
}

export default PieChartComponent;
